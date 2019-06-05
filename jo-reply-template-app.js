
let generatedList = ''

// Declare variable
let templateType = document.querySelector('#template-type').value

generateTemplate(templateType)  

document.querySelector('#template-type').addEventListener('change', function (e) {
    templateType = document.querySelector('#template-type').value
    document.querySelector('#product-preview').value = ''
    generatedList = ''
    generateTemplate(templateType)
})

document.querySelector('#add-to-list').addEventListener('click', function (e) {
    let quantity = document.querySelector('#quantity').value
    let productName = document.querySelector('#product-name').value
    let date = document.querySelector('#date').value

    generatedList = generateItemList(quantity, productName, date)
})


document.querySelector("#generate-template").addEventListener('click', function (e) {
    document.querySelector('#output').value = ''
    generateTemplate(templateType)
})

document.querySelector('#clear').addEventListener('click', function (e) {
    document.querySelector('#output').value = ''
    document.querySelector('#product-preview').value = ''
    generatedList = ''
})

document.querySelector('#product-preview').addEventListener('input', function (e) {
    generatedList = document.querySelector('#product-preview').value
})

document.querySelector("#copy").addEventListener('click', function (e) {
    copy()
})

