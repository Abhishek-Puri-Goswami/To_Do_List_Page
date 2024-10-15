let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerHTML = `${inp.value} <br>`;

  if (inp.value != "") {
    // Create a new button element for deletion
    let delBtn = document.createElement("button");
    delBtn.innerText = "complete";

    // Instead of adding eventlistener to each button;
    // added eventListener to the parent ul element.
    // delBtn.addEventListener("click", function () {
    //   let parent = this.parentElement;
    //   parent.remove();
    // });

    item.appendChild(delBtn);
    ul.appendChild(item);

    // Clear input after adding task
    inp.value = "";
  }
});

// Event Delegation - addEventListener to Parent only.
ul.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});
