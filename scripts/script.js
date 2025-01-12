const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web.',
        technology: ['HTML', 'CSS'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized and efficient.',
        technology: ['Python'],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects.',
        technology: ['C#'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Students will learn to create dynamic websites.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'Focus on user experience and basic API usage.',
        technology: ['HTML', 'CSS', 'JavaScript'],
        completed: false // This course will be excluded
    }
];

// Function to filter courses
function filterCourses(filter) {
    const courseContainer = document.getElementById('courseContainer');
    const totalCreditsDiv = document.getElementById('totalCredits');
    courseContainer.innerHTML = ''; // Clear previous courses
    totalCreditsDiv.textContent = ''; // Clear previous total credits

    // Filter courses by subject and completion status
    const filteredCourses = courses.filter(course => 
        (filter === 'All' || course.subject === filter) && course.completed === true
    );

    // Calculate total credits
    const totalCredits = filteredCourses.reduce((sum, course) => sum + course.credits, 0);

    // Render filtered courses
    filteredCourses.forEach(course => {
        const courseCard = document.createElement('div');
        courseCard.className = 'course-card';
        courseCard.innerHTML = `
            <h2>${course.subject} ${course.number}</h2>
            <p><strong>Title:</strong> ${course.title}</p>
            <p><strong>Credits:</strong> ${course.credits}</p>
            <p><strong>Description:</strong> ${course.description}</p>
            <p><strong>Technology:</strong> ${course.technology.join(', ')}</p>
        `;
        courseContainer.appendChild(courseCard);
    });

    // Display total credits
    totalCreditsDiv.textContent = `Total Credits: ${totalCredits}`;
}

// Default view: Display all completed courses
filterCourses('All');
//   menu
function toggleMenu() {
    const nav = document.querySelector('nav');
    nav.classList.toggle('active');
  }
//   array for the course


  
  // year
  const year = document.querySelector("#currentYear");
  const today = new Date();
  year.innerHTML = `<span>${today.getFullYear()}</span>`;

  //last modified
  const date = document.querySelector("#lastModified");
  date.innerHTML = `<span>${document.lastModified}<span>`;