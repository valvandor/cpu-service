import os

from flask import Flask
from flask_cors import CORS

from database import init_db
from utils.sheduler import start_cpu_usage_background, stop_main_thread

app = Flask(__name__)
CORS(app, resources={r"/api/*": {"origins": "*"}})


if __name__ == '__main__':
    # importing views before running app
    from web_app.views import *

    scheduler = start_cpu_usage_background()
    try:
        if not os.path.exists('./sqlite.db'):
            init_db()
        # This is a web application on Flask
        app.run()

    except (KeyboardInterrupt, SystemExit):
        # Not strictly necessary if daemonic mode is enabled but should be done if possible
        stop_main_thread(scheduler)
