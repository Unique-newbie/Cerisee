document.addEventListener('DOMContentLoaded', () => {

  // ==========================================
  // 1. Password Visibility Toggle
  // ==========================================
  const togglePasswordBtn = document.getElementById('toggle-password-btn');
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  if (togglePasswordBtn && passwordInput && eyeIcon) {
    togglePasswordBtn.addEventListener('click', () => {
      // Toggle the type attribute
      const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
      passwordInput.setAttribute('type', type);
      
      // Toggle the eye icon classes
      if (type === 'text') {
        eyeIcon.classList.remove('fa-eye');
        eyeIcon.classList.add('fa-eye-slash');
      } else {
        eyeIcon.classList.remove('fa-eye-slash');
        eyeIcon.classList.add('fa-eye');
      }
    });
  }

  // ==========================================
  // 2. Client-Side Form Validation / Interaction
  // ==========================================
  const loginForm = document.getElementById('loginForm');
  const errorAlert = document.getElementById('error-alert');
  const errorMessageEl = errorAlert ? errorAlert.querySelector('.alert-message') : null;

  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      const usernameVal = document.getElementById('username').value.trim();
      const passwordVal = passwordInput.value.trim();

      // Client-side validations
      if (!usernameVal || !passwordVal) {
        e.preventDefault(); // Stop submission
        showError('Please fill in all fields.');
        return;
      }

      // Demonstration check: 
      // If the user attempts to enter test data, we can optionally simulate a response or let it submit.
      // Since it needs to work with a backend (PHP), we'll let it submit to login.php normally.
      // But we can add a helper console log to confirm it's firing.
      console.log('Form is valid. Submitting to PHP backend...');
    });
  }

  // Helper function to display error messages on the form
  const showError = (message) => {
    if (errorAlert && errorMessageEl) {
      errorMessageEl.textContent = message;
      errorAlert.style.display = 'flex';
      
      // Auto fade-in effect
      errorAlert.style.opacity = '0';
      errorAlert.style.transition = 'opacity 0.3s ease';
      setTimeout(() => {
        errorAlert.style.opacity = '1';
      }, 50);
    }
  };

});
