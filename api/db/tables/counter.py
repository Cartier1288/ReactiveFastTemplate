from turtle import st
import sqlalchemy as sql
from pydantic import BaseModel

from ..metadata import metadata

table = sql.Table(
    "counter",
    metadata,
    sql.Column("id", sql.Integer, primary_key=True),
    sql.Column("name", sql.String(128)),
    sql.Column("count", sql.Integer)
)

class base(BaseModel):
    id: int
    name: str
    count: int
    