let userAge = 22;

let ehsan = 2;
let w = 2;

let ehsanjun = 2;


let mobileMenuBtn = document.querySelector(".mobileMenuBtn");
let sidebarMenu = document.querySelector(".sidebarMenu");
let closeSidebar = document.querySelector(".closeSidebar");
mobileMenuBtn.addEventListener("click",(e)=>{
    // open menu
    console.log("ok2");
    sidebarMenu.className = "open-sidebarmenu";
});
closeSidebar.addEventListener("click",(e)=>{
    console.log("Ok");
    console.log(sidebarMenu);
    // close menu
    sidebarMenu.classList.add("invisible");
    sidebarMenu.classList.add("opacity-0");
    sidebarMenu.classList.add("hidden");

});

// thankss