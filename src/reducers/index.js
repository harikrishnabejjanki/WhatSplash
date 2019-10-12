import { combineReducers } from 'redux';
import LoadingReducer from './LoadingReducer';
import ImagesReducers from './ImagesReducers';
import ErrorReducers from './ErrorReducers';
import PageReducer from './PageReducer';
import StatsReducer from './StatsReducer';


const rootReducer = combineReducers({
    loading: LoadingReducer,
    images: ImagesReducers,
    error: ErrorReducers,
    nextPage: PageReducer,
    imageStats: StatsReducer
});


export default rootReducer;