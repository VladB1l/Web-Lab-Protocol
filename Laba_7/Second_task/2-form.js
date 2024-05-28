let form = document.querySelector("form")
let email = document.querySelector('input[name="email"]')
let message = document.querySelector('textarea[name="message"]')
let formData = {
    email: "",
    message: "",
}

CheckStorage()
form.addEventListener('input', UpdateFormData);


function UpdateFormData(event) {
    const { name, value } = event.target;
    formData[name] = value;
    SaveFormData();
}

function SaveFormData() {
    localStorage.setItem(`feedback-form-state`, JSON.stringify(formData))
}

function CheckStorage() {
    let getItem = localStorage.getItem('feedback-form-state')
    if (getItem !== null) {
        let localData = JSON.parse(getItem)
        email.value = localData.email
        message.value = localData.message
    }
}


function handleSubmit(event) {
    event.preventDefault();
    form = event.target

    let email = form.elements.email.value.trim()
    let message = form.elements.message.value.trim()

    if (email === "" || message === "") {
        alert("Fill please all fields!!!")
    } else {
        console.log(formData)
        form.reset()
        formData.email = ''
        formData.message = ''
        localStorage.clear();
    }

}