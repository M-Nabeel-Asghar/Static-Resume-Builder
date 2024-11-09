const form = document.getElementById("resumeForm");

document.getElementById("generateResume").addEventListener("click", function() {
  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    address: formData.get("address"),
    email: formData.get("email"),
    number: formData.get("number"),
    education: formData.get("education"),
    workExperience: formData.get("workExperience").split(",").map(skill => skill.trim()),
    skills: formData.get("skills").split(",").map(skill => skill.trim()),
  };

  // Save the data to localStorage
  localStorage.setItem("resumeData", JSON.stringify(data));

  // Redirect to the resume display page

    window.location.href = "resume.html"; 


});
