let guru = document.querySelector(".guru");
let main = document.querySelector(".main");
let aboutme = document.querySelector(".aboutme");
let article = document.querySelector ("article");
let space = document.querySelector(".space");
let nav = document.querySelector("nav");

let calci = document.querySelector(".calci");


guru.addEventListener("click", function(){
  calci.style.display = "none";
    
    let profile = document.createElement("div");
    profile.classList.add("profile");
    
    let image = document.createElement("div");
    image.classList.add("image");
    let h1 = document.createElement("div");
    h1.classList.add("h1");

    let p = document.createElement("p");
    p.textContent ="I’m Guru Gachinamath, a passionate and detail-driven aspiring Frontend Developer who believes great websites aren’t just coded — they’re crafted. With a solid foundation in HTML and CSS and hands-on experience cloning and customizing popular platforms like Amazon and Flipkart, I turn pixels into polished, responsive, and user-friendly designs.";
    p.classList.add("p");
    let p2 = document.createElement("div");
    p2.textContent="For me, code is not just a skill, it’s a canvas. I enjoy experimenting with layouts, animations, and micro-interactions to create experiences that are both beautiful and intuitive. I’m currently diving deeper into [JavaScript] to bring more life and interactivity to my";
      p2.classList.add("p2");
    let p3 = document.createElement("div");
    p3.textContent="I thrive on challenges, value continuous learning, and love translating creative ideas into fully functional designs. My goal is to contribute fresh perspectives, meticulous execution, and a little bit of creative magic to every project I touch.";
      p3.classList.add("p2");
    let p4 = document.createElement("div");
    p4.textContent="If you’re looking for someone who combines technical precision with creative thinking — I’m ready to bring my skills, enthusiasm, and dedication to your team.";
      p4.classList.add("p2");
    let back = document.createElement("button");
   

    article.style.display="none";
    space.style.display="none";
    nav.style.marginBottom = "50px";

    back = document.createElement("button");
    back.innerText= "Back";
    back.classList.add("back01");
    back.addEventListener("click",function(){
        article.style.display="flex";
    space.style.display="flex";
    profile.style.display ="none";
    back.style.display = "none";
    })
    

    profile.appendChild(image);
    
    nav.appendChild(back);
   
    profile.appendChild(h1);
  
    h1.appendChild(p);
    h1.appendChild(p2);
    h1.appendChild(p3);
    h1.appendChild(p4);
    aboutme.appendChild(profile);



})
