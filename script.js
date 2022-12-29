let selected = document.querySelectorAll(".selected")

for(let i = 0; i < selected.length; i++) {
  selected[i].onclick = event => {
    event.currentTarget.nextElementSibling.classList.toggle("active")
    event.currentTarget.classList.toggle("active")
  }
}