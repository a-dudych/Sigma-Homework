let events = ["click", "contextmenu", "keydown", "keypress", "mousemove", "mouseover", "scroll", "touchstart", "wheel"];

for (let event of events) {
    window.addEventListener(event, _.debounce(inactivity, 400, {'leading': true}))
  }
  
  let timeId;
function inactivity(){
    clearTimeout(timeId);
    timeId = setTimeout(() => confirm('Are you here?') ? inactivity() : closeWindow(), 60000)
  }


  
  function closeWindow() {
      window.close();
      alert("Probably you can see this window, and it means your browser doesn't support window.close(). Details: https://developer.mozilla.org/en-US/docs/Web/API/Window/close")
  }