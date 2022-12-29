var expanded = false;
function showCheckboxes() {
    var checkboxes2 = document.getElementById("checkboxes2");
    if(!expanded) {
        checkboxes2.style.display = "block";
        expanded = true;
    } else {
        checkboxes2.style.display = "none"
        expanded = false;
    }
}