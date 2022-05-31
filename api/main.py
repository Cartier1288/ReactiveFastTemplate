from fastapi import FastAPI, Response, status
from fastapi.middleware.cors import CORSMiddleware
import sqlalchemy as sql
import asyncio

import db
from db.tables import *

app = FastAPI()

# CORS MIDDLEWARE

ALLOWED_ORIGINS = [
    'http://127.0.0.1:3000',
    'http://localhost:3000',
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# LIFECYCLE EVENTS

@app.on_event("startup")
async def startup():
    await db.conn.connect()

@app.on_event("shutdown")
async def shutdown():
    await db.conn.disconnect()


# ROUTE: COUNT

@app.get('/API/count/{user_id}')
async def count(user_id:int, res: Response):
    query = sql.select(counter.table.c.count)\
            .where(counter.table.c.id == user_id)
    row = await db.conn.fetch_all(query)
    
    if(len(row) > 0):
        row = row[0]
        return { "user_id": user_id, "count": row[0] };
    else:
        res.status_code = status.HTTP_404_NOT_FOUND
        return {}

@app.put('/API/count/{user_id}')
async def count(user_id:int, res: Response):
    query = counter.table.update()\
            .where(counter.table.c.id == user_id)\
            .values(count=counter.table.c.count + 1)
    row = await db.conn.execute(query)

    await asyncio.sleep(1) # just to show a tangible wait time for API

    if(row > 0):
        row = await db.conn.fetch_all(
            sql.select(counter.table.c.count)\
                .where(counter.table.c.id == user_id)
        )
        row = row[0]
        return { "user_id": user_id, "count": row[0] };
    else:
        res.status_code = status.HTTP_404_NOT_FOUND
        return {}


