document.addEventListener('DOMContentLoaded', function() {
    // Typed.js initialization
    var typeData = new Typed(".role", {
        strings: [
            "Full Stack Developer",
            "Web Developer",
            "UI-UX Designer",
            "Backend Developer",
            "Coder",
        ],
        loop: true,
        typeSpeed: 100,
        backSpeed: 80,
        backDelay: 1000,
    });

    // Hire button event listener
    var hireBtn = document.getElementById("hireBtn");
    if (hireBtn) {
        hireBtn.addEventListener("click", function() {
            // Add your hire button logic here
            console.log("Hire button clicked!");
        });
    } else {
        console.error("Element with ID 'hireBtn' not found");
    }

    // Download button event listener
    function openGoogleDriveFolder(url) {
        var newWindow = window.open(url, '_blank');
        if (newWindow) {
            newWindow.focus();
        } else {
            alert('Please allow popups for this website');
        }
    }

    var downloadBtn = document.getElementById("btn");
    if (downloadBtn) {
        downloadBtn.addEventListener("click", function() {
            var folderUrl = 'https://drive.google.com/drive/folders/1HxbkqBNKoB2n4Ttf1785PCpjXElqbJus';
            openGoogleDriveFolder(folderUrl);
        }, false);
    } else {
        console.error("Element with ID 'btn' not found");
    }
});
