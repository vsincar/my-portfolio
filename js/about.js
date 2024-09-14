function calculateAge(birthdate) {
  const today = new Date();
  const birthDate = new Date(birthdate);
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

document.addEventListener("DOMContentLoaded", function () {
  const ageElement = document.getElementById("age");
  const birthdate = ageElement.getAttribute("data-birthdate");
  ageElement.textContent = calculateAge(birthdate);
});
