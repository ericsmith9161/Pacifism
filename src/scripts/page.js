export const setUpModals = () => {
  const score = document.getElementById("scoreModal");
  const scoreBtn = document.getElementById("score-btn");
  const scoreClose = document.getElementsByClassName("close-score")[0];

  scoreBtn.onclick = () => {
    score.style.display = "block";
  }

  scoreClose.onclick = () => {
    score.style.display = "none";
  }

  window.onclick = (event) => {
    if (event.target == score) {
      score.style.display = "none";
    }
  }


  const about = document.getElementById("aboutModal");
  const aboutBtn = document.getElementById("about-btn");
  const aboutClose = document.getElementsByClassName("close-abt")[0];

  aboutBtn.onclick = () => {
    about.style.display = "block";
  }

  aboutClose.onclick = () => {
    about.style.display = "none";
  }

  window.onclick = (event) => {
    if (event.target == about) {
      about.style.display = "none";
    }
  }
}

