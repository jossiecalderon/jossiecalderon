// This code is responsible for handling the display of the alert message and the tooltip functionality in the HTML document.
// LOAD THIS BEFORE BOOTSTRAP JS.

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'G-7PXPJBGXH1');

document.addEventListener('DOMContentLoaded', () =>{
  // Get the alert element
  const alertElement = document.querySelector('#findMyVMIP'); if (!alertElement) return;
  // Hide the alert initially
  alertElement.style.display = 'none';
  
  // Create the toggle icon
  const toggleIcon = document.createElement('div');
  toggleIcon.innerHTML = `
    <svg class="bi me-2" width="24" height="24" fill="currentColor" style="cursor: pointer; color: #0d6efd; vertical-align: middle;">
      <use href="#question-circle"></use>
    </svg>
  `;
  toggleIcon.style.display = 'inline-block';
  toggleIcon.style.marginLeft = '5px';
  toggleIcon.title = 'Click for help';
  
  // Insert the toggle icon after the first paragraph
  const instructionsVMIP = document.querySelector('#instructionsVMIP');
  if (instructionsVMIP) {
    instructionsVMIP.appendChild(toggleIcon);
    
    // Add click event listener to toggle the alert
    toggleIcon.addEventListener('click', function() {
      if (alertElement.style.display === 'none') {
        alertElement.style.display = 'block';
        // Optional: smooth scroll to make the alert visible
        alertElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
      } else {
        alertElement.style.display = 'none';
      }
    });
  }
});

// Function to handle the hover effect for the Azure credit information text
// This code adds a hover effect that becomes permanent once clicked
document.addEventListener('DOMContentLoaded', function() {
  const infoText = document.querySelector('#azureIPCreditWarning');
  let hasBeenClicked = false; // Track if it's been clicked at all
  
  if (infoText) {
    // Add hover event listeners
    infoText.addEventListener('mouseenter', function() {
      // Only apply hover effect if never clicked before
      if (!hasBeenClicked) {
        this.classList.add('text-info');
        this.style.cursor = 'pointer';
      }
    });
    
    infoText.addEventListener('mouseleave', function() {
      // Only remove hover effect if never clicked before
      if (!hasBeenClicked) {
        this.classList.remove('text-info');
      }
    });
    
    // Click handler - sets permanent state
    infoText.addEventListener('click', function() {
      if (!hasBeenClicked) {
        // First and only click that matters
        this.classList.remove('text-info'); // Remove hover class if present
        this.classList.add('text-primary'); // Add permanent color
        this.style.cursor = 'default'; // Change cursor back to default
        hasBeenClicked = true; // Mark as clicked
        
        console.log('Credit info clicked - permanent state activated');
      }
    });
  }
});

const themeButton = document.querySelector("#theme-select");

// Add click event listener to theme button
themeButton.addEventListener("click", () => {
  // Initialize and show toast
  const toastElement = document.querySelector('#themeToast');
  if (toastElement) {
      const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
      toast.show();
  }
});

const projectsButton = document.querySelector('#projectsButton')

// Add click event listener to Projects button
projectsButton.addEventListener("click", () => {
  // Initialize and show toast
  const toastElement = document.querySelector('#projectsToast');
  if (toastElement) {
      const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
      toast.show();
  }
});

const servicesButton = document.querySelector('#servicesButton')

// Add click event listener to Projects button
servicesButton.addEventListener("click", () => {
  // Initialize and show toast
  const toastElement = document.querySelector('#servicesToast');
  if (toastElement) {
      const toast = bootstrap.Toast.getOrCreateInstance(toastElement);
      toast.show();
  }
});

const EMAILJS_PUBK = "DCFxrgr9teEfvWkcV";

// Initialize EmailJS - add your own public key from emailjs.com
document.addEventListener('DOMContentLoaded', function() {

  // At the top of your DOMContentLoaded event
  /*console.log("EmailJS available:", typeof emailjs !== 'undefined');
  if (typeof emailjs !== 'undefined') {
    console.log("Initializing EmailJS with public key:", EMAILJS_PUBK);
    emailjs.init(EMAILJS_PUBK);
  } else {
    console.error("EmailJS library not loaded!");
  }*/

  // Initialize EmailJS if the script is loaded
  if (typeof emailjs !== 'undefined') {
    emailjs.init(EMAILJS_PUBK); // Replace with your actual public key
  }

  // Handle contact form submission
  const contactForm = document.getElementById('contactForm');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Validation function
      function validateForm() {
        let isValid = true;
        
        // Email validation
        const emailValue = document.getElementById('email').value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailValue)) {
          alert("Please enter a valid email address");
          isValid = false;
        }
        
        // Name validation - prevent HTML/scripts
        const nameValue = document.getElementById('name').value;
        if (nameValue.includes('<') || nameValue.includes('>')) {
          alert("Please enter a valid name without special characters");
          isValid = false;
        }
        
        // Message length validation
        const messageValue = document.getElementById('message').value;
        if (messageValue.length < 10) {
          alert("Please enter a more detailed message");
          isValid = false;
        }
        
        return isValid;
      }
      
      // Stop if validation fails
      if (!validateForm()) {
        return;
      }
      
      // Get form data
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const subject = document.getElementById('subject').value;
      const message = document.getElementById('message').value;
      
      console.log('Form submitted:', { name, email, subject, message });
      
      // If EmailJS is available, send the form data to your email
      if (typeof emailjs !== 'undefined') {
        // Show loading state
        const submitBtn = document.querySelector('button[type="submit"][form="contactForm"]');
        const originalBtnText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Sending...';
        submitBtn.disabled = true;
        
        // Send the email - replace with your service ID and template ID from EmailJS
        emailjs.send("service_8wjljsl", "template_f0hm3an", {
          from_name: name,
          reply_to: email,
          title: subject || "Contact Form Submission",
          message: message,
          to_email: "cloudanalystgo@gmail.com"
        })
        .then(function(response) {
          console.log('Email sent!', response.status, response.text);
          
          // Hide the modal
          const modalElement = document.getElementById('contactModal');
          const modal = bootstrap.Modal.getInstance(modalElement);
          if (modal) {
            modal.hide();
          }
          
          // Show success toast
          const toastElement = document.getElementById('contactSuccessToast');
          if (toastElement && typeof bootstrap !== 'undefined') {
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
          }
          
          // Reset the form
          contactForm.reset();
        })
        .catch(function(error) {
          console.error('Email failed...', error);
          alert("Message failed to send. Please try again later.");
        })
        .finally(function() {
          // Restore button state
          submitBtn.innerHTML = originalBtnText;
          submitBtn.disabled = false;
        });
      } else {
        console.warn("EmailJS not loaded. Email functionality is disabled.");
        
        // Even without EmailJS, hide modal and show success toast
        const modalElement = document.getElementById('contactModal');
        const modal = bootstrap.Modal.getInstance(modalElement);
        if (modal) {
          modal.hide();
        }
        
        // Show success toast
        const toastElement = document.getElementById('subscriptionSuccessToast');
        if (toastElement && typeof bootstrap !== 'undefined') {
          const toast = new bootstrap.Toast(toastElement);
          toast.show();
        }
        
        // Reset the form
        contactForm.reset();
      }
    });
  }

  // Handle email subscription
  const subscriptionInput = document.getElementById('emailSubscriptionInput');
  const subscriptionButton = subscriptionInput ? subscriptionInput.nextElementSibling : null;
  
  if (subscriptionInput && subscriptionButton) {
    subscriptionButton.addEventListener('click', function() {
      // Validate email
      const emailValue = subscriptionInput.value.trim();
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      
      if (!emailRegex.test(emailValue)) {
        alert("Please enter a valid email address");
        return;
      }
      
      // Show loading state
      const originalBtnText = subscriptionButton.innerHTML;
      subscriptionButton.innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> Subscribing...';
      subscriptionButton.disabled = true;
      
      // Send to EmailJS - using the same service but with a different template
      if (typeof emailjs !== 'undefined') {
        emailjs.send("service_8wjljsl", "template_f0hm3an", {
          from_name: "Newsletter Subscriber",
          reply_to: emailValue,
          title: "Newsletter Subscription",
          message: `New subscription request from: ${emailValue}`,
          to_email: "cloudanalystgo@gmail.com"
        })
        .then(function(response) {
          console.log('Subscription email sent!', response.status, response.text);
          
          // Show success message (you could create a new toast for subscriptions)
          const toastElement = document.getElementById('contactSuccessToast');
          if (toastElement && typeof bootstrap !== 'undefined') {
            const toast = new bootstrap.Toast(toastElement);
            toast.show();
          }
          
          // Clear the input field
          subscriptionInput.value = '';
        })
        .catch(function(error) {
          console.error('Subscription failed...', error);
          alert("Subscription request failed to send. Please try again later.");
        })
        .finally(function() {
          // Restore button state
          subscriptionButton.innerHTML = originalBtnText;
          subscriptionButton.disabled = false;
        });
      } else {
        console.warn("EmailJS not loaded. Subscription functionality is disabled.");
        // Still clear the field and show success to not block the user
        subscriptionInput.value = '';
        
        const toastElement = document.getElementById('contactSuccessToast');
        if (toastElement && typeof bootstrap !== 'undefined') {
          const toast = new bootstrap.Toast(toastElement);
          toast.show();
        }
        
        // Restore button state
        subscriptionButton.innerHTML = originalBtnText;
        subscriptionButton.disabled = false;
      }
    });
  }
  
  // Make sure the modal is properly initialized
  const contactModalEl = document.getElementById('contactModal');
  if (contactModalEl && typeof bootstrap !== 'undefined' && typeof bootstrap.Modal !== 'undefined') {
    const contactModal = new bootstrap.Modal(contactModalEl);
    // contactModal.show(); // Uncomment to test
  } else {
    console.warn('Modal initialization failed. Bootstrap may not be loaded properly.');
  }
});