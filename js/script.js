const ulListDOM = document.querySelector("ul");
let liListDOM = document.querySelectorAll("li");

liListDOM.forEach((item) => {
  addCloseButton(item);
});

function addCloseButton(item) {
  item.onclick = () => {
    item.classList.toggle("checked");
  };

  const span = document.createElement("span");
  span.textContent = "\u00D7";
  span.className = "close";
  item.appendChild(span);
  span.onclick = () => {
    item.style.display = "none";
  };
}

function newElement() {
  const inputValue = document.querySelector("#task").value;

  if (!inputValue || inputValue.replace(/^\s+|\s+$/g, "").length === 0) {
    $(".error").toast("show");
  } else {
    $(".succes").toast("show");
    const li = document.createElement("li");
    li.textContent = inputValue;
    ulListDOM.appendChild(li);
    addCloseButton(li);
  }
  document.querySelector("#task").value = "";
}
