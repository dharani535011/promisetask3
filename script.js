// https://meowfacts.herokuapp.com/
// https://api.thecatapi.com/v1/images/search

const root=document.getElementById("root")
const child=`<h1 id="h1">Random Fact About Cat &#128049</h1>
<img id="img" src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="">
<h4 id="h4">Random facts about cats</h4>
<button id="button">Next</button>`
root.innerHTML=child
const button=document.getElementById("button")
button.addEventListener("click",()=>{
    console.log("cat")
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        document.getElementById("root").querySelector("img").src=data[0].url
    })
    fetch("https://meowfacts.herokuapp.com/")
    .then(res=>res.json())
    .then((data)=>{
        console.log(data)
        document.getElementById("root").querySelector("h4").innerText=data.data[0]
    })
})