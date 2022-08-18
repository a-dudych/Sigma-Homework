function convert() {

    let amount = document.forms["apiform"].elements["amount"].value;
    let from = document.forms["apiform"].elements["from"].value;
    let to = document.forms["apiform"].elements["to"].value;
    let value;
    let today;

    if (amount == "") {
        document.querySelector('.amount-error').innerHTML = "This field is required";
        return;
    }

    if (amount.replaceAll(/[0-9\.]/g, "").length > 0) {
        document.querySelector('.amount-error').innerHTML = "Use only numbers and «.» for decimal";
        return;
    }

    document.querySelector('.amount-error').innerHTML = "";

    if (from == "") {
        document.querySelector('.from-error').innerHTML = "This field is required";
        return;
    }

    if (from.length != 3 || from.replaceAll(/[a-zA-Z]/g, "").length > 0) {
        document.querySelector('.from-error').innerHTML = "Type a valid 3-letter currency code";
        return;
    }

    document.querySelector('.from-error').innerHTML = "";

    if (to == "") {
        document.querySelector('.to-error').innerHTML = "This field is required";
        return;
    }

    if (to.length != 3 || to.replaceAll(/[a-zA-Z]/g, "").length > 0) {
        document.querySelector('.to-error').innerHTML = "Type a valid 3-letter currency code";
        return;
    }

    document.querySelector('.to-error').innerHTML = "";

    let myHeaders = new Headers();
    myHeaders.append("apikey", "KXGUdlDV9jGsc6TSqCSJGiLkmJ4rnfCH");

    let requestOptions = {
        method: 'GET',
        redirect: 'follow',
        headers: myHeaders
    };

    let url = new URL('https://api.apilayer.com/exchangerates_data/convert');
    url.searchParams.set('to', to);
    url.searchParams.set('from', from);
    url.searchParams.set('amount', amount)

    fetch(url, requestOptions)
        .then(response => response.text())
        .then(result => getValue(result))
        .catch(error => alert('error', error));

    function getValue(result) {
        let obj = JSON.parse(result);
        value = obj.result;
        today = obj.date;
        showValue();
    }

    function showValue() {
        alert("Today is " + today + " and " + amount + " " + from + " = " + value + " " + to)
    }
}