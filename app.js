function locomotive(){
      
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true
  });
  
  locoScroll.on("scroll", ScrollTrigger.update);
  
  
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
  
    pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
  });
  
  
  
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  ScrollTrigger.refresh();
  
  }
  locomotive();
  
  var tl = gsap.timeline({
     
     
  })
   

function scrollTiggering(){
   
let tl = gsap.timeline({
    
  scrollTrigger:{
  trigger: ".info_page h1",
  scroller: ".main",
  scrub:2,
  start:"top 20%",
  end:"top 0%",   
 }
});

tl.to(".info_page h1",{
  
  x:-100,
  duration:4,


},"head_text");

tl.to(".info_page h2",{
  
x:100,
duration:4,

},"head_text");

let tl2 = gsap.timeline({
  
scrollTrigger:{
trigger: "#info-vid",
scroller: ".main",
scrub:2,
start:"top 50%",
end:"top 10%",
 
 
}
});

tl2.to("#info-vid",{
 
 width: "100%",
})

let tl3 = gsap.timeline({
  
scrollTrigger:{
trigger: ".info_page2",
scroller: ".main",
scrub:2,
start:"top 55%",
end:"top 45%",
}
});

tl3.to(".info_page2",{
 backgroundColor : "#fff",
 color: "#111",

},"background")

tl3.to(".info_page",{
 
backgroundColor : "#fff",
},"background")


tl3.to(".info_page2 a",{
 
color : "#111",
  },"background")

  

  let tl4 = gsap.timeline({
  
    scrollTrigger:{
    trigger: ".img3",
    scroller: ".main",
    scrub:2,
    start:"top 15%",
    end:"top -10%",
    }
    });

 tl4.to(".vid2",{
    
    top:"200vh",

 })

 tl2.to("#info-vid",{
 
  width: "100%",
 })
 
 let tl5 = gsap.timeline({
   
 scrollTrigger:{
 trigger: ".info_page4",
 scroller: ".main",
 scrub:2,
 start:"top 35%",
 end:"top 35%",
 }
 });
  
 tl5.to(".info_page4",{
   
    backgroundColor:"#111",
    color : "#fff",

 },"page2_page3")

 tl5.to(".info_page3",{
   
  backgroundColor:"#111",
  color : "#fff",

},"page2_page3")

tl5.to(".info_page3 h4",{
 
color : "#fff",

},"page2_page3")

tl5.to(".info_page3 p",{
 
  color : "#fff",
  
  },"page2_page3")

}

 function mouseCircle(xscale , yscale){

  let timeout;

 window.addEventListener("mousemove",(evet)=>{ 
  clearTimeout(timeout);

      document.querySelector(".circle").style.transform = `translate(${evet.clientX}px,${evet.clientY}px) scale(${yscale},${xscale})`
      timeout  =  setTimeout(()=>{
          document.querySelector(".circle").style.transform = `translate(${evet.clientX}px,${evet.clientY}px)   scale(1)`
       },100);

      });

}

 function mouseCircle_adjust(){

      let xprev = 0;
      let yprev = 0;
      let xcurrt =0;
      let ycurrt = 0;

    window.addEventListener("mousemove",(evet)=>{
        
    
           xcurrt = evet.clientX - xprev;
           ycurrt = evet.clientY - yprev;
    
           xprev = evet.clientX;
           yprev = evet.clientY;
    
           let xscale = gsap.utils.clamp(0.8,1.2,xcurrt);
           let yscale = gsap.utils.clamp(0.8,1.2,ycurrt);

            mouseCircle(xscale , yscale);

    
    });

}

function hover_pic(){
   
  let rows = document.querySelectorAll(".row");
 
  rows.forEach((row) => {
     row.addEventListener("mouseenter",()=>{

        let imgs = row.querySelector("img");
        let button = row.querySelector(".button");
    
        gsap.to((imgs),{
           
           opacity:1,
          
        })

        gsap.to((button),{
           
          opacity:1,

        })

    });



    row.addEventListener("mouseleave",()=>{
       
      let imgs = row.querySelector("img");
      let button = row.querySelector(".button");


      gsap.to((imgs),{

         opacity:0,
         duration:1,
      })

      gsap.to((button),{
         
        opacity:0,
        duration:1,
      })
    })
  });
   
}

function rubber_feat(){
   
  let rubber = document.querySelector(".page4_cir");
  let size = document.querySelector(".page4_size");
 
  let size_top = rubber.getBoundingClientRect().top;
  let size_side = rubber.getBoundingClientRect().left;
  let timer =0;

      rubber.addEventListener("mousemove",(evet)=>{
    clearTimeout(timer);

     let xclint = evet.clientX;
     let yclint = evet.clientY;
        console.log(size_side,size_top , " box");
       console.log(xclint-size_side-55,yclint-size_top-50);

     let minx = gsap.utils.clamp(-45,45,xclint-size_side-55);
     let maxy = gsap.utils.clamp(-45,45,yclint-size_top-50);

     rubber.style.transform = `translate3d(${minx}px,${maxy}px,0px)`

     timer = setTimeout(()=>{

      rubber.style.transform = `translate(${minx}px,${maxy}px)`
    
     },100);

  }) 
  
   rubber.addEventListener("mouseleave",()=>{
     
     rubber.style.transform = `translate(0px,0px)`
    
  })
  
}

function move_pics(){
   
  let pics = document.querySelectorAll(".pics");
  let pointer = document.querySelector(".circle");

  pics.forEach((pic)=>{

    pic.addEventListener("mousemove",(evet)=>{

      let xclint = evet.clientX;
      let yclint = evet.clientY;
      let Move_top =yclint - pic.getBoundingClientRect().top-40;
      let Move_left =xclint - 150;

      pointer.classList.add("circle_none");
      let opt = pic.querySelector(".box");
      opt.style.opacity = 1;
    
      gsap.to(pic.querySelector("img"),{

          opacity:1,
          top:Move_top,
          left: Move_left,
          ease:Power3,
      })
         })

      pic.addEventListener("mouseleave",()=>{
         
        pointer.classList.remove("circle_none");
        let opt = pic.querySelector(".box");
        opt.style.opacity = .2;

        gsap.to(pic.querySelector("img"),{

          opacity:0,
        })
         
      })
  })

   
}


locomotive();
scrollTiggering();
mouseCircle_adjust();
hover_pic();
rubber_feat();
move_pics();