const btn = document.getElementById("btn");
const birthdayInput = document.getElementById("birthday");
const currentInput = document.getElementById("current");
const result = document.getElementById("result");
const dobDisplay = document.getElementById("dobDisplay");

let interval;

btn.addEventListener("click", () => {
    const birthValue = birthdayInput.value;
    const currentValue = currentInput.value;

    if (!birthValue || !currentValue) {
        alert("Please enter both dates");
        return;
    }

    const birthDate = new Date(birthValue);

    dobDisplay.innerHTML = `<strong>Your DOB:</strong> ${birthDate.toDateString()}`;

    clearInterval(interval);

    interval = setInterval(() => {
        // Add LIVE current time to selected date
        const baseDate = new Date(currentInput.value);
        const now = new Date();

        baseDate.setHours(now.getHours());
        baseDate.setMinutes(now.getMinutes());
        baseDate.setSeconds(now.getSeconds());

        calculateAge(birthDate, baseDate);
    }, 1000);
});

function calculateAge(birthDate, now) {

    let years = now.getFullYear() - birthDate.getFullYear();
    let months = now.getMonth() - birthDate.getMonth();
    let days = now.getDate() - birthDate.getDate();
    let hours = now.getHours() - birthDate.getHours();
    let minutes = now.getMinutes() - birthDate.getMinutes();
    let seconds = now.getSeconds() - birthDate.getSeconds();

    // Borrow logic
    if (seconds < 0) {
        seconds += 60;
        minutes--;
    }

    if (minutes < 0) {
        minutes += 60;
        hours--;
    }

    if (hours < 0) {
        hours += 24;
        days--;
    }

    if (days < 0) {
        const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
        days += prevMonthDays;
        months--;
    }

    if (months < 0) {
        months += 12;
        years--;
    }

    result.innerHTML = `
        <strong>Your Age:</strong><br>
        ${years} years, ${months} months, ${days} days<br>
        ${hours} hours, ${minutes} minutes, ${seconds} seconds
    `;
}