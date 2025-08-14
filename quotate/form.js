 // Checkbox functionality
        document.getElementById('subscribeCheckbox').addEventListener('click', function () {
            const checkbox = this;
            const hiddenInput = document.getElementById('subscribeToMailList');

            if (checkbox.classList.contains('checked')) {
                checkbox.classList.remove('checked');
                hiddenInput.value = 'false';
            } else {
                checkbox.classList.add('checked');
                hiddenInput.value = 'true';
            }
        });

        // Form submission
        document.getElementById('contactForm').addEventListener('submit', function (e) {
            e.preventDefault();
            sendEmail();
        });

        function sendEmail() {
            const submitBtn = document.getElementById('submitBtn');
            const spinner = submitBtn.querySelector('.loading-spinner');
            const successMsg = document.getElementById('successMessage');
            const errorMsg = document.getElementById('errorMessage');

            // Show loading state
            submitBtn.disabled = true;
            spinner.style.display = 'inline-block';
            successMsg.style.display = 'none';
            errorMsg.style.display = 'none';

            // Collect form data
            const formData = {
                name: document.getElementById('yourName').value,
                email: document.getElementById('yourEmail').value,
                companyLocation: document.getElementById('companyLocation').value,
                industry: document.getElementById('industry').value,
                financialYear: document.getElementById('financialYear').value,
                annualTurnover: document.getElementById('annualTurnover').value,
                message: document.getElementById('yourMessage').value,
                hearAboutUs: document.getElementById('hearAboutUs').value,
                subscribe: document.getElementById('subscribeToMailList').value
            };

            // Create formatted email body
            const emailBody = createEmailBody(formData);

            // Create mailto link (for demonstration - in production you'd use a backend service)
            const recipient = 'mduduzigiven.skhosana@gmail.com'; // Replace with your email
            const subject = 'B-BBEE Certification Quote Request from ' + formData.name;
            const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

            // Simulate API call delay
            setTimeout(() => {
                try {
                    // Open email client
                    window.location.href = mailtoLink;

                    // Show success message
                    submitBtn.disabled = false;
                    spinner.style.display = 'none';
                    successMsg.style.display = 'block';

                    // Reset form
                    document.getElementById('contactForm').reset();
                    document.getElementById('subscribeCheckbox').classList.remove('checked');
                    document.getElementById('subscribeToMailList').value = 'false';

                } catch (error) {
                    // Show error message
                    submitBtn.disabled = false;
                    spinner.style.display = 'none';
                    errorMsg.style.display = 'block';
                }
            }, 1000);
        }

        function createEmailBody(data) {
            return `
B-BBEE Certification Quote Request

=====================================
CLIENT INFORMATION
=====================================

Name: ${data.name}
Email: ${data.email}
Company Location: ${data.companyLocation}
Industry: ${data.industry}

=====================================
CERTIFICATION DETAILS
=====================================

Financial Year to be Rated: ${data.financialYear}
Annual Turnover: ${data.annualTurnover}

=====================================
ADDITIONAL INFORMATION
=====================================

Message: ${data.message || 'No additional message provided'}

How they heard about us: ${data.hearAboutUs}
Subscribe to mailing list: ${data.subscribe === 'true' ? 'Yes' : 'No'}

=====================================
REQUEST SUBMITTED
=====================================

Date: ${new Date().toLocaleDateString()}
Time: ${new Date().toLocaleTimeString()}

Please respond to this client within 24 hours with a detailed B-BBEE certification quote based on their requirements.
            `.trim();
        }