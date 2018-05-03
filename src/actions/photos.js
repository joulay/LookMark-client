import { API_BASE_URL } from '../config';
import store from '../store';


export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const getPhotoSuccess = photos => ({
    type: GET_PHOTO_SUCCESS,
    photos
})


export const getPhotos = () => dispatch => {
    const authToken = localStorage.getItem('authToken');
   
    const brideId = store.getState().bride.currentBride.id;
  
      fetch(`${API_BASE_URL}/photos/${brideId}`, {
          method: 'GET',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${authToken}`
          }
      })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })  
        .then(photos => {
            dispatch(getPhotoSuccess(photos))
        })
        .catch(err => console.log(err))
};


export const postPhoto = (photo) => dispatch => {
   
    const authToken = localStorage.getItem('authToken');
    const brideId = store.getState().bride.currentBride.id;
    
      fetch(`${API_BASE_URL}/photos/${brideId}`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${authToken}`
           
        },
        body: photo
    })
        .then(res => {
            if(!res.ok) {
                return Promise.reject(res.statusText);
            }
            return res.json();
        })
        .then(response => {
            dispatch(getPhotoSuccess(response.photos));
            console.log(response.photos);
        });
};



// const fetchPhotoSuccess = (users) => ({
//     type: 'FETCH_PHOTOS_SUCCESS',
//     users
// })

// export const fetchPhoto = () => {
//     return (dispatch) => {
//         fetch(`${API_BASE_URL}/api/getphotos/`)
//         .then(response => response.json())
//         .then(photo => dispatch(fetchPhotoSuccess(photo)))
//         .catch(err => console.log(err))
//     }
// }
