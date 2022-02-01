import os
from apscheduler.schedulers.background import BackgroundScheduler
from flask import Flask

from config import TIME_ZONE, JOB_CPU_INTERVAL_TIME
from utils.cpu_usage import print_cpu_percent

app = Flask(__name__)


@app.route("/")
def hello_world():
    return "<p>Flask is working</p>"


if __name__ == '__main__':
    scheduler = BackgroundScheduler(timezone=TIME_ZONE)
    scheduler.add_job(print_cpu_percent, 'interval', seconds=JOB_CPU_INTERVAL_TIME)
    scheduler.start()
    print('Press Ctrl+{0} to exit'.format('Break' if os.name == 'nt' else 'C'))

    try:
        # This is a web application on Flask
        app.run()

    except (KeyboardInterrupt, SystemExit):
        # Not strictly necessary if daemonic mode is enabled but should be done if possible
        scheduler.shutdown()
