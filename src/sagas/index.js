import { call, put, takeEvery, takeLatest, all } from 'redux-saga/effects'
import { cardConstants } from './../constants';
import { api } from "./../constants";

 function* getCards({type,offset, paginationIndex}) {
  try {
    const response = yield call(fetch, api + "/v1/properties/country?pagination[offset]=" + offset);
    const data = yield response.json();
    yield put({type: cardConstants.GET_CARDS_SUCCESS,
      cards: data.items,
      total: data.pagination.total,
      limit: data.pagination.limit,
      paginationIndex: paginationIndex})
  } catch (e) {
    yield put({type: cardConstants.GET_CARDS_FAILURE, e})
  }

}

 function* subscribeForData() {
     yield takeEvery(cardConstants.GET_CARDS_REQUEST, getCards)
}
  
export default function* rootSaga() {
  yield all([
    subscribeForData()
  ])
}
