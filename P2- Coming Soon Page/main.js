// ✅ Countdown Timer
function countdown(){
    const launchDate = new Date("Dec 31, 2025 00:00:00").getTime();
    const now = new Date().getTime();
    const gap = launchDate - now;

    const d = Math.floor(gap / (1000 * 60 * 60 * 24));
    const h = Math.floor((gap / (1000 * 60 * 60)) % 24);
    const m = Math.floor((gap / (1000 * 60)) % 60);
    const s = Math.floor((gap / 1000) % 60);

    document.getElementById("days").innerText = d;
    document.getElementById("hours").innerText = h;
    document.getElementById("minutes").innerText = m;
    document.getElementById("seconds").innerText = s;
}
setInterval(countdown, 1000);

// ✅ Loader Hide on Load
window.onload = () => {
    setTimeout(() => {
        document.querySelector(".loader-wrapper").style.display = "none";
    }, 700);
};

// Particles js
particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 120,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {"value": "#00eaff"},
    "shape": {
      "type": "circle"
    },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3,
      "random": true
    },
    "line_linked": {
      "enable": false
    },
    "move": {
      "enable": true,
      "speed": 1
    }
  }
});
