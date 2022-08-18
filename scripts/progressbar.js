window.addEventListener('scroll', (event) => {
    showProgress();
});

function showProgress() {
  let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrolled = (winScroll / height) * 100;
  document.querySelector('.progress-bar').style.width = scrolled + "%";

  let bar = document.body.querySelector('.progress-container')
  if (window.pageYOffset >= 400) {
        bar.classList.remove('progress-container_sticky');
        bar.classList.add('progress-container_fixed');
    } else {
        bar.classList.remove('progress-container_fixed');
        bar.classList.add('progress-container_sticky');
    }

}