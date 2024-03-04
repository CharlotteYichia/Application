document.addEventListener("DOMContentLoaded", function () {
  let sections = document.getElementsByTagName("section");
  for (let i = 0; i < sections.length; i++) {
    sections[i].style.display = "none";
  }
  document.getElementById("about").style.display = "block";
});

function toggleSection(sectionId) {
  let sections = document.getElementsByTagName("section");
  for (let i = 0; i < sections.length; i++) {
    if (sections[i].id === sectionId) {
      sections[i].style.display = "block";
    } else {
      sections[i].style.display = "none";
    }
  }
}
