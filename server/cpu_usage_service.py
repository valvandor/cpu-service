from sqlalchemy import desc

from database import db_session
from models import ContentsCpuUsage
from schemas import ContentsCpuUsageSchema


class CpuUsageService:
    """  This service intended for use exclusively by /api/cpu_usage """
    def __init__(self, _session=None):
        self.session = _session or db_session

    def _make_query(self):
        return self.session.\
            query(ContentsCpuUsage)\
            .order_by(desc(ContentsCpuUsage.time_created))\
            .limit(10)

    def get_serialize_data(self):
        schema = ContentsCpuUsageSchema(only=(
            'percent_usage',
            'time_created'
        ))

        data = schema.dump(self._make_query(), many=True)
        return data
