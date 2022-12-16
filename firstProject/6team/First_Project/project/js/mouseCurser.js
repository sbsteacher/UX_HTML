let mouseCursor = document.getElementById("cursor");
console.log(mouseCursor)

document.addEventListener("mousemove", cursor);
function cursor(e) {
  mouseCursor.style.top = e.pageY + document.body.scrollTop + 15 + "px";
  mouseCursor.style.left = e.pageX + document.body.scrollLeft+ 15 + "px";
}
