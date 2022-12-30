const btn = document.getElementById("top-btn")
const bar = document.getElementById("bar")
let clicked = false

btn.addEventListener("click",function(){
    if(clicked===false){
    bar.innerHTML = `
    <a href="index.html"><button>
                Home
            </button></a>
            <br>
            <a href="aboutme.html"><button>
                AboutMe
            </button></a>
            <br>
            <a href="resume.html"><button>
                Resume
            </button></a>
            <br>
            <a href="projects.html"><button>
                Projects
            </button></a>
   `
   clicked = true
    }
    else{bar.innerHTML = ``
    clicked = false}

})
