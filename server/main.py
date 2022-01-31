import os
import time
import psutil
import pytz
from apscheduler.schedulers.background import BackgroundScheduler

TIME_ZONE = 'Europe/Moscow'
CPU_SAMPLE_TIME = 4.9
JOB_CPU_INTERVAL_TIME = 5

selected_time_zone = pytz.timezone(TIME_ZONE)


def get_cpu_percent():
    return psutil.cpu_percent(interval=CPU_SAMPLE_TIME, percpu=False)


def print_cpu_percent():
    usage_cpu = get_cpu_percent()
    print(f'Current usage_cpu {usage_cpu}%')


if __name__ == '__main__':
    scheduler = BackgroundScheduler(timezone=selected_time_zone)
    scheduler.add_job(print_cpu_percent, 'interval', seconds=JOB_CPU_INTERVAL_TIME)
    scheduler.start()
    print('Press Ctrl+{0} to exit'.format('Break' if os.name == 'nt' else 'C'))

    try:
        # This is here to simulate application activity (which keeps the main thread alive).
        while True:
            time.sleep(2.5)
            print('The "app" is still working')

    except (KeyboardInterrupt, SystemExit):
        # Not strictly necessary if daemonic mode is enabled but should be done if possible
        scheduler.shutdown()
