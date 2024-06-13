document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("admissionForm").addEventListener("submit", function(event) {
     
  
      // Get the value of the name field (username)
      const username = document.getElementById("name").value;
  
      // Construct the custom alert message
      const message = `Dear ${username},\nYour form submitted successfully!\nBinary learn will contact you soon.`;
  
      // Display the custom alert message
      alert(message);
    });
  });
  