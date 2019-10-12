import Images from '../constants/index';

const pageReducer = (state = 1, action) => {
    switch (action.type) {
        case Images.LOAD_IMAGE_SUCCESS:
            return state + 1
        default:
            return state;
    }
}
export default pageReducer;