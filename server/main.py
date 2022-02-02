import os

from flask import Flask, render_template, jsonify

from config import TIME_ZONE
from cpu_usage_service import CpuUsageService
from database import init_db, db_session
from utils.sheduler import start_cpu_usage_background, stop_main_thread

app = Flask(__name__)


@app.route("/api/cpu_usage", methods=['GET'])
def get_cpu_usage_data():
    service = CpuUsageService()
    return jsonify(data=service.get_serialize_data())


@app.route("/")
def main():
    return render_template('index.html')


@app.teardown_appcontext
def shutdown_session(exception=None):
    db_session.remove()


if __name__ == '__main__':
    scheduler = start_cpu_usage_background(TIME_ZONE)
    try:
        if not os.path.exists('./sqlite.db'):
            init_db()
        # This is a web application on Flask
        app.run()

    except (KeyboardInterrupt, SystemExit):
        # Not strictly necessary if daemonic mode is enabled but should be done if possible
        stop_main_thread(scheduler)
