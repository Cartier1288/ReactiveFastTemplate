from databases import Database
import asyncio


async def init_db():
    db = Database("sqlite:///test.db")
    await db.connect()


    result = await db.execute(query="""
        DROP TABLE IF EXISTS counter;
    """)
    print(result)


    result = await db.execute(
        query="""
        CREATE TABLE counter(
            id INTEGER PRIMARY KEY,
            name VARCHAR(128),
            count INTEGER
        )
        """
    )
    print(result)

    values = [
        { "name": "John Doe", "count": 314159 },
        { "name": "Jane Doe", "count": 265358 }
    ]
    result = await db.execute_many(query="""
        INSERT INTO counter(name,count) VALUES(:name, :count)
    """, values=values)
    print(result)

    result = await db.fetch_all(query="""
        SELECT * FROM counter
    """)
    print(result)

    await db.disconnect()

asyncio.run(init_db())