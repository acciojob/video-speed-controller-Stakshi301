const video = document.getElementById('video');
const speedBar = document.getElementById('speed-bar');
const speedSlider = document.getElementById('speed-slider');

// Update video playback speed and display speed
speedSlider.addEventListener('input', () => {
    video.playbackRate = parseFloat(speedSlider.value);
    speedBar.textContent = `${speedSlider.value}×`;
});
