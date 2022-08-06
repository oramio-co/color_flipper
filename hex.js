// Select btn and span 
const btn = document.getElementById('btn');
const spanColor = document.getElementById('color');

btn.addEventListener('click', () => {
  // Create random number [0 - 2^24) and sets the background to that hex value.
  // Hex values can range from 000000 - ffffff and are 1-1 to 0 - (2^24 - 1).
  const randomNumber = getRandomNumber(2 ** 24).toString(16);
  document.body.style.backgroundColor = `#${randomNumber}`;
  spanColor.textContent = `#${randomNumber}`;
});

// Returns a random integer, [0 - max)
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}