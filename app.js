const button = document.querySelector('button');
button.addEventListener('click', () => {
  const newColor = randColorGenerator();
  document.body.style.backgroundColor = `rgb(${newColor.join()})`;
  const h1 = document.querySelector('h1');
  h1.innerText = `rgb(${newColor.join()})`;
  h1.style.color = `rgb(${headerColor(newColor).join()})`;
});

const randColorGenerator = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return [r, g, b];
};

const headerColor = (color = [0, 0, 0]) => {
  if (color[0] <= 100 && color[1] <= 100 && color[2] <= 100) {
    console.log(`${color[0]} ${color[1]} ${color[2]}`);
    return [255, 255, 255];
  }
  return [0, 0, 0];
};
