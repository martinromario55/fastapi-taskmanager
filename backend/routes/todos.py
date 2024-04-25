from fastapi import APIRouter, status, HTTPException

from data.db import todos



todo_router = APIRouter(
    prefix="/todos",
    tags=["todos"],
    responses={404: {"description": "Not found"}},
)

# Get all tasks
@todo_router.get("", status_code=status.HTTP_200_OK)
async def get_todos() -> dict:
    return {"data": todos}

# Get a single task
@todo_router.get("/{todo_id}", status_code=status.HTTP_200_OK)
async def get_todo(todo_id: str) -> dict:
    return {"data": [todo for todo in todos if todo["id"] == todo_id]}

# Create a new task
@todo_router.post("", status_code=status.HTTP_201_CREATED)
async def create_todo(todo: dict) -> dict:
    todo["id"] = str(len(todos) + 1)
    todos.append(todo)
    return {
        "data": todo,
    }
    

# Update a task
@todo_router.put("/{todo_id}", status_code=status.HTTP_200_OK)
async def update_todo(todo_id: int, body: dict) -> dict:
    todo_to_update = [todo for todo in todos if int(todo["id"]) == todo_id]
    print('Id', todo_to_update)
    if not todo_to_update:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Todo with id {todo_id} not found",
        )
    todo_to_update[0]["item"] = body["item"]
    print('Update', todo_to_update)
    return {
        "data": todo_to_update[0],
    }
    

# Delete a task
@todo_router.delete("/{todo_id}", status_code=status.HTTP_200_OK)
async def delete_todo(todo_id: int) -> dict:
    todo_to_delete = [todo for todo in todos if int(todo["id"]) == todo_id]
    if not todo_to_delete:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"Todo with id {todo_id} not found",
        )
    todos.remove(todo_to_delete[0])
    return {
        "data": f"Todo with id {todo_id} has been removed successfully!",
    }