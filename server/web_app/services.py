from sqlalchemy import desc

from config import JOB_CPU_INTERVAL_TIME, NUMBER_OF_COORDINATES
from database import db_session
from .models import ContentsCpuUsage
from .schemas import ContentsCpuUsageSchema


class DefaultCpuUsageService:
    def __init__(self, _session=None):
        self.session = _session or db_session

    def get_serialize_data(self):
        schema = ContentsCpuUsageSchema(only=(
            'percent_usage',
            'time_created'
        ))

        data = schema.dump(self._make_query(), many=True)
        return data


class CpuUsageService(DefaultCpuUsageService):
    """  This service intended for use exclusively by /api/cpu_usage """

    def _make_query(self):
        return self.session.\
            query(ContentsCpuUsage)\
            .order_by(desc(ContentsCpuUsage.time_created))\
            .limit(NUMBER_OF_COORDINATES)


class AverageCpuUsageService(DefaultCpuUsageService):
    """  This service intended for use exclusively by /api/average_cpu_usage """

    def _make_query(self):
        count_of_rows = 60 // JOB_CPU_INTERVAL_TIME * NUMBER_OF_COORDINATES
        return self.session.\
            query(ContentsCpuUsage)\
            .order_by(desc(ContentsCpuUsage.time_created))\
            .limit(count_of_rows)

    def _remake_data(self, data):
        remaked_data = []
        for _ in range(NUMBER_OF_COORDINATES):
            tmp_data = []
            while len(tmp_data) < 60 // JOB_CPU_INTERVAL_TIME:
                tmp_data.append(data.pop())
            percent_usage_list = [item['percent_usage'] for item in tmp_data]
            average_percent_usage = round(sum(percent_usage_list) / len(percent_usage_list), 1)
            time_created = tmp_data[0]['time_created']
            result = {'percent_usage': average_percent_usage, 'time_created': time_created}
            remaked_data.append(result)

        remaked_data.reverse()
        return remaked_data

    def get_modify_serialize_data(self):
        data = self.get_serialize_data()
        filtered_data = self._remake_data(data)

        return filtered_data
