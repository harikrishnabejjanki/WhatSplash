import Images from '../constants/index';
const INITIAL_STATE = []

const imagesReducer = (state = INITIAL_STATE, action) => {
    if (action.type === Images.LOAD_IMAGE_SUCCESS) {
        return [...state, ...action.images]
    }
    return state;

};

export default imagesReducer;