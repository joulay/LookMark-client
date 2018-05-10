import { API_BASE_URL } from '../config';
import store from '../store';

export const GET_PHOTO_SUCCESS = 'GET_PHOTO_SUCCESS';
export const getPhotoSuccess = photos => ({
  type: GET_PHOTO_SUCCESS,
  photos
});

export const CREATE_NEW_PHOTO_SUCCESS = 'CREATE_NEW_PHOTO_SUCCESS';
export const createNewPhotoSuccess = photo => ({
  type: CREATE_NEW_PHOTO_SUCCESS,
  photo
});

export const CREATE_NEW_PHOTO_REQUEST = 'CREATE_NEW_PHOTO_REQUEST';
export const createNewPhotoRequest = () => ({
  type: CREATE_NEW_PHOTO_REQUEST
});

export const DELETE_PHOTO_SUCCESS = 'DELETE_PHOTO_SUCCESS'; 
export const deletePhotoSuccess = photo => ({
  type: DELETE_PHOTO_SUCCESS,
  photo
});

export const getPhotos = () => dispatch => {
  const authToken = localStorage.getItem('authToken');
  if (!store.getState().bride.brides.length) {
    return false;
  }
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
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(photos => {
      return dispatch(getPhotoSuccess(photos));
    })
    .catch(err => console.log(err));
};

export const postPhoto = photo => dispatch => {
  const authToken = localStorage.getItem('authToken');
  const brideId = store.getState().bride.currentBride.id;

  dispatch(createNewPhotoRequest())
  fetch(`${API_BASE_URL}/photos/${brideId}`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authToken}`
    },
    body: photo
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(response => {
      return dispatch(createNewPhotoSuccess(response.photo));
    });
};

export const deletePhoto = (photo) => dispatch => {
  const authToken = localStorage.getItem('authToken');
  
  const brideId = store.getState().bride.currentBride.id;
  fetch(`${API_BASE_URL}/photos/${brideId}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(photo)
  })
    .then(res => {
      console.log(res, 'aaaaaaaaaaaaaaaa');
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res;
    })
    .then( () => {
      return dispatch(deletePhotoSuccess(photo));
    })
    .catch(err => console.log(err));
};