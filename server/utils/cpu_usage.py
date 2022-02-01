import psutil
from sqlalchemy.orm import Session

from config import CPU_SAMPLE_TIME
from database import engine
from models import ContentsCpuUsage


def get_cpu_percent():
    return psutil.cpu_percent(interval=CPU_SAMPLE_TIME, percpu=False)


def write_in_db_cpu_data():
    cpu_usage_data = ContentsCpuUsage(percent_usage=get_cpu_percent())

    session = Session(engine)
    session.add(cpu_usage_data)
    session.commit()
    session.close()
