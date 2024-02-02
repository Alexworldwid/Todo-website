const container = document.querySelector(".container");
const label = document.querySelector("label");
const input = document.querySelector("#things");
const button = document.querySelector("#btn");
const list = document.querySelector("ol");

button.addEventListener("click", () => {
    if(input.value.trim() !== "") {
      let inputValue = input.value;
      input.value = "";

      const listItem = document.createElement("li");
      const listText = document.createElement("span");
      const btn1 = document.createElement("button");

      listText.style.fontSize = "16px";
      listText.style.marginRight = "6px";
       
      listText.textContent = inputValue;
      listItem.appendChild(listText);
      btn1.textContent = "Done";
      listItem.appendChild(btn1);
      list.appendChild(listItem);

      btn1.addEventListener("click", () => {
         list.removeChild(listItem);
      });
    }
    input.focus();
});