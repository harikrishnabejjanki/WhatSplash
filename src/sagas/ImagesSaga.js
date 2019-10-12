import { takeEvery, take, put, takeLatest, call, select } from 'redux-saga/effects';
import Images from '../constants/index';
import fetchImages from '../apis/index';
import { setImages, setError } from '../actions/actions';
//worker saga

const getPage = state => state.nextPage;
function* handleImagesLoad() {

    try {
        const pageNum = yield select(getPage);
        const images = yield call(fetchImages, pageNum);
        yield put(setImages(images));
    } catch (error) {
        (
            yield setError(error.toString()));
    }

}




//watcher saga --> actions --> worker saga
// watcher saga
function* watchImagesLoad() {
    yield takeEvery(Images.LOAD, handleImagesLoad)

}

export default watchImagesLoad;