const filterInput = document.getElementById("search");

filterInput.addEventListener("keyup", () => {
  //Get value of input
  let filterValue = filterInput.value;

  //Get array of li elements
  let li = Array.from(document.querySelector(".search-list").children);

  for (let i = 0; i < li.length; i++) {
    if (li[i].textContent.toLowerCase().includes(filterValue)) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
});
