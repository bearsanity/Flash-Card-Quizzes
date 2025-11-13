// Flash Card — Unsolved with Boostrap Starter code
document.addEventListener("DOMContentLoaded", function () {
(function () {
  'use strict';
  console.log(document.getElementById("header-themes"));
  // Starter data (You can replace with your own topic)
  var cardSets = {
    sports: [
    { front: 'What is the name of the Toronto Baseball team? (MLB)', back: 'Toronto Blue Jays' },
    { front: 'What is the name of the Toronto Hockey team? (NHL)', back: 'Toronto Maple Leafs' },
    { front: 'What is the name of the Toronto Basketball team? (NBA)', back: 'Toronto Raptors' },
    { front: 'What is the name of the Toronto Soccer team? (MLS)', back: 'Toronto FC'},
    { front: 'What is the name of the Toronto Football team? (CFL)', back: 'Toronto Argonauts'}],
    html: [
    { front: "What does HTML stand for?", back: "HyperText Markup Language" },
    { front: "What tag defines the main content of a webpage?", back: "<body>" },
    { front: "Which tag is used for the largest heading?", back: "<h1>" },
    { front: "What tag is used to add a hyperlink?", back: "<a>" },
    { front: "Which tag is used to display an image?", back: "<img>" },
    { front: "What tag defines a paragraph?", back: "<p>" }],
    css: [
    { front: "What does CSS stand for?", back: "Cascading Style Sheets" },
    { front: "Which property changes the text color?", back: "color" },
    { front: "Which property changes the background color?", back: "background-color" },
    { front: "What property controls the size of text?", back: "font-size" },
    { front: "How do you select an element with a class in CSS?", back: ".classname" },
    { front: "How do you select an element with an ID?", back: "#idname" }],
    javascript: [
    { front: "What does JS stand for?", back: "JavaScript" },
    { front: "Which keyword declares a variable that can be changed?", back: "let" },
    { front: "Which keyword declares a constant variable?", back: "const" },
    { front: "How do you write to the console?", back: "console.log()" },
    { front: "How do you define a function?", back: "function myFunction() { }" },
    { front: "How do you comment a single line?", back: "// comment" }]
  };

  // State
  var current = 0;
  var showingFront = true;
  // placeholder until a theme is chosen
  var cards = [];


  // Elements
  var flashcardEl = document.getElementById('flashcard');
  var cardTextEl = document.getElementById('card-text');
  var prevBtn = document.getElementById('prev-btn');
  var nextBtn = document.getElementById('next-btn');
  var flipBtn = document.getElementById('flip-btn');

  // Optional UI
  var counterEl = document.getElementById('counter');
  var progressBarEl = document.getElementById('progress-bar');
  var percentLabelEl = document.getElementById('percent-label');
  var sideBadgeEl = document.getElementById('side-badge');
  var themeScreen = document.getElementById("theme-select");
  var flashScreen = document.getElementById("flashcard-screen");
  var headerThemes = document.getElementById("header-themes");
  
  // --- Render function (front/back text + basic counter) ---
  function render() {
    var c = cards[current];
    cardTextEl.textContent = showingFront ? c.front : c.back;

    // Counter is implemented so you can see effect of prev/next
    if (counterEl) {
      counterEl.textContent = (current + 1) + ' of ' + cards.length;
    }

    // TODO: Update progress width (percent complete)
    let percent = ((current + 1) / cards.length) * 100;
    progressBarEl.style.width = percent + "%";
    percentLabelEl.textContent = percent.toFixed(0) + '%';
    // TODO: Update side badge to "Front" / "Back"
    sideBadgeEl.textContent = showingFront ? 'Front' : 'Back';
  }

  // --- Prev/Next: fully implemented with wrap-around ---
  function goNext() {
    current = (current + 1) % cards.length; // wrap to 0
    showingFront = true; // reset to front when moving to a new card
    render();
  }

  function goPrev() {
    current = (current - 1 + cards.length) % cards.length; // wrap to last
    showingFront = true; // reset to front when moving to a new card
    render();
  }

  // --- Events: Prev/Next wired for students to build on ---
  nextBtn.addEventListener('click', function () {
    goNext();
  });

  prevBtn.addEventListener('click', function () {
    goPrev();
  });

  // TODO: Flip behavior (click card or Flip button to toggle front/back)
  function flip() {
    showingFront = !showingFront;
    render();
  }
  
  flipBtn.addEventListener('click', function () {
    flip();

  })

  // TODO: Keyboard shortcuts: ArrowRight = next, ArrowLeft = prev, Space/Enter = flip
document.addEventListener("keydown", function (event) {
  if (event.repeat) return; // ignore held-down keys

  // stop the page from scrolling when pressing space
  if (event.key === " " || event.key === "Enter") {
    event.preventDefault();
    flip(); // call your existing flip() function
  } else if (event.key === "ArrowLeft") {
    goPrev();
  } else if (event.key === "ArrowRight") {
    goNext();
  }
  });
  //this is to flip when clicking on the card
  flashcardEl.addEventListener("click", flip);
  
  document.querySelectorAll("#theme-select button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const theme = e.target.dataset.theme;
      cards = cardSets[theme];
      current = 0;
      showingFront = true;
      themeScreen.style.display = "none";
      flashScreen.style.display = "block";
      headerThemes.style.display = "block"; //to switch header visibility
      render();
     });
    });
    document.querySelectorAll("#header-themes button").forEach((btn) => {
      btn.addEventListener("click", (e) => {
        const theme = e.target.dataset.theme;
        cards = cardSets[theme];
        current = 0;
        showingFront = true;
        render();
       });
    });

  // Hide flashcards until theme selected
flashScreen.style.display = "none";
  })();
});