import Images from '../constants/index';


const laodImages = () => ({
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


export {
    laodImages, setImages, setError
}