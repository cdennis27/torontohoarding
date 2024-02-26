
/* NAVBAR VARIABLES */

const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const menuButton = document.querySelector('.menuButton')

/* FORM VARIABLES */

const name = document.getElementById('name')
const email = document.getElementById('email')
const address = document.getElementById('address')
const phone = document.getElementById('phone')
const timeReach = document.getElementById('timeReach')
var ServicesItem = document.getElementsByClassName('servicesItem')
const urgency = document.getElementById('urgency')
const buildingType = document.getElementById('buildingType')
const propertyClass = document.getElementById('propertyClass')
const occupancy = document.querySelector("input[name='occupancy']:checked")
var servicesList;
var servicesOption = [];




const message = document.getElementById('message')



const errorElement = document.getElementById('error')

/* navbar menu for mobile */


toggleButton.addEventListener('click', () => {
    navbar.classList.toggle('active');
    toggleButton.classList.toggle('close');
    menuButton.classList.toggle('close');
    console.log(menuButton.classList);
    const isOpened = menuButton.getAttribute('aria-expanded');
    if (isOpened === 'false') {
        menuButton.setAttribute('aria-expanded', 'true');
        toggleButton.setAttribute('aria-expanded', 'true');
    }
    else {
        menuButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-expanded', 'false');
    }
});

/* function for contact form */

function sendMail() {

    console.log("email info: " + name.value, email.value, address.value, message.value, phone.value, servicesOption.value, "urgency: " + urgency.value, buildingType.value, propertyClass.value, "occupancy: " + occupancy.value)


    for (var i = 0; i < ServicesItem.length; i++) {

        console.log(ServicesItem[i].value);
        if (ServicesItem[i].type == 'checkbox' && ServicesItem[i].checked == true) {
            servicesOption.push(ServicesItem[i].value);
        }
        console.log(servicesOption);
    }
    console.log(servicesOption.join(", "));
    servicesList = servicesOption.join(", ");
    console.log(servicesList);
    //debugger;

    if (email.value === "" || name.value === "" || message.value === "") {
        errorElement.innerText = ("Please fill out all fields")
        return
    }

    if (!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))) {
        console.log("email is invalid")

        errorElement.innerText = ("Please enter a valid email address")
        alert("Please enter a valid email address, form will be reset.")
        return
    }

    if (address.value === "") {
        errorElement.innerText = ("Please enter your address")
        address.value = "no location given by customer!"
    }

    if (phone.value === "") {
        errorElement.innerText = ("Please enter your phone number")
        alert("Please enter a valid phone number, form will be reset.")
        return
    }

    if (timeReach.value === "") {
        timeReach.value = "not given by customer!"
    }

    if (servicesList === "") {
        errorElement.innerText = ("Please select at least one service")
        alert("Please enter at least one service, form will be reset.")
        return
    }






    let params = {
        name: name.value,
        email: email.value,
        address: address.value,
        phone: phone.value,
        timeReach: timeReach.value,
        servicesList: servicesList,
        urgency: urgency.value,
        buildingType: buildingType.value,
        propertyClass: propertyClass.value,
        occupancy: occupancy.value,

        message: message.value

    }
    console.log(params)
    console.log(params.name, params.email, params.address, params.phone, params.timeReach, params.servicesList, params.message)

    emailjs.send("service_uvypnm9", "template_3mb35ve", params).then(alert("Email Sent!!!"))
    console.log(params)


    console.log(params.name, params.email, params.address, params.phone, params.timeReach, params.servicesList, params.message);


}


















