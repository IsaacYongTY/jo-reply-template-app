// Generate Item List
const generateItemList = function(quantity, productName, date) {
    if (templateType === 'expiryDateNotice') {
        document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `- ${quantity}x *${productName}*: exp (${date})\n`
    }   else if (templateType === 'longWaitingTimeSplit') {
        if (quantity > 1) {
            document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `${quantity}x *${productName}*`
        }   else {
            document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `the *${productName}*`
        }
    }   else if (templateType === 'offerDiscountDefect') {
        if (quantity > 1) {
            document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `${quantity}x *${productName}*`
        }   else {
            document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `the *${productName}*`
        }   
    }
        else {
        document.querySelector('#product-preview').value = document.querySelector('#product-preview').value + `- ${quantity}x *${productName}* (${date})\n`
    }
    return document.querySelector('#product-preview').value

}

// Generate template needed with item list according to user's need eg. refund, out of stock..
const generateTemplate = function (templateType) {

    if (templateType === 'refund') {
        document.querySelector('#output').value = templateMessage.refund()
    }   else if (templateType === 'outOfStock1') {
        document.querySelector('#output').value = templateMessage.outOfStock1(generatedList)
    }   else if (templateType === 'outOfStock2') {
        document.querySelector('#output').value = templateMessage.outOfStock2(generatedList)
    }   else if (templateType === 'outOfStock3') {
        document.querySelector('#output').value = templateMessage.outOfStock3(generatedList)
    }   else if (templateType === 'outOfStockCancel') {
        document.querySelector('#output').value = templateMessage.outOfStockCancel(generatedList)
    }   else if (templateType === 'deliveryTimeEnquiry') {
        document.querySelector('#output').value = templateMessage.deliveryTimeEnquiry(generatedList)
    }   else if (templateType === 'refundedStripe') {
        document.querySelector('#output').value = templateMessage.refundedStripe(generatedList)
    }  else if (templateType === 'itemShortageUponDelivery') {
        document.querySelector('#output').value = templateMessage.itemShortageUponDelivery(generatedList)
    }   else if (templateType === 'longWaitingTimeSplit') {
        document.querySelector('#output').value = templateMessage.longWaitingTimeSplit(generatedList,date.value)
    }  else if (templateType === 'longWaitingTimeHold') {
        document.querySelector('#output').value = templateMessage.longWaitingTimeHold(generatedList)
    }  else if (templateType === 'placeNewOrderAddOn') {
        document.querySelector('#output').value = templateMessage.placeNewOrderAddOn(generatedList)
    }  else if (templateType === 'howToAddOnItem') {
        document.querySelector('#output').value = templateMessage.howToAddOnItem(generatedList)
    }  else if (templateType === 'topUpShippingFee') {
        document.querySelector('#output').value = templateMessage.topUpShippingFee(generatedList)
    } else if (templateType === 'offerDiscountDefect') {
        document.querySelector('#output').value = templateMessage.offerDiscountDefect(generatedList)
    } else if (templateType === 'expiryDateNotice') {
        document.querySelector('#output').value = templateMessage.expiryDateNotice(generatedList)
    } else {
        console.log('error')
    }
}

// Copy button
const copy = function () {
    let copyText = document.querySelector('#output')
    copyText.select()
    document.execCommand('copy')
}