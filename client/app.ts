window.addEventListener('DOMContentLoaded', () => {
  fetch('/api/books')
    .then((resp) => resp.json())
    .then((json) => {
      var e = document.querySelector('#content');
      if (e) e.textContent = json.value
    })
    .catch((error) => console.log(error)); 
}, false)
