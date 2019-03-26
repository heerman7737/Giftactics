let gif={
    topics:["cat","dog","fox","dragon","supercute","mars","kingdom"],
    search:""
}

function printBtn() {
    for (let i = 0; i < gif.topics.length; i++) {
       let btn = document.createElement("button");
       let t = document.createTextNode(gif.topics[i]);
       btn.setAttribute("class","btn");
       btn.appendChild(t);
       document.body.appendChild(btn);
    }
}
function search(){

}
function pressBtn () {
  
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=QpGy8tofOxdRNC5gq0pmrLjq6jadIHbx&q=${gif.topics[i]}&limit=30&offset=0&rating=R&lang=en
`)
.then(sound=>sound.json())
.then(gifs=>{
  document.querySelector('#gifDiv').innerHTML = ''
  gifs.data.forEach(element => {
    let ele=document.createElement('img')
    ele.setAttribute('src',element.images.original.url)
    document.getElementById('gifDiv').append(ele)
    
  });
})
  
  };
printBtn();
