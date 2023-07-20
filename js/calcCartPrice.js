function calcCartPriceAndDelivery() {
    const cartWrapper = document.querySelector('.cart-wrapper')
    const priceElements = cartWrapper.querySelectorAll('.price__currency')
    const totalPriceEl = document.querySelector('.total-price')

    let priceTotal = 0

    priceElements.forEach(function(item) {
        const amountEl = item.closest('.cart-item').querySelector('[data-counter]')

        priceTotal += parseInt(item.innerText) * parseInt(amountEl.innerText)

    })

    totalPriceEl.innerText = priceTotal
}
