"use strict"

function main(){
    let nameClient = document.getElementById("name");
    let numClient = document.getElementById("phone");
    let emailClient = document.getElementById("email");
    let questClient = document.getElementById("question");
    let info = ("Name: " + nameClient.value + "\nPhone: "+ numClient.value + "\nE-mail: " + emailClient.value +
                "\nQuestion: " + questClient.value);
    console.log(info);

    var form = document.querySelector('.pageclip-form')
    Pageclip.form(form, {
    onSubmit: function (event) { },
    onResponse: function (error, response) { },
    successTemplate: '<span>Thank you!</span>'
})
}