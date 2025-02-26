// Handle form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from actually submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you, ${name}! We will get back to you at ${email}.`);
});
