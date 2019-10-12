import Images from '../constants/index';


const statsReducer = (state = {}, action) => {
    switch (action.type) {
        case Images.LOAD_STATS:
            return {
                ...state,
                [action.id]: {
                    isLoading: true,
                    downloads: null,
                    error: false,
                },
            };
        case Images.LOAD_STATS_SUCCESS:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: action.downloads,
                    error: false,
                },
            };
        case Images.LOAD_STATS_FAILURE:
            return {
                ...state,
                [action.id]: {
                    isLoading: false,
                    downloads: null,
                    error: true,
                },
            };
        default:
            return state;
    }
};

export default statsReducer;