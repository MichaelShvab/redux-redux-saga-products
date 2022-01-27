import { takeEvery, put } from "redux-saga/effects";
import { delay } from "redux-saga/effects";
import products from '../data'

function* fetchProductsAsync() {
  yield delay(2000);
  yield put({ type: "FETCH_PRODUCTS_ASYNC", value: products });
  yield put({ type: "SET_LOADING", value: false });
}

export function* watchFetchProducts() {
  yield takeEvery("FETCH_PRODUCTS", fetchProductsAsync);
}
