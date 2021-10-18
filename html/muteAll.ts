function muteMe(elem: HTMLElement) {
  elem.muted = true;
  elem.pause();
}

/** Try to mute all video and audio elements on the page */
function mutePage() {
  document.querySelectorAll("video, audio").forEach((elem: HTMLElement) =>
    muteMe(elem)
  );
}

export default mutePage;
