const btn = document.getElementById("top-btn")
const bar = document.getElementById("bar")
let clicked = false

btn.addEventListener("click",function(){
    if(clicked===false){
    bar.innerHTML = `
    <button>
                <a href="">Home</a>
            </button>
            <br>
            <button>
                <a href="aboutme.html">AboutMe</a>
            </button>
            <br>
            <button>
                <a href="resume.html">Resume</a>
            </button>
            <br>
            <button>
                <a href="projects.html">Projects</a>
            </button>
   `
   clicked = true
    }
    else{bar.innerHTML = ``
    clicked = false}

})
