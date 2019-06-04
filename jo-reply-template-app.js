
let generatedList = ''

// Declare variable
let templateType = document.querySelector('#template-type').value
let optionAB = document.querySelector('#optionAB').value

const templateMessage = {
    refund: function () {
        return `The refund has been carried out! :)\n\n\
It's via Stripe back into\nyour card, and should show up on your credit\nstatement immediately or within 1-3 working days.\n\n\
We'll be in touch again once your order is good to go.\nThank you and have a good day!`
    },
    outOfStock1: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\Your order is processed,\n\
I would like to highlight the following item(s) are newly *out of stock*:\n\
${generatedList}\n\
Would you like to opt for a refund for the out of stock item(s) so that it doesn’t hold up the fulfilment of your order? \n\n\
If you would prefer to switch the order to something else, I can run a check with the supplier.\n\n\
(However, if option for change order, do note that we’ll most likely have to have the alternative item ordered in which may take 1-3 working days to arrive! :))\n\n\
Please let me know!`
    },
    outOfStock2: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\
Your order is processed,\n
I would like to highlight the following item(s) are newly *out of stock*:\n\
${generatedList}\n\
Are there other things you would like to swop to or would you prefer a refund for the unavailable items?\n
Please let me know!`
    },
    expiryDateNotice: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\
Your order is processed,\n\
I would like to highlight the *expiry date* of the following item(s):\n\
${generatedList}\n\      
Would you mind to continue to keep the order?\n\
Or if you would like to cancel or switch to something else?\n\
Please let me know!`
    },
    longWaitingTime: function (generatedList) {

        let optionContent = ''
        console.log(optionAB)
        if (optionAB === 'A') {
            optionContent = `If it is ok, we would like to dispatch the available items first, \
and the unavailable item we will arrange second round delivery for you once we secure the stocks. \
I’m truly sorry for the inconvenience caused. Thanks`
        }   else if (optionAB === 'B') {
            optionContent = `If you would like to hold up the order to wair for the restock. \
We will keep an eye on your order and arrange the earliest possible delivery slot for you once we secure the stock. \
I’m truly sorry for the inconvenience caused. Thanks~`
        }
    
        return `Hi! This is Jo from Nekojam. Thanks for shopping with us!\n\
Just to let you know your order has been processed and awaiting fulfilment.\
I understand you ordered the\n${generatedList}\n\
but unfortunately it will take us around 1 week or more to have the backorder \
stock comes in as we need to order it in from our supplier.\n\n\
${optionContent}
        `
    }
}



    const generateItemList = function(quantity, productName, date) {
        if (templateType === 'expiryDateNotice') {
            document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `- ${quantity}x *${productName}*: exp in (${date})\n`
        }   else if (templateType === 'outOfStock1' || templateType === 'outOfStock2' || templateType === 'refund' || templateType === 'longWaitingTime') {
            document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `- ${quantity}x *${productName}* (${date})\n`
        }

        generatedList = document.querySelector('#product-preview').value
  
    }






const generateTemplate = function (templateType) {

    if (templateType === 'refund') {
        document.querySelector('#output').value = templateMessage.refund()
    }   else if (templateType === 'outOfStock1') {
        document.querySelector('#output').value = templateMessage.outOfStock1(generatedList)
    }   else if (templateType === 'outOfStock2') {
        document.querySelector('#output').value = templateMessage.outOfStock2(generatedList)
    }   else if (templateType === 'longWaitingTime') {
        document.querySelector('#output').value = templateMessage.longWaitingTime(generatedList)
    }   else if (templateType === 'expiryDateNotice') {
        document.querySelector('#output').value = templateMessage.expiryDateNotice(generatedList)
    }   else {
        console.log('error')
    }
}

document.querySelector('#template-type').addEventListener('change', function (e) {
    templateType = document.querySelector('#template-type').value
})

document.querySelector('#optionAB').addEventListener('change', function (e) {
    optionAB = document.querySelector('#optionAB').value
})

document.querySelector('#add-to-list').addEventListener('click', function (e) {
    let quantity = document.querySelector('#quantity').value
    let productName = document.querySelector('#product-name').value
    let date = document.querySelector('#date').value
    
    generateItemList(quantity, productName, date)
    console.log(generatedList)
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
// // Message template


