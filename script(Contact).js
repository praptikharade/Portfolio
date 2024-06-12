document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('customForm');

    form.addEventListener('submit', (e) => {
        let isValid = true;

        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const privacy = document.getElementById('privacy');

        if (name.value.trim() === '') {
            showError('nameError');
            isValid = false;
        } else {
            hideError('nameError');
        }

        if (email.value.trim() === '') {
            showError('emailError');
            isValid = false;
        } else {
            hideError('emailError');
        }

        if (!privacy.checked) {
            showError('privacyError');
            isValid = false;
        } else {
            hideError('privacyError');
        }

        if (!isValid) {
            e.preventDefault();
        }
    });

    function showError(elementId) {
        document.getElementById(elementId).style.display = 'block';
    }

    function hideError(elementId) {
        document.getElementById(elementId).style.display = 'none';
    }
});

