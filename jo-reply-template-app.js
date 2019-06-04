
let generatedList = ''

 templateMessage = {
    refund: function (generatedList) {
        return `${generatedList}`
    },
    itemShortage: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\Your order is processed,\n\
I would like to highlight the following item(s) are newly *out of stock*:\n\
${generatedList}\n\n\
Would you like to opt for a refund for the out of stock item(s) so that it doesn’t hold up the fulfilment of your order? \n\n\
If you would prefer to switch the order to something else, I can run a check with the supplier.\n\n\
(However, if option for change order, do note that we’ll most likely have to have the alternative item ordered in which may take 1-3 working days to arrive! :))\n\n\
Please let me know!`
    }

}

// const generateItemList = function(quantity, productName, eta) {
    
//     generatedList = generatedList + `- ${quantity}x *${productName}* (${eta})\n`
//     console.log(5)
//     return generatedList
// }

    const generateItemList = function(quantity, productName, eta) {
        document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `- ${quantity}x *${productName}* (${eta})\n`
        generatedList = document.querySelector('#product-preview').value
  
    }



// Declare variable
let templateType = document.querySelector('#template-type').value


const generateTemplate = function (templateType) {

    if (templateType === 'refund') {
        document.querySelector('#output').innerHTML = templateMessage.refund(generatedList)
    }   else if (templateType === 'itemShortage') {
        document.querySelector('#output').innerHTML = templateMessage.itemShortage(generatedList)
    }   else if (templateType === 'longWaitingTime') {
        
    }   else {
        console.log('error')
    }
}

document.querySelector('#template-type').addEventListener('change', function (e) {
    templateType = document.querySelector('#template-type').value
})

document.querySelector('#add-to-list').addEventListener('click', function (e) {
    let quantity = document.querySelector('#quantity').value
    let productName = document.querySelector('#product-name').value
    let eta = document.querySelector('#eta').value
    
    generateItemList(quantity, productName, eta)
    console.log(generatedList)
})


document.querySelector("#generate-template").addEventListener('click', function (e) {
    generateTemplate(templateType)
})

document.querySelector('#clear').addEventListener('click', function (e) {
    document.querySelector('#output').innerHTML = ''
})

document.querySelector('#product-preview').addEventListener('input', function (e) {
    generatedList = document.querySelector('#product-preview').value
    console.log(document.querySelector('#product-preview').value)
})
// // Message template
