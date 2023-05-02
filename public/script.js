// request data from backend 
// append to page

function init() {
  fetch("/api/players").then(res => res.json())
  .then(data => {
    console.log(data)
    // put it on the page
  })
}

init()