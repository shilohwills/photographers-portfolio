document.getElementById('contactForm').addEventListener('submit', function(e) {
            e.preventDefault();
            
            const form = e.target;
            const formMessage = document.getElementById('formMessage');
            
            // Show loading state
            formMessage.textContent = 'Sending your message...';
            formMessage.className = 'form-message';
            formMessage.style.display = 'block';
            
            // Create a new FormData instance
            const formData = new FormData(form);
            
            // Send form data using FormSubmit
            fetch(form.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    // Success message
                    formMessage.textContent = '✅ Message sent successfully! We\'ll get back to you soon.';
                    formMessage.className = 'form-message success';
                    
                    // Reset form
                    form.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            })
            .catch(error => {
                // Error message
                formMessage.textContent = '❌ Error sending message. Please try again or contact us directly.';
                formMessage.className = 'form-message error';
            });
        });