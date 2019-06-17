const templateMessage = {
    outOfStock1: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\
Your order is processed,\n\
I would like to highlight the newly *out of stock* item(s) in your order:\n\n\
${generatedList}\n\
Would you like to opt for a refund for the out of stock item(s) so that it doesn't hold up the fulfilment of your order?\n\n\
If you would prefer to switch the order to something else, I can run a check with the supplier.\n\
(Note: change items may take 1-3 working days to fulfill! :))\n\n\
Please let me know!`
    },
    outOfStock2: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\
Your order is processed,\n
Unfortunately we just have been informed by our supplier that the item(s) below is/are newly *out of stock* at the moment:\n\n\
${generatedList}\n\
Are there other things you would like to swap to or would you prefer a refund for the unavailable items?\n
Please let me know!`
    },
    outOfStock3: function (generatedList) {
        return `Hey, Jo here. I regret to inform you that the\n\n\
${generatedList}\n\
is/are unavailable at this point in time. \
Are there other things you would like to swap to or would you prefer a refund for the unavailable items?`
    },
    outOfStockCancel: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\
Your order has been processed and our supplier just notified the following item(s) are newly *out of stock* and are not available island wide:\n\n\
${generatedList}\n\
We also requested for the restock date, but yet to get an reply as the manufacturers themselves seems haven’t schedule it. \
Would you like to do a cancellation and refund for the entire orders?\n\n\
Please let me know how you would like to proceed.`
    },
    deliveryTimeEnquiry: function () {
        return `Hello! This is Jo assisting you.\n\n\
Our orders are processed and stock ordered in at 9am daily and from then on, \
we seek to fulfill and dispatch your order within 1-3 working days generally! \
Also, we will keep you updated if anything newly unavailable or need extra waiting time.\
(ie. If you were to order today, it'll be processed on the next working day.)`
    },
    refundedStripe: function () {
        return `I've processed your refund, \
and you should expect to see the amount re-appear in your bank account \
in the next couple business days. Thank you and have a good day! :D `
    },
    itemShortageUponDelivery: function (generatedList) {
        return `Hi~ This is Jo from Nekojam. Your order will be delivered tonight 7-10pm.\n\n\
Unfortunately, the restock time of the following item(s) that you ordered have been delayed by our supplier:\n\n\
${generatedList}\n\
If it is ok, we would like to continue to deliver your order to you as planned, \
and will arrange second round of delivery for the shortage item(s) to you once we secure the stock.\n\n\
I’m truly sorry for the inconvenience caused. Thank you!`
    },
    longWaitingTimeSplit: function (generatedList, date) {
        return `Hi! This is Jo from Nekojam. Thanks for shopping with us!\n\n\
Your order has been processed and awaiting fulfilment at the moment.\n\
I understand you ordered ${generatedList} but unfortunately it will take us around ${date} \
to have the backorder stock comes in as we need to order it in from our supplier.\n\n\
If it is ok, we would like to dispatch the available item(s) first while we waiting the above item(s) to restock. \
We will arrange second round delivery for you once we secure the stocks.\n\n\
Hope this works for you, and truly sorry for the inconvenience caused. Thanks.`
    },
    longWaitingTimeHold: function (generatedList) {
        return `Hi! This is Jo from Nekojam. Thanks for shopping with us!\n\
Your order has been processed and awaiting fulfilment at the moment.\n
I understand you ordered the\
${generatedList}\
but unfortunately it will take us around ${date} to have the backorder stock comes in as we need to order it in from our supplier.\n\n\
Are you able to wait for the restock shipment? \
If it is ok, we would be glad to hold up your order to wait for the restock and arrange the earliest possible delivery slot \
for you once we secure the stock.\n\n\
Please let me know how you would like to proceed, thank you.`        
    },
    placeNewOrderAddOn: function () {
        return `We currently do not have any online ways to allow customers to top-up price differences 
nor accept top-ups via cash on deliveries (as we do not want to allow our drivers or courier team to handle the money).\n\n\
With regards to topping up, we’ll usually request for the customer to place an order for the item online \
and then refund the old item so that there are less complications \
and the customer’s money will be reflected accurately on their credit statement.\n\n\
I hope this method works for you~ :)`
    },
    howToAddOnItem: function () {
        return `We suggest customers to place a new order for add-on items so that the amount will be tally and more clear to our accounts. \
When placing add-on order, please take note:\n
    - Option for pick-up (no delivery fee charges).\n\
    - Indicate to combine with order #XXXXX in the note section.\n\
    - Submit order.\n\n\
Note: Add-on order will be processed on the next working day and might take some extra days for us \
to fulfil before we dispatch with your current order.`
    },
    topUpShippingFee: function () {
        return `Regarding to the payment for shipping, we currently only accept bank transfer. The details are as follows:\n\n\
Nekojam's PayNow UEN number is 201714931M.\n\
Nekojam's bank account number is DBS CURRENT ACCOUNT 0720005066.\n\n\
Upon successful payment, email us at paynow@nekojam.com\n\n\
Your email should follow the following format:\n\n\
    1.  Email Header: Payment for Nekojam Order #XXXXX (insert your order number)\n\
    2.  Customer Name\n\
    3.  Customer E-Mail\n\
    4.  Amount Transferred\n\
    5.  Transaction Reference (listing date and time of transfer)\n\
    6.  Attach image of transaction proof\n\n\
Our account will verify it on the next working day.\n\
Please do not forget to screenshot it as a proof and send it to me to speed up the process!\n\
Thank you.`
    },
    offerDiscountDefect: function (generatedList) {
        return `Hello, this is Jo from Nekojam. So sorry to bother you but I would like to notify you there’s a small defect on \
${generatedList} that is being delivered to you this evening.\n\n\
While we were having your order dispatched for this evening, my storekeeper accidentally made a small damage on the packaging of the item. \
There was no spillage and we've patched & taped up the small tear, \
but we would like to apologise for the inconvenience and worry caused to you regarding this. \
If you would like to keep that item, we would like to extend a 5% discount for that item. \
If you would prefer otherwise, please let me know as well. Thank you!\n\n\
I’ll be dispatching that item as promised this evening but should it be uncomfortable for you, \
please let me know and I’ll arrange for a new bag to be sent to you when the supplier is able to send the goods down to us!`
    },
    expiryDateNotice: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\
Your order is processed,\n\
I would like to highlight the *expiry date* of the following item(s):\n\n\
${generatedList}\n\
Would you mind to continue to keep the order?\n\
Or if you would like to cancel or switch to something else?\n\n\
Please let me know!`
    },
    outOfStockNoETA: function (generatedList) {
        return `Hi, this is Jo from Nekojam. Thank you for shopping with us!\n\n\
Unfortunately we just have been informed by our supplier that the item(s) below is newly *out of stock* at the moment:\n\n\
${generatedList}\n\
Because we cannot be sure at this time when, or if, we will be able to re-stock the item(s), \
we would like to remove the item(s) from your order. The remainder of your order will be shipped and \
you will not be charged for the cancelled item(s).\n\n\
Please accept our apologies for this inconvenience. Thank you!`
    }
}