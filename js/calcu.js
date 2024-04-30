document.addEventListener("DOMContentLoaded", function() {
    // Add click event listener to the button
    document.getElementById("recalculateButton").addEventListener("click", function() {
        console.log("Button clicked!");
        // Redirect to "age.html" when the button is clicked
        window.location.href = "age.html";
    });

    // Your existing code for date calculations and display goes here
    const namee = localStorage.getItem("name");
    const datavString = localStorage.getItem("dataof");
    const datav = new Date(datavString); 

    if (Object.prototype.toString.call(datav) === '[object Date]') {
        let birthMonth = datav.getMonth();
        let birthDay = datav.getDate();
        let currentDate = new Date();
        let currentMonth = currentDate.getMonth();
        let currentDay = currentDate.getDate();
        let year = currentDate.getFullYear();
        let birthYear = datav.getFullYear();
        let dif = year - birthYear;
        let monthdif = currentMonth - birthMonth;
        let daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
        let daydif;

        if (birthDay <= currentDay) {
            daydif = currentDay - birthDay;
        } else {
            daydif = 30 - (birthDay - currentDay);
        }
        
        let timeDifference = currentDate.getTime() - datav.getTime();
        let dayDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        let weekDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24 * 7));
        let monthsDiff = currentDate.getMonth() - datav.getMonth();

        if (monthsDiff < 0) {
            monthsDiff += 12;
            dif -= 1;
        } else if (monthsDiff === 0) {
            if (currentDate > birthDay) {
                monthsDiff += 12;
                dif -= 1;
            }
        }
        let currentHour = currentDate.getHours();

        currentHour=24-currentHour

        let day = dayDifference;
        let hour = day * 24;
        let mint = hour * 60;
        let sec = mint * 60;
        let weak = weekDifference;
        let months = dif * 12 + monthsDiff;

        let currentYear = currentDate.getFullYear();
        let nextBirthday = new Date(currentYear, birthMonth, birthDay);
        
        if (nextBirthday < currentDate) {
            nextBirthday.setFullYear(currentYear + 1);
        }

        let timeDiff = nextBirthday.getTime() - currentDate.getTime();
        let daysRemaining = Math.ceil(timeDiff / (1000 * 3600 * 24)) - 1;
        let daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        let dayOfWeekNumber = currentDate.getDay();
        let dayOfWeekString = daysOfWeek[(dayOfWeekNumber + daysRemaining + 1) % 7];

        document.getElementById("headyear").textContent = dif;
        document.getElementById("headmonth").textContent = monthsDiff;
        document.getElementById("headday").textContent = daydif;
        document.getElementById("yearsa").textContent = dif;
        document.getElementById("month").textContent = months;
        document.getElementById("weak").textContent = weak;
        document.getElementById("day").textContent = day;
        document.getElementById("hour").textContent = hour;
        document.getElementById("mint").textContent = mint;
        document.getElementById("sec").textContent = sec;
        document.getElementById("naming").textContent = namee;
        document.getElementById("daydifbirth").textContent = daysRemaining;
        document.getElementById("hourdifbirth").textContent = currentHour;
        document.getElementById("datastring").textContent = dayOfWeekString;
    } else {
        console.error("Invalid date format");
    }
});
