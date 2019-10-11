import Images from '../constants/index';

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case Images.LOAD_IMAGE_FAILURE:
            return action.error;
        case Images.LOAD:
        case Images.LOAD_IMAGE_SUCCESS:
            return null;
        default:
            return state;
    }
}
export default errorReducer;