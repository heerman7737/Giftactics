let gif={
    topics:["cat","dog","fox","dragon","supercute","mars","kingdom"],
    search:""
}
let mytopic=gif.topics[0]
function printBtn() {
    for (let i = 0; i < gif.topics.length; i++) {
       let btn = document.createElement("button");
       let t = document.createTextNode(gif.topics[i]);
       btn.setAttribute("class","btn");
       btn.appendChild(t);     
       document.body.appendChild(btn);

       // Do not understand why mytopic does not get the value from gif.topics[i]
       btn.onclick = function() {
        
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=QpGy8tofOxdRNC5gq0pmrLjq6jadIHbx&q=${mytopic}&limit=10&offset=0&rating=R&lang=en
        `)
        .then(mytopic=>mytopic.json())
        .then(gifs=>{
          document.querySelector('#gifDiv').innerHTML = ''
          gifs.data.forEach(element => {
            let ele=document.createElement('img')
            ele.setAttribute('src',element.images.original.url)
            document.getElementById('gifDiv').append(ele)
            
          });
        })
      }
      
    }
}

  

function search(){
  // A search function that take input value from <input>
  // Request from giphy
  // Event create <button class="btn">

}
function clickStill(){
  //Event click change source from images.original to images.original_still
}



printBtn();
