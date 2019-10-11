import Images from '../constants/index';


const loadingReducer = (state = false, action) => {

    switch (action.type) {
        case Images.LOAD:
            return true;
        case Images.LOAD_IMAGE_SUCCESS:
            return false;
        case Images.LOAD_IMAGE_FAILURE:
            return false;
        default:
            return state;
    }
}


export default loadingReducer;