document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    const playPauseButton = document.getElementById('playPause');
    const volumeSlider = document.getElementById('volume');
    const speedDisplay = document.getElementById('speed');
    const speedUpButton = document.getElementById('speedUp');
    const speedDownButton = document.getElementById('speedDown');

    playPauseButton.addEventListener('click', () => {
        if (video.paused) {
            video.play();
            playPauseButton.textContent = 'Pause';
        } else {
            video.pause();
            playPauseButton.textContent = 'Play';
        }
    });

    volumeSlider.addEventListener('input', () => {
        video.volume = volumeSlider.value;
    });

    speedUpButton.addEventListener('click', () => {
        video.playbackRate += 0.25;
        speedDisplay.textContent = `${video.playbackRate.toFixed(2)}x`;
    });

    speedDownButton.addEventListener('click', () => {
        video.playbackRate -= 0.25;
        if (video.playbackRate < 0.25) video.playbackRate = 0.25;
        speedDisplay.textContent = `${video.playbackRate.toFixed(2)}x`;
    });
});
