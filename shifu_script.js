// ===== MAIN HANDLER =====
function handleCalculate() {
    const dobValue = document.getElementById("dob").value;

    if (!dobValue) {
        alert("Please select your date of birth");
        return;
    }

    const birthDate = new Date(dobValue);
    const today = new Date();

    if (!isValidDate(birthDate, today)) return;

    const ageData = calculateAge(birthDate, today);
    displayResult(ageData);
}

// ===== VALIDATION =====
function isValidDate(birthDate, today) {
    if (birthDate > today) {
        alert("Future date is not allowed!");
        return false;
    }
    return true;
}

// ===== AGE CALCULATION =====
function calculateAge(birthDate, today) {
    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    if (days < 0) {
        months--;
        days += 30;
    }

    if (months < 0) {
        years--;
        months += 12;
    }

    return { years, months, days };
}

// ===== DISPLAY =====
function displayResult(age) {
    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML =
        `Age: ${age.years} Years, ${age.months} Months, ${age.days} Days`;
}

// ===== RESET =====
function resetForm() {
    document.getElementById("dob").value = "";
    document.getElementById("result").innerHTML = "";
}