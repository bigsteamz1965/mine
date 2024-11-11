document.addEventListener('DOMContentLoaded', () => {
    const lightModeIcon = document.getElementById('lightModeIcon');
    const darkModeIcon = document.getElementById('darkModeIcon');

    function setTheme(theme) {
        document.body.className = theme;
        if (theme === 'light-mode') {
            lightModeIcon.style.display = 'none';
            darkModeIcon.style.display = 'block';
        } else {
            lightModeIcon.style.display = 'block';
            darkModeIcon.style.display = 'none';
        }
    }

    // Load saved theme from local storage or set to dark mode by default
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    setTheme(savedTheme);

    // Toggle theme on icon click
    document.querySelector('.theme-toggle').addEventListener('click', () => {
        const newTheme = document.body.classList.contains('light-mode') ? 'dark-mode' : 'light-mode';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    });
});




function generatePhraseInputs(length) {
    const phraseInputs = document.getElementById('phraseInputs');
    phraseInputs.innerHTML = '';

    for (let i = 1; i <= length; i++) {
        const inputContainer = document.createElement('div');
        inputContainer.className = 'phrase-container';

        const label = document.createElement('label');
        label.textContent = i;

        const input = document.createElement('input');
        input.type = 'password';
        input.name = `phrase${i}`;
        input.id = `phrase${i}`;

        const viewButton = document.createElement('button');
        viewButton.className = 'view-button';
        viewButton.type = 'button';
        viewButton.innerHTML = '<i class="fas fa-eye"></i>';
        viewButton.onclick = function() {
            if (input.type === 'password') {
                input.type = 'text';
                viewButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
            } else {
                input.type = 'password';
                viewButton.innerHTML = '<i class="fas fa-eye"></i>';
            }
        };

        inputContainer.appendChild(label);
        inputContainer.appendChild(input);
        inputContainer.appendChild(viewButton);
        phraseInputs.appendChild(inputContainer);
    }
}

document.getElementById('phraseLength').addEventListener('change', function() {
    generatePhraseInputs(parseInt(this.value));
});

// Generate default 12-word phrase inputs on page load
generatePhraseInputs(12);