from sqlalchemy import Column, Integer, Float, DateTime, func

from database import Base


class ContentsCpuUsage(Base):
    __tablename__ = 'cpu usages'

    id = Column(Integer, primary_key=True)
    percent_usage = Column(Float(precision=4))
    time_created = Column(DateTime(timezone=True), server_default=func.now())

    def __repr__(self):
        return f'<User {self.name!r}>'
