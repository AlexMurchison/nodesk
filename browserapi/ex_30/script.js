function removeAll(elementName) {
    listItems = document.querySelector(elementName);
    while (listItems.lastChild) {
        console.log(listItems.lastChild);
        listItems.removeChild(listItems.lastChild)
    }
}

removeAll('ul');

