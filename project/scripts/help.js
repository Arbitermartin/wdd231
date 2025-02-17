// TOGGLE BUTTON
document.getElementById('toggleButton').addEventListener('click',function(){
  let navMenu = document.getElementById('navMenu');
  if (navMenu.classList.contains('show')) {
      this.innerHTML = ' <i class="fa fa-bars"></i>';
  } else {
      this.innerHTML = '<i class="fa fa-x"></i>';
  }
  navMenu.classList.toggle('show');
});
// Show preloader for 1 minute before showing the main website
setTimeout(function() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("content").classList.remove("hidden");
}, 4000); // 60 seconds

// welcome message and local storage.
  // Get the message div
  const messageDiv = document.getElementById("visit-message");

  // Retrieve last visit from localStorage
  let lastVisit = localStorage.getItem("lastVisit");

  if (lastVisit) {
      // Convert timestamp to a readable format
      let lastVisitDate = new Date(parseInt(lastVisit)).toLocaleString();
      messageDiv.innerHTML = `<h2>Welcome back!</h2><p>Your last visit was on: ${lastVisitDate}</p>`;
  } else {
      messageDiv.innerHTML = `<h2>Welcome to our site!</h2><p>This is your first visit.</p>`;
  }

  // Update localStorage with the current visit timestamp
  localStorage.setItem("lastVisit", Date.now());
//   end of this fetch