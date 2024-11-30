// gsap.to("#page1 #text", {
//     transform: "translateX(-95%)",
//     scrollTrigger: {
//         trigger: "#page1",
//         scroller: "body",
//         markers: true,
//         start: "top 0%",
//         end: "top -100%",
//         scrub: 2,
//         pin:true,
//     }
// })

// let normalPath = `M 10 100 Q 250 100 990 100`;
// let realPath = `M 10 100 Q 250 100 990 100`;

// let line = document.getElementById("line");
// line.addEventListener("mousemove", function (dets) {
//     normalPath = `M 10 100 Q ${dets.x} ${dets.y} 990 100`;
//     gsap.to("svg path", {
//         attr: { d: normalPath },
//         duration: 0.4,
//         ease:"power3.out"
//     })
// })
 
// line.addEventListener("mouseleave", function () {
//     gsap.to("svg path", {
//         attr: { d: realPath },
//         duration: 0.3,
//         ease:"elastic.out(1,0,2)"
//     })
// })

 const mainDiv = document.getElementById("main");
 const cursor = document.getElementById("cursor");
const img = document.getElementById("img");

mainDiv.addEventListener("mousemove", function (dets) {
    gsap.to(cursor, {
        x: dets.clientX,
        y: dets.clientY,
    })
})

img.addEventListener("mouseenter", function (dets) {
    cursor.innerHTML = "View More";
    gsap.to(cursor, {
        scale:5,
    })
})

img.addEventListener("mouseleave", function (dets) {
    cursor.innerHTML=""
  gsap.to(cursor, {
    scale: 1,
  });
});