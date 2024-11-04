const video = document.getElementById('video');
const speedBar = document.getElementById('speed-bar');
const speedSlider = document.getElementById('speed-slider');

// Update video playback speed and display speed
speedSlider.addEventListener('input', () => {
    video.playbackRate = parseFloat(speedSlider.value);
    speedBar.textContent = `${speedSlider.value}×`;
});

function rewind() {
  const video = document.getElementById('video');
  video.currentTime = Math.max(0, video.currentTime - 10); // Rewind by 10 seconds
}

function skip() {
  const video = document.getElementById('video');
  video.currentTime = Math.min(video.duration, video.currentTime + 25); // Skip forward by 25 seconds
}
