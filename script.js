// import LocomotiveScroll from 'locomotive-scroll';

// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function loco(){
gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
}

// loco();

gsap.set(".a",{opacity:1,y:20})
gsap.set("#image img",{opacity:0,y:10,scale:.5})
gsap.set("#image2 img",{opacity:0,y:10,scale:2})
gsap.set(".j",{opacity:0,scale:0})


gsap.to(".a",{

    scrollTrigger:{
        scroll:"body",
        trigger:".a",
        start:"top top",
        end:"bottom bottom",
        scrub:3,
        // markers:true

    },
    opacity:0,
    y:0,
    stagger:.5,
    // duration:3
    
})



gsap.to("#image img",{
 
    opacity:1,
    y:0,
    stagger:.5,
    duration:3,
    scale:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#image img",
        scrub:3

    }
})

gsap.to("#image2 img",{
 
    opacity:1,
    y:0,
    stagger:.4,
    duration:1,
    scale:1,
    scrollTrigger:{
        scroll:"body",
        trigger:"#image2 img",
        scrub:1

    }
})


gsap.to("#image1 .i",{
 
    opacity:0,
    stagger:.1,
    duration:3,
    scale:0,
    scrollTrigger:{
        scroll:"body",
        trigger:"#image1 .i",
        scrub:3

    }
})


gsap.to("#image1 .j",{
 
    opacity:1,
    stagger:.1,
    duration:1,
    scale:1.2,
    scrollTrigger:{
        scroll:"body",
        trigger:"#image1 .j",
        scrub:3

    }
})


gsap.to("#image3 .i",{
 
    // x:-200,
    opacity:.8,
    stagger:.1,
    duration:2,
    scale:.5,
    scrollTrigger:{
        scroll:"body",
        trigger:"#image3 .i",
        scrub:3

    }
})


gsap.to("#image3 .j",{
 
    opacity:1,
    stagger:.1,
    duration:1,
    scale:1.2,
    scrollTrigger:{
        scroll:"body",
        trigger:"#image3 .j",
        scrub:3

    }
})

