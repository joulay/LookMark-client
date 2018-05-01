import { API_BASE_URL } from '../config';


const fetchPhotoSuccess = (users) => ({
    type: 'FETCH_PHOTOS_SUCCESS',
    users
})

export const fetchPhoto = () => {
    return (dispatch) => {
        fetch(`${API_BASE_URL}/api/getphotos/`)
        .then(response => response.json())
        .then(photo => dispatch(fetchPhotoSuccess(photo)))
        .catch(err => console.log(err))
    }
}
