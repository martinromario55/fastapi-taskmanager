from fastapi import FastAPI


app = FastAPI(
    title="FastAPI",
    version="0.1.0",
    description="FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.",
    docs_url="/docs",
    redoc_url="/redoc",
)



@app.get("/")
def read_root():
    return {"Hello": "World"}