// Function to show the selected page and hide others
function showPage(pageId) {
  // Hide all page contents
  document.querySelectorAll('.page-content').forEach(section => {
    section.classList.remove('active');
  });

  // Show the selected page content
  document.getElementById(pageId).classList.add('active');
}

// Handle form submission
function handleSubmit(event) {
  event.preventDefault(); // Prevent page reload on form submit
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const comments = document.getElementById('comments').value;

  console.log('Form Submitted:', { name, email, comments });
  alert(`Thank you, ${name}! Your message has been sent.`);
}
