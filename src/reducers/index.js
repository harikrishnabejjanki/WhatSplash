import { combineReducers } from 'redux';
import LoadingReducer from './LoadingReducer';
import ImagesReducers from './ImagesReducers';
import ErrorReducers from './ErrorReducers';


const rootReducer = combineReducers({
    loading: LoadingReducer,
    images: ImagesReducers,
    error: ErrorReducers
});


export default rootReducer;