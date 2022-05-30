from fastapi import FastAPI

app = FastAPI()


@app.get('/API/count')
def count():
    return { "data": "hello" };


