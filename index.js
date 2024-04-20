document.getElementById("check")
    .addEventListener("change", function() {
        var input = document.getElementById("pass");
        if (this.checked) {
            input.type = "text"

        } else {
            input.type = "password"
        }
    });

var log = document.querySelector(".login")
var pop = document.querySelector(".popup")
var btn = document.getElementById("button")

btn.addEventListener("click", function() {
    log.style.display = "block"
    pop.style.display = "block"
});



function search() {
    var input, filter, boxes, text, i, noResultsMsg;
    input = document.getElementById('search');
    filter = input.value.toUpperCase();
    item_list = document.getElementsByClassName('item_list');
    noResultsMsg = document.getElementById('noResultsMsg');

    var found = false;

    for (i = 0; i < item_list.length; i++) {
        text = item_list[i].getElementsByTagName('h3')[0];
        if (text) {
            if (text.innerHTML.toUpperCase().indexOf(filter) > -1) {
                item_list[i].style.display = '';
                found = true;
            } else {
                item_list[i].style.display = 'none';
            }
        }
    }

    // Show or hide the "No results" message
    if (found) {
        noResultsMsg.style.display = 'none';
    } else {
        noResultsMsg.style.display = 'block';
    }
}