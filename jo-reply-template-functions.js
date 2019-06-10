

const generateInputDOM = function () {
    let quantityEl = document.createElement('select')
    quantityEl.setAttribute('id', 'quantity')
    document.querySelector('#input-section').appendChild(quantityEl)

    let optionEl = ''

    for (index = 1; index <= 6; index++) {
        optionEl = document.createElement('option')
        optionEl.textContent = index
        document.querySelector('#quantity').appendChild(optionEl)
    }

    let productNameEl = document.createElement('input')
    productNameEl.setAttribute('id', 'product-name')
    productNameEl.setAttribute('type', 'text')
    productNameEl.setAttribute('placeholder', 'Product name')

    let dateEl = document.createElement('input')
    dateEl.setAttribute('id', 'date')
    dateEl.setAttribute('type', 'text')
    dateEl.setAttribute('placeholder', 'ETA/Expiry date')
    dateEl.setAttribute('value', 'no ETA')

    let buttonEl = document.createElement('button')
    buttonEl.setAttribute('id', 'add-to-list')
    buttonEl.textContent = 'Add to list'

    document.querySelector('#input-section').appendChild(productNameEl)
    document.querySelector('#input-section').appendChild(dateEl)
    document.querySelector('#input-section').appendChild(buttonEl)

    document.querySelector('#add-to-list').addEventListener('click', function (e) {
        let quantity = document.querySelector('#quantity').value
        let productName = document.querySelector('#product-name').value
        let date = document.querySelector('#date').value
        generatedList = generateItemList(quantity, productName, date)
    })
}

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

    document.querySelector('#input-section').innerHTML = ''

    if (templateType === 'refund') {
        document.querySelector('#output').value = templateMessage.refund()
      
        
    }   else if (templateType === 'outOfStock1') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.outOfStock1(generatedList)
    }   else if (templateType === 'outOfStock2') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.outOfStock2(generatedList)
    }   else if (templateType === 'outOfStock3') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.outOfStock3(generatedList)
    }   else if (templateType === 'outOfStockCancel') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.outOfStockCancel(generatedList)
    }   else if (templateType === 'deliveryTimeEnquiry') {
        document.querySelector('#output').value = templateMessage.deliveryTimeEnquiry()
    }   else if (templateType === 'refundedStripe') {
        document.querySelector('#output').value = templateMessage.refundedStripe()
    }  else if (templateType === 'itemShortageUponDelivery') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.itemShortageUponDelivery(generatedList)
    }   else if (templateType === 'longWaitingTimeSplit') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.longWaitingTimeSplit(generatedList,date.value)
    }   else if (templateType === 'longWaitingTimeHold') {
        document.querySelector('#output').value = templateMessage.longWaitingTimeHold(generatedList)
    }   else if (templateType === 'placeNewOrderAddOn') {
        document.querySelector('#output').value = templateMessage.placeNewOrderAddOn()
    }   else if (templateType === 'howToAddOnItem') {
        document.querySelector('#output').value = templateMessage.howToAddOnItem()
    }   else if (templateType === 'topUpShippingFee') {
        document.querySelector('#output').value = templateMessage.topUpShippingFee(generatedList)
    }   else if (templateType === 'offerDiscountDefect') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.offerDiscountDefect(generatedList)
    }   else if (templateType === 'expiryDateNotice') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.expiryDateNotice(generatedList)
    }   else if (templateType === 'outOfStockNoETA') {
        generateInputDOM()
        document.querySelector('#output').value = templateMessage.outOfStockNoETA(generatedList)
    }   else {
        console.log('error')
    }
}

// Copy button
const copyText = function () {
    let copyText = document.querySelector('#output')
    copyText.select()
    document.execCommand('copy')
    copyText.blur()
}


// <input id="product-name" type="text" placeholder="Product name" value="">
    
// <input id="date" placeholder="ETA/Expiry date" value = "no ETA">

// <button id="add-to-list">Add to list</button>

// <select id="quantity">
// <option>1</option>
// <option>2</option>
// <option>3</option>
// <option>4</option>
// <option>5</option>
// <option>6</option>
// </select>