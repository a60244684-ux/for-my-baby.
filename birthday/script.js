// -------------------
// Generate 3 candles
// -------------------
const candlesContainer = document.querySelector(".candles");

for (let i = 0; i < 3; i++) {
  const candle = document.createElement("div");
  candle.classList.add("small-candle");

  const flame = document.createElement("div");
  flame.classList.add("flame");

  candle.appendChild(flame);
  candlesContainer.appendChild(candle);
}

// -------------------
// Music element
// -------------------
const music = document.getElementById("birthday-song");
music.volume = 0.5;

// -------------------
// Birthday Card
// -------------------
const card = document.querySelector(".birthday-card");
const cardFront = document.querySelector(".card-front");
const cardBook = document.querySelector(".card-book");
const pageLeft = document.querySelector("#page-left");
const pageRight = document.querySelector("#page-right");
const pageNumber = document.querySelector("#page-number");

const pages = [
  [
    `happy birthday to my beautiful boy. today is your special day, the day i get to celebrate 20 years of you being on this earth… and another year of your life where i get to love you and call you mine. i have so much love for you and so many beautiful words i want to say, that is impossible to fit them all into one message. my darling, you filled my heart with love from the very first day. my heart recognised you so early, and without hesitation, it chose yours. it chose you so naturally, like it had already loved you long before i even met you. and since then, that feeling hasn’t faded for even a second… it’s only grown stronger, deeper, more consuming. and even though it might sound strange, a part of me appreciates everything we went through, even the pain, because it led us back to each other. this time, with a deeper understanding, more familiarity of each other, and a stronger sense of where we could go together.`,
    `through everything, we never truly let go of each other, and that means something to me. it shows me that no matter how difficult things get, my heart will continue to choose you, again and again, with even more intensity than before. you are so beautifully made, my love. your fluffy curly hair, your handsome features, your angelic eyes, your cutesy nose, that little birthmark on it too, your lips im so desperate to taste… and that sculptured body... every part of you is perfect in its own way. every detail, every piece of you was created so intentionally, and i feel so thankful that somehow im the one who gets to love you. i think about you in ways i can’t explain… the way i want to be close to you, feel you, touch you, exist next to you… it drives me crazy how much i want you. i hope one day i get the chance to thank your beautiful parents for bringing such a precious soul into this world. and above all, i thank God for you too, for placing you in my life.`
  ],
  [
    `i pray that you are the one i get to love for the rest of my days, the one i get to experience everything with… to wake up next to every morning, to fall asleep with every night, to grow with, to build with, to create a life with. the one i get to give all my love, my energy, my care, and my heart to.. everything i am. i love that my heart is learning you, getting used to loving you more and more every day. and i never want it to unlearn that. i never want a life where loving you isn’t natural to me. on your birthday, i just want you to feel how deeply you are loved. not just in a simple way… but in a way that consumes me, in a way that stays with me in everything i do. you are not just special to me… you are a part of me. i want you to feel how precious you are. you deserve happiness, peace, success, and everything beautiful this life has to offer. and i hope this year brings you one step closer to everything you want to accomplish in your life.`,
    `i don’t just want you in my life, i want you as my life. and even after everything, after every moment, every misunderstanding, every distance between us, my heart still finds its way back to you like it never knew any other place. that’s how i know what i feel for you isn’t something temporary, it isn’t something that fades… it’s something that stays, something that lives inside me no matter what. i know last night wasn’t what you deserved, and it hurts me knowing i made you feel even a second of doubt on a day that was meant to make you feel loved and seen. if i could go back to that moment, i would choose you instantly, without hesitation, the way my heart always does. you didn’t deserve to feel alone, not even for a minute, especially not by me. because you are so much more than that. you are someone i care about deeply, someone i hold so close to my heart, someone i never want to lose.`
  ],
  [
    `you matter to me in ways i can’t fully explain, and i need you to know that one moment will never define how i feel about you. i want to be someone who brings you peace, not overthinking. someone who makes you feel secure, not questioned. someone who shows up for you in the moments that matter the most. and i’m learning, i’m trying, because you are worth that effort to me. and no matter how many birthdays pass, no matter how much time goes by, i hope i’m always there beside you, loving you in every version of you, in every stage of your life. you are mine in my heart, and i am yours in a way that goes beyond just words. and if there’s one thing i’ve realised through everything, it’s that loving you isn’t something i ever want to give up on. no matter how hard things get, no matter how emotional or complicated it becomes, my heart doesn’t look for a way out… it looks for a way back to you.`,
    `i don’t love you in a light or temporary way. i love you in a way that sits deep in my soul, in a way that becomes part of how i think, how i feel, how i exist. you’ve become a part of my everyday, even when you’re not physically here. in the smallest moments, in my thoughts, in the way i look at things… you’re there. and i know we’re not perfect, i know we still have things to learn, but i don’t want perfect. i want real. i want something that grows, that gets stronger, that becomes unbreakable over time. i want us to learn each other in the deepest way, to understand each other without needing to explain everything, to build something that feels safe, stable, and ours. i can’t promise there won’t be difficult moments, but i can promise that my heart will keep choosing you through them. that i won’t stop trying, that i won’t stop caring, that i won’t stop loving you with everything i have.
and maybe one day, when we look back at all of this, it will all make sense to us. maybe we’ll realise that everything we went through only brought us closer to where we were always meant to be. until then, i’ll keep loving you in the way i know how, deeply, honestly, and fully. because in a world where everything changes… you are the one thing my heart never questions. happy birthday again, my love… forever and always. 🫀🫶🏼`
  ]
];

let currentPage = 0;
function updateBook() {
  pageLeft.innerHTML = `<p>${pages[currentPage][0]}</p>`;
  pageRight.innerHTML = `<p>${pages[currentPage][1]}</p>`;
  pageNumber.innerText = `Page ${currentPage + 1} / ${pages.length}`;
}

// Card interactions
cardFront.addEventListener("mouseenter", () => {
  cardBook.style.transform = "translate(-50%, -50%) scale(1)";
  cardFront.style.display = "none";
  updateBook();
  music.volume = 0.025; // quieter for reading
});

cardBook.addEventListener("mouseleave", () => {
  cardBook.style.transform = "translate(-50%, -50%) scale(0)";
  cardFront.style.display = "flex";
  music.volume = 0.5;
});

cardBook.addEventListener("click", () => {
  currentPage = (currentPage + 1) % pages.length;
  updateBook();
});

// -------------------
// Mic + Candle Blow
// -------------------
async function startMicAndCandles() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      audio: { echoCancellation: true, noiseSuppression: true, autoGainControl: true }
    });

    const audioContext = new AudioContext();
    const mic = audioContext.createMediaStreamSource(stream);
    const analyser = audioContext.createAnalyser();
    analyser.fftSize = 512;
    mic.connect(analyser);

    const data = new Uint8Array(analyser.frequencyBinCount);
    const allFlames = document.querySelectorAll(".flame");
    const cooldowns = Array(allFlames.length).fill(0);

    function checkVolume() {
      analyser.getByteFrequencyData(data);
      const volume = data.reduce((a, b) => a + b) / data.length;

      allFlames.forEach((flame, i) => {
        if (volume > 25 && cooldowns[i] <= 0) {
          flame.style.display = "none";
          cooldowns[i] = 800;
        } else if (cooldowns[i] <= 0) {
          flame.style.display = "block";
        }

        flame.style.transform = `translateX(-50%) scale(${Math.max(0.5, 1 - volume / 150)})`;
        if (cooldowns[i] > 0) cooldowns[i] -= 16;
      });

      requestAnimationFrame(checkVolume);
    }

    checkVolume();
    await music.play();

  } catch (err) {
    console.log("Mic or audio error:", err);
  }
}

// -------------------
// First gesture triggers everything
// -------------------
let gestureStarted = false;
let startX = 0;
let startY = 0;

function startExperience() {
  if (gestureStarted) return;
  gestureStarted = true;

  startMicAndCandles();

  // Remove listeners after first gesture
  document.body.removeEventListener("click", startExperience);
  document.body.removeEventListener("mousedown", onMouseDown);
  document.body.removeEventListener("keydown", startExperience);
  document.body.removeEventListener("touchstart", startExperience);
}

// Detect swipe gesture
function onMouseDown(e) {
  startX = e.clientX;
  startY = e.clientY;

  function onMouseUp(ev) {
    const dx = ev.clientX - startX;
    const dy = ev.clientY - startY;
    if (Math.abs(dx) > 20 || Math.abs(dy) > 20) startExperience();
    document.body.removeEventListener("mouseup", onMouseUp);
  }

  document.body.addEventListener("mouseup", onMouseUp);
}

// Attach gesture listeners
document.body.addEventListener("click", startExperience);
document.body.addEventListener("mousedown", onMouseDown);
document.body.addEventListener("keydown", startExperience);
document.body.addEventListener("touchstart", startExperience);

// -------------------
// Balloons
// -------------------
const balloons = document.querySelectorAll(".balloon");
const spacing = 100 / balloons.length;

balloons.forEach((balloon, i) => {
  const leftPercent = spacing * i + Math.random() * (spacing / 2);
  balloon.style.left = `${leftPercent}%`;
  balloon.style.animation = `rise ${Math.random() * 5 + 6}s linear infinite`;
});