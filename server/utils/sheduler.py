import os

from apscheduler.schedulers.background import BackgroundScheduler

from config import JOB_CPU_INTERVAL_TIME
from utils.cpu_usage import print_cpu_percent


def start_cpu_usage_background(time_zone):
    scheduler = BackgroundScheduler(timezone=time_zone)
    scheduler.add_job(print_cpu_percent, 'interval', seconds=JOB_CPU_INTERVAL_TIME)
    scheduler.start()
    print('Press Ctrl+{0} to exit'.format('Break' if os.name == 'nt' else 'C'))
    return scheduler


def stop_main_thread(scheduler):
    scheduler.shutdown()
