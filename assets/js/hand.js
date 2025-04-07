const hand = document.querySelector('.hand')
const text = ["B","e","y","o","n","d"," ","t","h","e"," ","Q","u","a","n","t","u","m"," ","H","o","r","i","z","o","n"]
const text_field = document.querySelector('.text-field')
let y = 0  
let x = 0;  // Startposition for tekstindex
let delayFactor = 50;  // Forsinkelse mellem animationer

function animate() {
  if (x < text.length) {
    // Opdater venstre position
    y += (x + 7);

    // Opdater DOM
    hand.style.left = y + 'px';
    text_field.innerHTML += text[x];

    x++;  // Øg tekstindekset

    // Kald requestAnimationFrame for at fortsætte animationen
    setTimeout(() => {
      requestAnimationFrame(animate);
    }, delayFactor);
  }
}

// Start animationen
requestAnimationFrame(animate);
/* for(let x = 0; x < 26; x++) {
  setTimeout(() => {
    y += (x + 7)
    hand.style.left = y + 'px'; // Opdaterer venstre position
    text_field.innerHTML += text[x]
  }, x * 100);
} */