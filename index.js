document.addEventListener('DOMContentLoaded', function () {
    var videoContainer = document.querySelector('.video-container');
    var imageContainer = document.querySelector('.image-container');

    // Reference to the video element
    var video = videoContainer.querySelector('video');

    // When the video ends, hide the video and show the image
    video.addEventListener('ended', function () {
        videoContainer.style.display = 'none';
        imageContainer.style.display = 'block';
    });

    // If there's an error loading the video, show the image
    video.addEventListener('error', function () {
        videoContainer.style.display = 'none';
        imageContainer.style.display = 'block';
    });
});


const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });

    const close = document.getElementById('close'); // Move this line inside the if (bar) block

    if (close) { // Check if close is defined
        close.addEventListener('click', () => {
            nav.classList.remove('active');
        });
    }
}


