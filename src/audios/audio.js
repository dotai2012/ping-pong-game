class Audio {
  constructor(src, vol) {
    if (document.querySelector(`audio[src="${src}"]`)) {
      this.audio = document.querySelector(`audio[src="${src}"]`);
    } else {
      this.audio = document.createElement('audio');
      this.audio.src = src;
      this.audio.volume = vol;
      this.audio.setAttribute('preload', 'auto');
      this.audio.setAttribute('controls', 'none');
      this.audio.style.display = 'none';
      document.body.appendChild(this.audio);
    }
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
