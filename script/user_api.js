async function getData() {
    const response = await fetch('/script/userinfo.json');
    const data = await response.json();
    return data;
  }

//function will be performed only when call from main page

let submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click',()=>{
  var username = document.getElementById('uname').value;
  var password = document.getElementById('upass').value;

  getData().then(data => {
    for(i=0;i<data.length;i++){
      if(data[Object.keys(data)[i]].username === username && data[Object.keys(data)[i]].password === password){
        location.href = '/templates/profile.html';
      }
    }
    return false;
  });
  
})
  
  
  