import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, postPhoto, deletePhoto } from '../actions/photos'
import FormData from 'form-data';


class PhotoUploader extends React.Component {
    componentDidMount(){
        this.props.dispatch(getPhotos())
    }
    onSubmit(event) {
        event.preventDefault();
        let photo = new FormData();
        photo.append('file', event.target.photo.files[0]);
        this.props.dispatch(postPhoto(photo));
        event.target.photo.value = '';
    }
    onClick(value) {
        this.props.dispatch(deletePhoto(value));
    }

    render() {
        if (!this.props.bride) {
            return null;
        }
        
       const allPhotos = this.props.bride.photos.map((value, index) => {
           return (
                <li key={index} className="photo-list">
                <button className="delete" onClick={()=>this.onClick(value)}>X</button>
                    <img className="photo-image" src={`${value.photo}`} alt="client" /> 
                </li>
           )
       })
       const uploadPhoto = this.props.photos.map((value, index) => {
           return (
                <li key={index} className="photo-list">
                
                    <img className="photo-image" src={`${value}`} alt="client" /> 
                </li>
           )
       })

        return (
            <div className="container">
                <form onSubmit={e=>this.onSubmit(e)}>
                
                        <input className="photo-input" type="file" name="photo" />
                        
                    <button className="edit-button" type="submit">UPLOAD</button>
                </form>
                {this.props.loading && <p className="loading">loading...</p>}
                {uploadPhoto ? uploadPhoto : ''}
                {allPhotos ? allPhotos : ''}
            </div>
        )
    }
}    

const mapStateToProps = state => ({
    bride: state.bride.currentBride,
    photos: state.photo.photos,
    loading: state.photo.loading
})  

export default connect(mapStateToProps)(PhotoUploader);
    
    
    