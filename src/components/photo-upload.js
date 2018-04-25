import React from 'react';


export default function Photos() {
    
    return (
        <div>
            <input type="file" accept="image/*" capture="camera" />
            <p>Image.jpg, Image2.jpg, Image3.jpg</p>

        </div>
)

}


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