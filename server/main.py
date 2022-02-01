from flask import Flask

from config import TIME_ZONE
from utils.sheduler import start_cpu_usage_background, stop_main_thread

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Flask is working</p>"


if __name__ == '__main__':
    scheduler = start_cpu_usage_background(TIME_ZONE)
    try:
        # This is a web application on Flask
        app.run()

    except (KeyboardInterrupt, SystemExit):
        # Not strictly necessary if daemonic mode is enabled but should be done if possible
        stop_main_thread(scheduler)
