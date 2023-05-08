// Select the form element
const form = document.querySelector('#signup-form');

// Handle the form submission
form.addEventListener('submit', function(event) {
   event.preventDefault(); // Prevent the default form submission behavior

   // Get the input values
   const name = document.querySelector('#name').value;
   const email = document.querySelector('#email').value;
   const password = document.querySelector('#password').value;
    // Generate a random user ID
   const userId = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

    // Store the user ID in local storage
   localStorage.setItem('userId', userId);
   localStorage.setItem('email', email);
   localStorage.setItem('password', password);

   console.log(name, email, password);
   // Validate the input values
   if (name === '' || email === '' || password === '') {
      alert('Please fill in all the fields');
      return false;
   }

   analytics.identify(userId, {
    name: name,
    email: email
   });

   analytics.track("User Registered",{
    event_name: "signup button clicked",
    button_text: "submit"
   })

   // Send the form data to the server for processing (not implemented in this example)
   // ...

   // Redirect the user to the login page
   window.location.href = 'login.html';
});