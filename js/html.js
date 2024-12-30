function hasClass(element, className) {
    return (' ' + element.className + ' ').indexOf(' ' + className + ' ') > -1
}
function createElementWithClass(tag, classNameArr) {
    var element = document.createElement(tag)
    classNameArr.forEach(className => {
        element.classList.add(className)
    })
    return element
}
function appendElements(parent, childrenArr) {
    childrenArr.forEach(child => {
        parent.append(child)
    })
    return parent
}