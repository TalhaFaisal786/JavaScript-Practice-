const btn=document.querySelector(".btn");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    document.querySelector("body").style.background="white";
    console.log(e.target)
});