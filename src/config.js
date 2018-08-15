
export const API_BASE_URL = process.env.NODE_ENV === 'production'
 ? 'https://lookmarkapp.herokuapp.com/api' 
 : 'http://localhost:8080/api'



export const PHOTO_BASE_URL = process.env.REACT_APP_PHOTO_BASE_URL || 'http://localhost:8080'
