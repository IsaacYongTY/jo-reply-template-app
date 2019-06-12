const isInputDOMRequired = function () {

    if  (templateType === 'outOfStock1') {
        generateInputDOM()
    }   else if (templateType === 'outOfStock2') {
        generateInputDOM()
    }   else if (templateType === 'outOfStock3') {
        generateInputDOM()
    }   else if (templateType === 'outOfStockCancel') {
        generateInputDOM()
    }   else if (templateType === 'itemShortageUponDelivery') {
        generateInputDOM()
    }   else if (templateType === 'longWaitingTimeSplit') {
        generateInputDOM()
    }   else if (templateType === 'longWaitingTimeHold') {
        generateInputDOM()
    }   else if (templateType === 'offerDiscountDefect') {
        generateInputDOM()
    }   else if (templateType === 'expiryDateNotice') {
        generateInputDOM()
    }   else if (templateType === 'outOfStockNoETA') {
        generateInputDOM()
    }   else {
        console.log('error')
    }
}

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

    let pressEnterEl = document.createElement('span')
    pressEnterEl.textContent = '<- or Press Enter'

    document.querySelector('#input-section').appendChild(productNameEl)
    document.querySelector('#input-section').appendChild(dateEl)
    document.querySelector('#input-section').appendChild(buttonEl)
    document.querySelector('#input-section').appendChild(pressEnterEl)

    console.log(document.querySelector('#input-section'))
    

    document.querySelector('#add-to-list').addEventListener('click', function (e) {
        let quantity = document.querySelector('#quantity').value
        let productName = document.querySelector('#product-name').value
        let date = document.querySelector('#date').value
        generatedList = generateItemList(quantity, productName, date)
    })

    document.addEventListener('keydown', function (e) {
        if (e.code === 'Enter') {
            document.querySelector('#add-to-list').focus()
        }
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

    if (templateType === 'outOfStock1') {
        document.querySelector('#output').value = templateMessage.outOfStock1(generatedList)
    }   else if (templateType === 'outOfStock2') {
        document.querySelector('#output').value = templateMessage.outOfStock2(generatedList)
    }   else if (templateType === 'outOfStock3') {
        document.querySelector('#output').value = templateMessage.outOfStock3(generatedList)
    }   else if (templateType === 'outOfStockCancel') {
        document.querySelector('#output').value = templateMessage.outOfStockCancel(generatedList)
    }   else if (templateType === 'deliveryTimeEnquiry') {
        document.querySelector('#output').value = templateMessage.deliveryTimeEnquiry()
    }   else if (templateType === 'refundedStripe') {
        document.querySelector('#output').value = templateMessage.refundedStripe()
    }   else if (templateType === 'itemShortageUponDelivery') {
        document.querySelector('#output').value = templateMessage.itemShortageUponDelivery(generatedList)
    }   else if (templateType === 'longWaitingTimeSplit') {
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
        document.querySelector('#output').value = templateMessage.offerDiscountDefect(generatedList)
    }   else if (templateType === 'expiryDateNotice') {
        document.querySelector('#output').value = templateMessage.expiryDateNotice(generatedList)
    }   else if (templateType === 'outOfStockNoETA') {
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