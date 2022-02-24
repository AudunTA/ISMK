const getButton = document.querySelector(".button i");

getButton.addEventListener("click", handleClick);
function handleClick(event)  {
  console.log(event);
  var inputtype = document.getElementById("card").value;
  console.log(inputtype);
}
