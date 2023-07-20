function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceElements = cartWrapper.querySelectorAll('.price__currency')
    const totalPriceEl = document.querySelector('.total-price')
    const deliveryCost = document.querySelector('.delivery-cost')
    const cartDelivery = document.querySelector('[data-cart-delivery]')

    let priceTotal = 0

    priceElements.forEach(function(item) {
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]')

        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText)

    })

    totalPriceEl.innerText = priceTotal

    if (cartDelivery > 0) {
        cartDelivery.classList.remove('none')
    } else {
        cartDelivery.classList.remove('none')
    }

    if (priceTotal >= 600) {
        deliveryCost.classList.add('free')
        deliveryCost.innerText = 'безплатно'
    } else {
        deliveryCost.classList.remove('free')
        deliveryCost.innerText = '250 ₽'
    }
}
