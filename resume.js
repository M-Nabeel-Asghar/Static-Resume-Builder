
const resumeDisplay = document.getElementById("resumeDisplay");

// Get the data from localStorage
const data = JSON.parse(localStorage.getItem("resumeData"));

if (data) {
  resumeDisplay.innerHTML = `
    <section>
    <h1>Personal Information</h1>
    <h2>${data.name}</h2>
    <p>Address # ${data.address}</p>
    <p>Email # ${data.email}</p>
    <p>Number # ${data.number}</p>
    </section>
    <section>
    <h3>Education</h3>
    <p>${data.education}</p>
    </section>
    <section>
    <h3>Work Experience</h3>
    <ul>${data.workExperience.map(exp => `<li>${exp}</li>`).join("")}</ul>
    </section>
    <section>
    <h3>Skills</h3>
    <ul>${data.skills.map(skill => `<li>${skill}</li>`).join("")}</ul>
    </section>
    <button type="button" id="edit" class=" editable">New Resume</button>
    

  `; 
}
document.getElementById('edit').addEventListener('click',()=>{
  window.location.href = 'index.html'
})




