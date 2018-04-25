import React from 'react';


export default function Photos() {
    
    return (
        <div>
            <h2>Upload Photo</h2>
            <form action="/upload" enctype="multipart/form-data" method="post">
                <input type="file" name="file" id="file" accept="image/*" capture="camera" />
                <label for="file" class="custom-file-label">Choose File</label>
                <input type="submit" value="Submit" class="image-submit-button" />
                <p>Image.jpg, Image2.jpg, Image3.jpg</p>
            </form>
        </div>
    )
}




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