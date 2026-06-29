document.addEventListener('DOMContentLoaded', () => {

  const demoForm = document.getElementById('demoRequestForm');

  if (demoForm) {
    demoForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Stop actual php redirect for demo/validation

      // Get values
      const fullName = document.getElementById('fullName').value.trim();
      const workEmail = document.getElementById('workEmail').value.trim();
      const mobileNumber = document.getElementById('mobileNumber').value.trim();
      const institutionName = document.getElementById('institutionName').value.trim();
      const userRole = document.getElementById('userRole').value;
      const institutionType = document.getElementById('institutionType').value;
      const studentCount = document.getElementById('studentCount').value;
      const preferredDateTime = document.getElementById('preferredDateTime').value;
      
      // Check checkboxes
      const checkboxes = document.querySelectorAll('input[name="interest[]"]:checked');
      if (checkboxes.length === 0) {
        alert('Please select at least one module of interest.');
        return;
      }

      // Simple mobile number check (10 digits)
      if (mobileNumber.length !== 10 || isNaN(mobileNumber)) {
        alert('Please enter a valid 10-digit mobile number.');
        return;
      }

      // Successful simulation
      console.log('Submitting Request Demo Form data:', {
        fullName,
        workEmail,
        mobileNumber,
        institutionName,
        userRole,
        institutionType,
        studentCount,
        preferredDateTime,
        interests: Array.from(checkboxes).map(cb => cb.value)
      });

      // Create a premium notification overlay modal
      const overlay = document.createElement('div');
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100vw';
      overlay.style.height = '100vh';
      overlay.style.backgroundColor = 'rgba(15, 23, 42, 0.7)';
      overlay.style.backdropFilter = 'blur(5px)';
      overlay.style.display = 'flex';
      overlay.style.justifyContent = 'center';
      overlay.style.alignItems = 'center';
      overlay.style.zIndex = '9999';
      overlay.style.opacity = '0';
      overlay.style.transition = 'opacity 0.3s ease';

      const modal = document.createElement('div');
      modal.style.backgroundColor = '#ffffff';
      modal.style.padding = '40px 30px';
      modal.style.borderRadius = '12px';
      modal.style.textAlign = 'center';
      modal.style.maxWidth = '400px';
      modal.style.width = '90%';
      modal.style.boxShadow = '0 20px 40px rgba(0,0,0,0.15)';
      modal.style.transform = 'scale(0.8)';
      modal.style.transition = 'transform 0.3s ease';

      modal.innerHTML = `
        <div style="width:60px; height:60px; border-radius:50%; background-color:#DCFCE7; color:#16A34A; display:flex; align-items:center; justify-content:center; font-size:30px; margin:0 auto 20px auto;">
          <i class="fa-solid fa-circle-check"></i>
        </div>
        <h3 style="font-family:'Outfit', sans-serif; font-size:22px; font-weight:800; color:#1F2937; margin-bottom:10px;">Demo Requested!</h3>
        <p style="font-size:14px; color:#6B7280; line-height:1.6; margin-bottom:20px;">
          Thank you, <strong>${fullName}</strong>. Your demo request for <strong>${institutionName}</strong> has been successfully received. We will contact you at <strong>${workEmail}</strong> shortly.
        </p>
        <span style="font-size:12px; color:#9CA3AF; display:block;">Redirecting you back to home...</span>
      `;

      overlay.appendChild(modal);
      document.body.appendChild(overlay);

      // Fade-in animations
      setTimeout(() => {
        overlay.style.opacity = '1';
        modal.style.transform = 'scale(1)';
      }, 50);

      // Redirect home after 3.5 seconds
      setTimeout(() => {
        window.location.href = 'index.html';
      }, 3500);
    });
  }

});
