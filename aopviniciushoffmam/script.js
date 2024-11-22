const videoUrls = [
    "https://www.youtube.com/embed/dQw4w9WgXcQ",
    "https://www.youtube.com/embed/tgbNymZ7vqY",
    "https://www.youtube.com/embed/3tmd-ClpJxA"
];

let currentVideoIndex = 0;

function updateVideo() {
    const iframe = document.querySelector('.video-container iframe');
    iframe.src = videoUrls[currentVideoIndex];
}

function nextVideo() {
    currentVideoIndex = (currentVideoIndex + 1) % videoUrls.length;
    updateVideo();
}

function prevVideo() {
    currentVideoIndex = (currentVideoIndex - 1 + videoUrls.length) % videoUrls.length;
    updateVideo();
}