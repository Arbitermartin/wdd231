// Sample JSON data (use your JSON as the source)
const data = {
    members: [
      {
        id: 1,
        company: "SoftNet Technologies",
        logo: "../images/softnet.jpg",
        phone: "+255659070100",
        address: "Head quater, Plot 144, Migombani st",
        website: "https://softnet.co.tz/",
        membership: "gold"
      },
      {
        id: 2,
        company: "Tembosoft Limited",
        logo: "../images/tembosoft.png",
        phone: "+255 987 654 321",
        address: "2nd Floor, Mikumi House, 368 Msasani Road, Oysterbay, 14111 Dar es Salaam, Tanzania",
        website: "https://tembosoft.co.tz/",
        membership: "silver"
      },
      {
        id: 3,
        company: "Powersoft Communications Limited",
        logo: "../images/powersoft.png",
        phone: "+255 746 805 383",
        address: "789 Bronze Lane, Iringa",
        website: "https://pcl.co.tz",
        membership: "bronze"
      },
      {
        id: 4,
        company: "SAFCO",
        logo: "../images/safco.png",
        phone: "+255 747 762 244",
        address: "Dodoma City Jimboni, Roma Complex Dodoma, 2796",
        website: "https://safco.co.tz/",
        membership: "gold"
      },
      {
        id: 5,
        "company": "Oasis Technologies TZ",
        "logo": "../images/oasis.png",
        "phone": "+255622929972",
        "address": "Mbagala, Dar es salaam Migombani, Unguja, Zanzibar",
        "website": "https://oasistech.co.tz/",
        "membership": "silver"
      }
    ]
  };
  
  // Filter gold and silver members
  const eligibleMembers = data.members.filter(
    member => member.membership === "gold" || member.membership === "silver"
  );
  
  // Randomly select 2–3 members
  function getRandomMembers(members) {
    const shuffled = members.sort(() => Math.random() - 0.5);
    return shuffled.slice(0, Math.floor(Math.random() * 2) + 2);
  }
  
  // Render the spotlight cards
  const selectedMembers = getRandomMembers(eligibleMembers);
  const container = document.getElementById("member-spotlights");
  
  selectedMembers.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("member-card", member.membership);
  
    card.innerHTML = `
      <img src="../chamber/images/${member.logo}" alt="${member.company} Logo" class="member-logo">
      <h3>${member.company}</h3>
      <p>${member.address}</p>
      <p>Phone: ${member.phone}</p>
      <a href="${member.website}" target="_blank" class="website-link">Visit Website</a>
      <span class="membership-level">${member.membership.toUpperCase()} Member</span>
    `;
  
    container.appendChild(card);
  });