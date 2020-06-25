import Util from './util';
import axios from 'axios';

export const setUpModals = () => {
  window.axios = axios;
  const score = document.getElementById("scoreModal");
  const scoreBtn = document.getElementById("score-btn");
  const scoreContent = document.getElementsByClassName("score-content")[0];
  const sCFK = scoreContent.firstElementChild;
  scoreContent.innerHTML = sCFK.outerHTML;
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

  const getScores = () => {
    return axios.get(`http://localhost:5000/api/scores/scores`)
  }

  getScores().then((data) => {
    let hiScore;
    let hiScores = data.data;

    for (let i = 0; i < hiScores.length; i++) {
      hiScore = document.createElement('p')
      hiScore.textContent = `${i+1}. ${hiScores[i].user}  ${hiScores[i].score}`;
      scoreContent.appendChild(hiScore);
    }
  });




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
