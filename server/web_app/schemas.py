from marshmallow import fields
from marshmallow_sqlalchemy import SQLAlchemySchema

from .models import ContentsCpuUsage


class ContentsCpuUsageSchema(SQLAlchemySchema):

    class Meta(SQLAlchemySchema.Meta):
        model = ContentsCpuUsage

    id = fields.Number()
    percent_usage = fields.Decimal()
    time_created = fields.DateTime()
