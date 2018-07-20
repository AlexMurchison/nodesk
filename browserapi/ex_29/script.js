function removeAll(elementName) {
    listItems = document.querySelector(elementName);
    let counter = 0
    while (listItems.lastChild) {
        listItems.removeChild(listItems.lastChild)
    }
}

window.onload = removeAll('ul');

