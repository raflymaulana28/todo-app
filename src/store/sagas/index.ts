import { all } from "redux-saga/effects";
import todoSaga from "./todoSaga";

function* rootSaga() {
  yield all([
    // Masukkan saga lain di sini jika ada
    todoSaga(),
  ]);
}

export default rootSaga;
