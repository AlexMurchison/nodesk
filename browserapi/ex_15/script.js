function runMyCode() {
    important = document.getElementById ('important');
    listItems = document.querySelectorAll('li');
    unorderedList = document.querySelector ('ul');
    blueItems = document.querySelector ('.blue');
    console.log(important);
    console.log(listItems);
    console.log(unorderedList);
    console.log(blueItems);
}

window.onload = runMyCode();