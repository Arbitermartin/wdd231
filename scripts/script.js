  // year
  const year = document.querySelector("#currentYear");
  const today = new Date();
  year.innerHTML = `<span>${today.getFullYear()}</span>`;

  //last modified
  const date = document.querySelector("#lastModified");
  date.innerHTML = `<span>${document.lastModified}<span>`;