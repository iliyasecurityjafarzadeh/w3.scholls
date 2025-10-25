
let show1hover = document.querySelectorAll(".show-1-hover");
let show1 = document.querySelectorAll(".show-1");
let close1menu = document.getElementById("close1-menu");
let close1btn = document.getElementById("close-1-btn");

let show2hover = document.querySelectorAll(".show-2-hover");
let show2 = document.querySelectorAll(".show-2");
let close2menu = document.getElementById("close2-menu");
let close2btn = document.getElementById("close-2-btn");


let show3hover = document.querySelectorAll(".show-3-hover");
let show3 = document.querySelectorAll(".show-3");
let close3menu = document.getElementById("close3-menu");
let close3btn = document.getElementById("close-3-btn");

let show4hover = document.querySelectorAll(".show-4-hover");
let show4 = document.querySelectorAll(".show-4");
let close4menu = document.getElementById("close4-menu");
let close4btn = document.getElementById("close-4-btn");

let show5hover = document.querySelectorAll(".show-5-hover");
let show5 = document.querySelectorAll(".show-5");
let close5menu = document.getElementById("close5-menu");
let close5btn = document.getElementById("close-5-btn");




show1hover.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        show1[index].classList.toggle("d-block");
    });
});

show2hover.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        show2[index].classList.toggle("d-block");
    });
});

show3hover.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        show3[index].classList.toggle("d-block");
    });
});

show4hover.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        show4[index].classList.toggle("d-block");
    });
});

show5hover.forEach((element, index) => {
    element.addEventListener("click", (e) => {
        e.preventDefault();
        show5[index].classList.toggle("d-block");
    });
});

close1btn.addEventListener("click", () => {
    close1menu.classList.toggle("d-none");
})

close2btn.addEventListener("click", () => {
    close2menu.classList.toggle("d-none");
})

close3btn.addEventListener("click", () => {
    close3menu.classList.toggle("d-none");
})

close4btn.addEventListener("click", () => {
    close4menu.classList.toggle("d-none");
})

close5btn.addEventListener("click", () => {
    close5menu.classList.toggle("d-none");
})


