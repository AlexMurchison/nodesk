function removeAll(elementName) {
    unorderedList = document.querySelectorAll(elementName);
    unorderedList.forEach(element => {
        element.innerHTML = ''
    });
}

removeAll('ul');

