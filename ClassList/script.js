function addHighlight() {
    let divElement = document.getElementById('myDiv');
    divElement.classList.add('highlight');
    console.log("hello");
  }

  function removeHighlight() {
    let divElement = document.getElementById('myDiv');
    divElement.classList.remove('highlight');
  }

  function toggleBold() {
    let divElement = document.getElementById('myDiv');
    divElement.classList.toggle("bold");
  }