const sections = document.getElementById("sections")
const edu = document.getElementById("sections-edu")
const exp = document.getElementById("sections-exp")
const skills = document.getElementById("sections-skills")
const cont = document.getElementById("sections-cont")

sections.addEventListener('click',function(){
    sections.innerHTML = `<p id='big'>INTRO</p><p id='info'>
    Knowledgeable Programmer skilled in data collection,
     analysis and management, front end and back end web 
     development. I work well under pressure and make it a
     priority to deliver top notch work.</id>`
})
sections.addEventListener('mouseleave',function(){
    sections.innerHTML = `<p id='big-i'><button id='btn'>INTRODUCTION</button></p>`
})

edu.addEventListener('click',function(){
    edu.innerHTML = `<p id="big">EDU</p><p id='info'>
    <b>Bachelor of Engineering: Mechanical Engineering</b>
    <br>
    Landmark University
    <br>
    Ilorin, Kwara Nigeria
    <br>
    <br>
    <b>Scientific Programming with python.</b>
    <br>
    freecodecamp.
    <br>
    <a href="https://freecodecamp.org/certification/ApehVictor/scientific-computing-with-python-v7">https://freecodecamp.org/certification/ApehVictor/scientific-computing-with-python-v7</a>
    <br>
    <br>
    <b>Data Analyst certification.</b>
    <br>
    Udacity
    <br>
    <a href="https://confirm.udacity.com/5Y7KNK7J">https://confirm.udacity.com/5Y7KNK7J</a>
    </id>`
})
edu.addEventListener('mouseleave',function(){
    edu.innerHTML = `<p id='big-i'><button id='btn'>EDUCATION</button></p>`
})

exp.addEventListener('click',function(){
    exp.innerHTML = `<p id='big'>EXP</p><div id="helper"><p id='info'>
    2021 - now
    <br>
    Nigerian Meteorological Agency (Compulsory Service)
    </p>
    <br>
    <div id="percent">
    <div id="mech">Engineering</div>
    <div id="admin">Admin</div>
    <div id="programming">Programming</div>
    </div>
    
    <p id='info'>
    feb 2020 - oct 2021
    <br>
    Mobile House Limited 
    </p>
    <br>
    <div id="percent">
    <div id="mech-mob">Engineering</div>
    <div id="admin-mob">Admin</div>
    </div>

    <p id='info'>
    2018 - 
    <br>
    Freelance 
    </p>
    <br>
    <div id="percent">
    <div id="programming-free">Programming</div>
    <div id="graphics-free">Graphics</div>
    </div>
    </helper>
    
    `
})
exp.addEventListener('mouseleave',function(){
    exp.innerHTML = `<p id='big-i'><button id='btn'>EXPERIENCE</button></p>`
})


skills.addEventListener('click',function(){
    skills.innerHTML = `<p id='big'>SKILLS</p><div id="helper"><p id='info'>
    <br>
    Autocad
    </p>
    <br>
    <div id="percent-skills">
    <div id="skill-per-auto"></div>
    </div>
    
    <p id='info'>
    <br>
    Python
    </p>
    <br>
    <div id="percent-skills">
    <div id="skill-per-py"></div>
    </div>

    <p id='info'>
    <br>
    SQL
    </p>
    <br>
    <div id="percent-skills">
    <div id="skill-per-sql"></div>
    </div>

    <p id='info'>
    <br>
    Machine Learning
    </p>
    <br>
    <div id="percent-skills">
    <div id="skill-per-ml"></div>
    </div>

    <p id='info'>
    <br>
    Front End
    </p>
    <br>
    <div id="percent-skills">
    <div id="skill-per-front"></div>
    </div>

    <p id='info'>
    <br>
    Back End
    </p>
    <br>
    <div id="percent-skills">
    <div id="skill-per-back"></div>
    </div>

    <p id='info'>
    <br>
    Photoshop
    </p>
    <br>
    <div id="percent-skills">
    <div id="skill-per-photo"></div>
    </div>
    
    `
})
skills.addEventListener('mouseleave',function(){
    skills.innerHTML = `<p id='big-i'><button id='btn'>SKILLS</button></p>`
})



cont.addEventListener('click',function(){
    cont.innerHTML = `<p id="big">CONT</p><p id='info'>
    <b>Linkedin</b>
    <br>
    <a href="https://www.linkedin.com/in/victorapeh">https://www.linkedin.com/in/victorapeh</a>
    <br>
    <br>
    <b>Email</b>
    <br>
    <a href="https://gmail.com">victorapeh9@gmail.com</a>
    <br>
    <br>
    <b>Github</b>
    <br>
    <a href="https://github.com/jerimiel">https://github.com/jerimiel</a>
    </id>`
})
cont.addEventListener('mouseleave',function(){
    cont.innerHTML = `<p id='big-i'><button id='btn'>CONTACT</button></p>`
})
