import os
from databases import Database
import sqlalchemy as sql
from pydantic import BaseModel

from db.metadata import metadata
import db.tables as tables

conn = Database(os.environ.get('API_DB_URL'))

# create the DB engine
engine = sql.create_engine(
    os.environ.get('API_DB_URL'),
    connect_args={"check_same_thread": False}
)

# "create" the tables (in process) 
metadata.create_all(engine)
