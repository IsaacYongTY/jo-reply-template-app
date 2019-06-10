
let generatedList = ''

// Declare variable
let templateType = document.querySelector('#template-type').value

generateTemplate(templateType)  

document.querySelector('#template-type').addEventListener('change', function (e) {
    templateType = document.querySelector('#template-type').value
    document.querySelector('#product-preview').value = ''
    generatedList = '*(generated list here)*\n'
    generateTemplate(templateType)
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

document.querySelector('#clear-product').addEventListener('click', function (e) {
    document.querySelector('#product-name').value = ''
    document.querySelector('#quantity').value = '1'
})

document.querySelector('#product-preview').addEventListener('input', function (e) {
    generatedList = document.querySelector('#product-preview').value
})

document.querySelector("#copy").addEventListener('click', function (e) {
    copyText()
})

