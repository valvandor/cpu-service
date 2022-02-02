from flask import jsonify, render_template

from database import db_session
from main import app
from .services import CpuUsageService


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
