import Images from '../constants/index';


const loadImages = () => ({
    type: Images.LOAD
});


const setImages = images => ({
    type: Images.LOAD_IMAGE_SUCCESS,
    images
});

const setError = error => ({
    type: Images.LOAD_IMAGE_FAILURE,
    error

});


const loadImagesStats = id => ({
    type: Images.LOAD_STATS,
    id
});

const setImageStatsSuccess = (id, downloads) => ({
    type: Images.LOAD_STATS_SUCCESS,
    id,
    downloads
});

const setImageStatError = id => ({
    type: Images.LOAD_STATS_FAILURE,
    id
});


export {
    loadImages, setImages, setError, loadImagesStats, setImageStatsSuccess, setImageStatError
}