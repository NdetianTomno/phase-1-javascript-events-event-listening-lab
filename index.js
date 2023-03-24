const input = document.getElementById('input');

  function addingEventListener() {
    
    console.log('I was clicked!');
    input.addEventListener('click', addingEventListener);
  }

 

  