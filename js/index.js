let textPath = document.querySelector("#text-path");
let titles = document.querySelectorAll(".anim");

function updateTextPathOffset(offset) {
  textPath.setAttribute("startOffset", offset);
}

function onScroll() {
  requestAnimationFrame(function() {
    updateTextPathOffset(window.scrollY * 1.5);
  });
}

window.onscroll = onScroll;

let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting == true) {
      entry.target.classList.add("animate");
    } else {
      entry.target.classList.remove("animate");
    }
  });
});

titles.forEach(title => {
  observer.observe(title);
});
