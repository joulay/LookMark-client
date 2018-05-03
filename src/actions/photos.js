import { API_BASE_URL } from '../config';
import store from '../store';


export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const getPhotoSuccess = photos => ({
    type: GET_PHOTO_SUCCESS,
    photos
})

export const CREATE_NEW_PHOTO_SUCCESS = 'CREATE_NEW_PHOTO_SUCCESS';
export const createNewPhotoSuccess = photo => ({
    type: CREATE_NEW_PHOTO_SUCCESS,
    photo
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
            console.log(photos)
            return dispatch(getPhotoSuccess(photos))
        })
        .catch(err => console.log(err))
};

//have the reference in db, pass string to client that are state to render images
//add one photo to existing array of photos


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
            dispatch(createNewPhotoSuccess(response.photos));
            console.log(response);
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
