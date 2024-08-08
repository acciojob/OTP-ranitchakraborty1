//your JS code here. If required.
   const inputs = document.querySelectorAll('.code');

        // Add event listeners to each input field
        inputs.forEach((input, index) => {
            input.addEventListener('input', (event) => {
                if (event.target.value.length === 1) {
                    if (index < inputs.length - 1) {
                        inputs[index + 1].focus();
                    }
                }
            });

            input.addEventListener('keydown', (event) => {
                if (event.key === 'Backspace' && event.target.value === '') {
                    if (index > 0) {
                        inputs[index - 1].focus();
                    }
                }
            });
        });

 