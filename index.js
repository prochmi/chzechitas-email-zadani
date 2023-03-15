console.log('funguju');


const goodbye = () => {
    let rozlouceni = document.querySelector('.email__closing')
    rozlouceni.textContent = "Na shledanou " 
}

const goodbyeDva = (name) => {
    let rozlouceni = document.querySelector('.email__closing')
    rozlouceni.textContent = "S pozdravem, " + name
}


const fillSubject = (subject) => {
    let predmet = document.querySelector('.email_subject')
    predmet.textContent = subject
}

const fillBody = (body, name) => {
    let predmet = document.querySelector('.email_content')
    predmet.textContent = body
    goodbyeDva(name)

}
const kurzy = {EUR: 24.37, GBP: 28.08, USD: 24.81, BTC: 478637}
const convertToCZK = (sum, currency) => {
    let mena
    if(currency === 'EUR'){
        mena = kurzy.EUR
    }else if (currency === 'GBP'){
        mena = kurzy.GBP
    }else if (currency === 'USD'){
        mena = kurzy.USD
    }else if (currency === 'BTC'){
        mena = kurzy.BTC
    }else{
        return null
    }
    return Math.round (sum+mena)
}







