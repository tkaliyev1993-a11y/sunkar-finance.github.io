document.getElementById('leadForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let phone = document.getElementById('phone').value;
    let city = document.getElementById('city').value;
    let service = document.getElementById('service').value;

    let msg = `Заявка:%0AИмя: ${name}%0AТелефон: ${phone}%0AГород: ${city}%0AУслуга: ${service}`;
    window.location.href = `https://wa.me/77052606667?text=${msg}`;
});
