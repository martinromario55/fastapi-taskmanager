from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routes.todos import todo_router


app = FastAPI(
    title="FastAPI",
    version="0.1.0",
    description="FastAPI is a modern, fast (high-performance), web framework for building APIs with Python 3.6+ based on standard Python type hints.",
    docs_url="/",
    redoc_url="/redoc",
)

origins = ["http://localhost:3000", "localhost:3000"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


app.include_router(todo_router)
