

function check() {
    let user_name = document.getElementById('user_name');
    let user_surname = document.getElementById('user_surname');
    let birthdate = document.getElementById('birthdate');
    let email = document.getElementById('email');
    let mobile_number = document.getElementById('mobile_number');
    let user_password = document.getElementById('user_password');
    let repeat_user_password = document.getElementById('repeat_user_password');
    let eula_accepted = document.getElementById('eula_accepted');

    let form  = document.getElementsByTagName('form')[0];
form.isValid = true;


    document.getElementById('errorMessage_user_name').innerHTML = "";
    document.getElementById('errorMessage_user_surname').innerHTML = "";
    document.getElementById('errorMessage_birthdate').innerHTML = "";
    document.getElementById('errorMessage_email').innerHTML = "";
    document.getElementById('errorMessage_mobile_number').innerHTML = "";
    document.getElementById('errorMessage_user_password').innerHTML = "";
    document.getElementById('errorMessage_repeat_user_password').innerHTML = "";
    document.getElementById('errorMessage_eula_accepted').innerHTML = "";

    if (user_name.value == '') {
        document.getElementById('errorMessage_user_name').innerHTML += "Пожалуйста, укажите Ваше имя<br>";
        form.isValid = false;
    }

    if (user_surname.value == '') {
        document.getElementById('errorMessage_user_surname').innerHTML += "Пожалуйста, укажите Вашу фамилию<br>";
        form.isValid = false;
    }

    if (birthdate.value == '') {
        document.getElementById('errorMessage_birthdate').innerHTML += "Пожалуйста, укажите дату Вашего рождения<br>";
        form.isValid = false;
    }

    if (email.value == '') {
        document.getElementById('errorMessage_email').innerHTML += "Пожалуйста, укажите Ваш e-mail<br>";
        form.isValid = false;
    }

    if (mobile_number.value == '') {
        document.getElementById('errorMessage_mobile_number').innerHTML += "Пожалуйста, укажите Ваш номер мобильного телефона<br>";
        form.isValid = false;
    }

    // if (mobile_number.value.length <= 10 && mobile_number.value.length >= 1) {
    //     document.getElementById('errorMessage_mobile_number').innerHTML += "Ваш номер мобильного телефона должен содержать 11 цифр<br>";
    //     form.isValid = false;
    // } неправильно


if (mobile_number.value.length !== 11) {
    document.getElementById('errorMessage_mobile_number').innerHTML += "Ваш номер мобильного телефона должен содержать 11 цифр<br>";
    form.isValid = false;
}



    if (user_password.value.length <= 5) {
        document.getElementById('errorMessage_user_password').innerHTML += "Ваш пароль не безопасен, введите не менее 6 символов<br>";
        form.isValid = false;

    }

    if (repeat_user_password.value == '') {
        document.getElementById('errorMessage_repeat_user_password').innerHTML += "Необходимо ввести пароль еще раз<br>";
        form.isValid = false;

    }

    if (repeat_user_password.value != user_password.value) {
        document.getElementById('errorMessage_repeat_user_password').innerHTML += "Пароль не совпадает<br>";
        form.isValid = false;

    }

    if (eula_accepted.checked == false) {
        document.getElementById('errorMessage_eula_accepted').innerHTML += "Пожалуйста, внимательно прочтите Пользовательское соглашение и примите его условия, поставив галочку<br>";
        form.isValid = false;

    }
if (form.isValid == true) {
    let welcome_user=user_name.value;
    alert(`Добро пожаловать, ${welcome_user}!`)
}
}

