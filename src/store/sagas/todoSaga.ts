import { put, takeEvery } from "redux-saga/effects";
import { ADD_TODO_ASYNC, TodoActionTypes } from "../types";

function* addTodoAsync(action: TodoActionTypes) {
  yield new Promise((resolve) => setTimeout(resolve, 1000));

  yield put({ type: ADD_TODO_ASYNC, payload: action.payload });
}

function* watchAddTodoAsync() {
  yield takeEvery(ADD_TODO_ASYNC, addTodoAsync);
}

export default function* todoSaga() {
  yield watchAddTodoAsync();
}
