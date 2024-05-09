let currentCredit = JSON.parse(localStorage.getItem('creditStorage'))
let availPromos = JSON.parse(localStorage.getItem('promoStorage'))
// Fills the "credit balance" info at the right of the navbar in every page

loadBal()

function loadBal() {
    document.getElementById('credit-bal').innerHTML =
        'Credit balance: $<u>' + (Math.round(currentCredit * 100) / 100).toFixed(2) + '</u>'
}

function csPageLoad() {
    // Creates the localStorage data for a "wallet" if one isn't present
    if (currentCredit == null) {
        let createCreditZero = 0
        storeData('creditStorage', createCreditZero)
    } else {
        console.log(`Your credit balance is: $${currentCredit}`)
    }
    // Creates the localStorage data for promoCodes if one isn't present
    // should be removed upon merger and the localStorage key changed accordingly here as promoCode creation is under staff
    if (availPromos == null) {
        let createPromoZero = []
        storeData('promoStorage', createPromoZero)
    } else {
        console.log(`Promo codes available: ${availPromos}`)
    }
}

function pmFunction() {
    const paymentMC = document.getElementById('payment-method-1')
    const paymentVisa = document.getElementById('payment-method-2')
    const paymentQR = document.getElementById('payment-method-3')

    const infoCard = document.getElementById('payment-info-card')
    const infoQR = document.getElementById('payment-info-qr')

    if (paymentMC.checked || paymentVisa.checked) {
        infoCard.style.display = 'inline'
        infoQR.style.display = 'none'
    } else if (paymentQR.checked) {
        infoQR.style.display = 'inline'
        infoCard.style.display = 'none'
    }
}

function creditConfirm() {
    const topUpBtn = document.getElementsByName('credits-topup-btn')
    let topUpAmt
    let creditGain

    for (i = 0; i < topUpBtn.length; i++) {
        if (topUpBtn[i].checked) {
            topUpAmt = topUpBtn[i].value
        }
    }

    const flatPromo = availPromos.flat()
    let discCode = document.getElementById('promo-code').value
    if (flatPromo.includes(discCode)) {
        let promoAmt = flatPromo[flatPromo.indexOf(discCode) + 1]
        creditGain = Math.round(topUpAmt * promoAmt * 10) / 10
    } else if (discCode == 0) {
        creditGain = topUpAmt
        console.log('No discount code added')
    } else {
        creditGain = topUpAmt
        console.log('Invalid Promo Code')
    }

    currentCredit += Number(creditGain)

    storeData('creditStorage', currentCredit)

    window.location.reload()
}

function checkPromo() {
    const flatPromo = availPromos.flat()
    let discCode = document.getElementById('promo-code').value
    if (flatPromo.includes(discCode)) {
        document.getElementById('promoConfirm').innerHTML = '&#9989'
    } else {
        document.getElementById('promoConfirm').innerHTML = '&#10060'
    }
}
