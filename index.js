let 
   headline  =  document.querySelector(".headline h1"),
   img1 = document.querySelector(".banner img:nth-child(3)"),
   img2 = document.querySelector(".banner img:nth-child(2)"),
   torch = document.querySelector(".torch");

window.onscroll = function(){
    let scrollPos = (window.scrollY / window.innerHeight) * 100;
    img1.style.top=-40+scrollPos+"%";
    img2.style.height=140+scrollPos+"%";
    headline.style.marginLeft=scrollPos+"%";
}
window.onmousemove = function(e){
    let x = e.x / window.innerWidth * 100;
    let y = e.y / window.innerHeight * 100;
    torch.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent,rgba(0, 0, 0, 0.822) 100px,  black,black)`;
}
window.ontouchmove = function(e){
    let x = e.x / window.innerWidth * 100;
    let y = e.y / window.innerHeight * 100;
    torch.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent,rgba(0, 0, 0, 0.822) 100px,  black,black)`;
}
window.onclick = function(e){
    let x = e.x / window.innerWidth * 100;
    let y = e.y / window.innerHeight * 100;
    torch.style.background = `radial-gradient(circle at ${x}% ${y}%, transparent,transparent,  rgba(0,0,0, .8),black)`;
}