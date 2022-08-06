const colors = ['green', 'red', 'rgba(133, 122, 200)', '#f15025'];

// Select btn and span 
const btn = document.getElementById('btn');
const spanColor = document.getElementById('color');

btn.addEventListener('click', () => {
  // Create random number [0 - 3] and select color from colors with given number
  const randomNumber = getRandomNumber(colors.length);
  document.body.style.backgroundColor = colors[randomNumber];
  spanColor.textContent = colors[randomNumber];
});

// Returns a random integer, [0 - max)
const getRandomNumber = (max) => {
  return Math.floor(Math.random() * max);
}