function Hello(){
  const buttonElement = document.querySelector('.click');
  if (buttonElement.innerText === 'Click me!') {
      buttonElement.innerHTML = alert('Hello World!');
      document.querySelector('.result').innerText = 'Thanks for Contacting Kotech Farms Solution'
      //buttonElement.classList.add ('')
    //} else {
      buttonElement.innerHTML = 'Click me!';
  }
}