function createResume() {
  const fullName = document.getElementById("fullName").value;
  const address = document.getElementById("fullAddress").value;
  const phone = document.getElementById("telePhone").value;
  const email = document.getElementById("email").value;
  const website = document.getElementById("website").value;
  const summary = document.getElementById("personalInfo").value;
  const skills = document.getElementById("careerSkills").value;
  const education = document.getElementById("educationDeets").value;
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;
  const experience = document.getElementById("employment").value;

  const resumeHTML = `
    <div class="resume-container">
      <div class="resume-header">
        <h2>${fullName}</h2>
        <p class="contact-info">${address} | ${phone} | ${email} | ${website}</p>
      </div>

      <div class="section">
        <h3>Professional Summary</h3>
        <p>${summary}</p>
      </div>

      <div class="section">
        <h3>Skills</h3>
        <p>${skills}</p>
      </div>

      <div class="section">
        <h3>Education</h3>
        <p>${education}</p>
      </div>

      <div class="section">
        <h3>Work Experience</h3>
        <p><strong>${startDate} – ${endDate}</strong></p>
        <p>${experience}</p>
      </div>

      <button class="download-btn" onclick="window.print()">Download PDF</button>
    </div>
  `;

  const resumeWindow = window.open("", "_blank", "width=850,height=900");
  resumeWindow.document.write(`
    <html>
      <head>
        <title>My Resume</title>
        <link rel="stylesheet" href="style.css">
      </head>
      <body>${resumeHTML}</body>
    </html>
  `);
  resumeWindow.document.close();
}