const btn = document.querySelector(".submit-btn");
const first = document.querySelector(".first-show");
const title = document.querySelector(".title");

btn.onclick = ()=> {
  document.querySelector(".STARDUST2").textContent = document.getElementById("name-img").value;
  document.querySelector(".img").src = document.getElementById("url-img").value;
  first.style.display = "none";
  title.style.display = "block";
}