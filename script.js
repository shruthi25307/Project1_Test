function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const department = document.getElementById("department").value;
    const course = document.getElementById("course").value;
    const genderMale = document.getElementById("male").checked;
    const genderFemale = document.getElementById("female").checked;
    function validateEmail(email) {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    }
    function validateMobile(mobile) {
        const mobilePattern = /^\d{10}$/;
        return mobilePattern.test(mobile);
    }
    if (name === "" || email === "" || mobile === "" || department === "" || course === "") {
        alert("Please fill in all required fields.");
        return false;
    }

    if (!genderMale && !genderFemale) {
        alert("Please select your gender.");
        return false;
    }
    if (!validateEmail(email)) {
        alert("Please enter a valid email address.");
        return false;
    }
    if (!validateMobile(mobile)) {
        alert("Please enter a valid mobile number.");
        return false;
    }
    if (department === "") {
        alert("Please select a department.");
        return false;
    }
    if (course === "") {
        alert("Please select a course.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
