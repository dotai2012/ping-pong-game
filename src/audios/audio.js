class Audio {
  constructor(src) {
    this.audio = document.createElement('audio');
    this.audio.src = src;
    this.audio.setAttribute('preload', 'auto');
    this.audio.setAttribute('controls', 'none');
    this.audio.style.display = 'none';
    document.body.appendChild(this.audio);
  }

  play() {
    this.audio.play();
  }

  pause() {
    this.audio.pause();
  }

  onEnd(callback) {
    this.audio.addEventListener('ended', () => {
      callback(this.audio);
    });
  }
}

export default Audio;
