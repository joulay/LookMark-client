import React from 'react';
import { connect } from 'react-redux';
import { getPhotos, postPhoto } from '../actions/photos'
import FormData from 'form-data';
import { PHOTO_BASE_URL } from '../config.js';


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


    render() {
       const allPhotos = this.props.photos.map((value, index) => {
           return (
                <li key={index} className="photo-list">
                    <img className="photo-image" src={`${PHOTO_BASE_URL}${value}`} width="320" height="320" alt="client" /> 
                </li>
           )
       })

        return (
            <div className="container">
                <form onSubmit={e=>this.onSubmit(e)}>
                
                        <input className="photo-input" type="file" name="photo" />
                        
                    <button className="new-client-button" type="submit">Upload</button>
                </form>
                {allPhotos ? allPhotos : ''}
            </div>


        )
    }
}    


const mapStateToProps = state => ({
    bride: state.bride.currentBride,
    photos: state.photo.photos
})  



export default connect(mapStateToProps)(PhotoUploader);
    
    
    
    // constructor(props) {
    //   super(props);
    //     this.state = {
    //       uploadStatus: false
    //     }
    //   this.handleUploadImage = this.handleUploadImage.bind(this);
    // }
  
  
    // handleUploadImage(ev) {
    //   ev.preventDefault();
      
    //     const data = new FormData();
    //     data.append('file', this.uploadInput.files[0]);
    //     console.log(store.getState());
    //     const user = store.getState().bride.currentBride.userId; 
    //     const authToken = localStorage.getItem('authToken')
    //   axios.post(`${API_BASE_URL}/upload/${user}`, data, {
    //     headers: {
    //         'Authorization': `Bearer ${authToken}`,
    //         }
    //     })
    //     .then(function (response) {
    //         this.setState({ image: data, uploadStatus: true });
    //     })
    //     .catch(function (error) {
    //       console.log(error);
    //     })
    // }



    
//     render() {
//         return(
//             <div className="container">
//               <form onSubmit={this.handleUploadImage}>
//                 <div className="form-group">
//                   <input className="form-control"  
//                     ref={(ref) => { this.uploadInput = ref; }} 
//                     type="file" />
//                 </div>
      
//                 <button className="new-client-button" type="submit">Upload</button>
      
//               </form>
//             </div>
//           )
//         }
   
//    }



// import  from 'fine-uploader';

// export default function Photos() {

//     return (
//         <div>
//             <h2>Upload Photo</h2>
//             <form action="/upload" enctype="multipart/form-data" method="post">
//                 <input type="file" name="file" id="file" accept="image/*" capture="camera" />
//                 <label for="file" class="custom-file-label">Choose File</label>
//                 <input type="submit" value="Submit" class="image-submit-button" />
//             </form>

//         <div class="qq-uploader-selector qq-uploader qq-gallery" qq-drop-area-text="Drop files here">
//             <div class="qq-total-progress-bar-container-selector qq-total-progress-bar-container">
//                 <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-total-progress-bar-selector qq-progress-bar qq-total-progress-bar"></div>
//             </div>
//             <div class="qq-upload-drop-area-selector qq-upload-drop-area" qq-hide-dropzone>
//                 <span class="qq-upload-drop-area-text-selector"></span>
//             </div>
//             <div class="qq-upload-button-selector qq-upload-button">
//                 <div>Upload a file</div>
//             </div>
//             <span class="qq-drop-processing-selector qq-drop-processing">
//                 <span>Processing dropped files...</span>
//                 <span class="qq-drop-processing-spinner-selector qq-drop-processing-spinner"></span>
//             </span>
//             <ul class="qq-upload-list-selector qq-upload-list" role="region" aria-live="polite" aria-relevant="additions removals">
//                 <li>
//                     <span role="status" class="qq-upload-status-text-selector qq-upload-status-text"></span>
//                     <div class="qq-progress-bar-container-selector qq-progress-bar-container">
//                         <div role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" class="qq-progress-bar-selector qq-progress-bar"></div>
//                     </div>
//                     <span class="qq-upload-spinner-selector qq-upload-spinner"></span>
//                     <div class="qq-thumbnail-wrapper">
//                         <img class="qq-thumbnail-selector" qq-max-size="120" qq-server-scale />
//                     </div>
//                     <button type="button" class="qq-upload-cancel-selector qq-upload-cancel">X</button>
//                     <button type="button" class="qq-upload-retry-selector qq-upload-retry">
//                         <span class="qq-btn qq-retry-icon" aria-label="Retry"></span>
//                         Retry
//                     </button>

//                     <div class="qq-file-info">
//                         <div class="qq-file-name">
//                             <span class="qq-upload-file-selector qq-upload-file"></span>
//                             <span class="qq-edit-filename-icon-selector qq-edit-filename-icon" aria-label="Edit filename"></span>
//                         </div>
//                         <input class="qq-edit-filename-selector qq-edit-filename" tabindex="0" type="text" />
//                         <span class="qq-upload-size-selector qq-upload-size"></span>
//                         <button type="button" class="qq-btn qq-upload-delete-selector qq-upload-delete">
//                             <span class="qq-btn qq-delete-icon" aria-label="Delete"></span>
//                         </button>
//                         <button type="button" class="qq-btn qq-upload-pause-selector qq-upload-pause">
//                             <span class="qq-btn qq-pause-icon" aria-label="Pause"></span>
//                         </button>
//                         <button type="button" class="qq-btn qq-upload-continue-selector qq-upload-continue">
//                             <span class="qq-btn qq-continue-icon" aria-label="Continue"></span>
//                         </button>
//                     </div>
//                 </li>
//             </ul>

//             <dialog class="qq-alert-dialog-selector">
//                 <div class="qq-dialog-message-selector"></div>
//                 <div class="qq-dialog-buttons">
//                     <button type="button" class="qq-cancel-button-selector">Close</button>
//                 </div>
//             </dialog>

//             <dialog class="qq-confirm-dialog-selector">
//                 <div class="qq-dialog-message-selector"></div>
//                 <div class="qq-dialog-buttons">
//                     <button type="button" class="qq-cancel-button-selector">No</button>
//                     <button type="button" class="qq-ok-button-selector">Yes</button>
//                 </div>
//             </dialog>

//             <dialog class="qq-prompt-dialog-selector">
//                 <div class="qq-dialog-message-selector"></div>
//                 <input type="text" />
//                 <div class="qq-dialog-buttons">
//                     <button type="button" class="qq-cancel-button-selector">Cancel</button>
//                     <button type="button" class="qq-ok-button-selector">Ok</button>
//                 </div>
//             </dialog>
//         </div>

//         </div>
//     )
// }




//upload file locally and keep track of path (i.e /upload/cocainebear.png)
//save this path/directory to mongo
//whenever it's called from frontend, get request(query) /upload/cocainebear.png
//in react <img src={mongo.filepath} />

// {/* <device type="media" onchange="update(this.data)"></device>
// <script>
//   function update(stream) {
//     document.querySelector('video').src = stream.url;
//   }
// </script> */}

// iOS6+ or Android 3.0+

// function hasGetUserMedia() {
//     return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
//   }
  
//   if (hasGetUserMedia()) {
//     alert('good to goooo')
//   } else {
//     alert('getUserMedia() is not supported by your browser');
//   }