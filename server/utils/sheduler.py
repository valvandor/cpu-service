import os

from apscheduler.schedulers.background import BackgroundScheduler

from config import JOB_CPU_INTERVAL_TIME
from utils.cpu_usage import write_in_db_cpu_data


def start_cpu_usage_background(time_zone):
    scheduler = BackgroundScheduler(timezone=time_zone)
    scheduler.add_job(write_in_db_cpu_data, 'interval', seconds=JOB_CPU_INTERVAL_TIME)
    scheduler.start()
    print('Press Ctrl+{0} to exit'.format('Break' if os.name == 'nt' else 'C'))
    return scheduler


def stop_main_thread(scheduler):
    scheduler.shutdown()
