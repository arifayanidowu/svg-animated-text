let textPath = document.querySelector("#text-path");

function updateTextPathOffset(offset) {
  textPath.setAttribute("startOffset", offset);
}

function onScroll() {
  requestAnimationFrame(function() {
    updateTextPathOffset(window.scrollY * 1.5);
  });
}

window.onscroll = onScroll;
