import React from "react"
import ReactDOM  from "react-dom"
import "./style.css"
import logo from "./troll-face.png"
import memesData from "./memesData"

function Header(){
    return(
<div className="nav-container">
    <nav>
<div className="logo-text">
    <img className="logo" src={logo}></img>
    <h3 className="text">Meme Generator</h3>
</div>
<p className="course-title">React Course - Project 3</p>
    </nav>
</div>
    )
}

function Meme(){
    let [meme, setMeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage : "http://i.imgflip.com/1bij.jpg"
    })
    function handleChange(event){
        let {name,value} = event.target
        setMeme(prev =>{
            return {
                ...prev,
            [name] : value
            }
        })
    }
    let allMemeImages = memesData
    function random(){
    const randomMeme = allMemeImages.data.memes[Math.floor(Math.random() * (allMemeImages.data.memes).length)].url
   setMeme(prevInfo =>({...prevInfo,randomImage:randomMeme}))
}
    return(
   <div className="form">
       <div className="text-input">
        <input name = "topText" value={meme.topText} placeholder="Top text" onChange={handleChange
        } type="text" className="input box1"></input>
        <input name = "bottomText" value={meme.bottomText} placeholder="Bottom text" onChange={handleChange
        } type="text" className="input box2"></input>
        </div>
    <br></br><button onClick={random}>Get a new meme image🔮</button>
   <div className="container-meme">
   <div className="meme-img">
    <img src={meme.randomImage}></img></div>
    <h2 className="meme--top-text">{meme.topText}</h2>
    <h2 className="meme--bottom-text">{meme.bottomText}</h2>
    </div>        
    </div>
   )
}


function App(){
// function click(){
//     console.log("I was clicked!") }
// const thingsArray = ["Thing 1", "Thing 2"];
// const mapped = thingsArray.map(items => <p key={items}>{items}</p>)
// function add(){
//     const newThing = "Thing " + (thingsArray.length + 1)
//     thingsArray.push(newThing)
//     console.log(thingsArray)
// function greeting(name){
//     let d = new Date()
//     let timeOfDay = d.getHours()
//     let greeting = ""
//     if(timeOfDay> 4 && timeOfDay<12){
//         greeting = "morning"
//     }
//     else if(timeOfDay > 12 && timeOfDay<17){
//         greeting = "afternoon"
//     }
//     else if(timeOfDay > 17 && timeOfDay<20){
// greeting = "evening"
//     }
//     else{
//         greeting = "night"
//     }
//     return "Good " + greeting + " " + name 
// }
// const result = React.useState("Hello")
return(
<div>
{/* <button onMouseOver = {click}>Click me</button> */}
{/* <button onClick={}>Add Item</button> */}
{/* <h1>{result[0]}</h1> */}
{/* {mapped} */}
<Header />
<Meme />
</div>
)

}


ReactDOM.render(<App />, document.getElementById("root"))