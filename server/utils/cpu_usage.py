import psutil

from config import CPU_SAMPLE_TIME


def get_cpu_percent():
    return psutil.cpu_percent(interval=CPU_SAMPLE_TIME, percpu=False)


def print_cpu_percent():
    usage_cpu = get_cpu_percent()
    print(f'Current usage_cpu {usage_cpu}%')
