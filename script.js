

document.addEventListener('DOMContentLoaded', function() {

    // Function to show the popup
    function showPopup() 
    {
        // Show the close button after 10 seconds
        setTimeout(() => {
            document.querySelector('.close-btn').style.display = 'block';
        }, 1000); // 10000 ms = 10 seconds

        // Show the form after 30 seconds
        setTimeout(() => {
            document.getElementById('microsoft-form').style.display = 'block';
            
        }, 15000); // 30000 ms = 30 seconds
    }

        // Function to close the popup
    
    showPopup();

});
function closePopup() 
{
    document.querySelector('.popup1').style.display = 'none';
}

function initiateCall() {
    if (/Mobi|Android/i.test(navigator.userAgent)) {
        // Mobile device, use the tel link
        window.location.href = "tel:+4847694650";
    } else {
        // Desktop device, redirect to desktop app or call app URL
        window.location.href = "https://teams.microsoft.com/l/meetup-join/273183261025";
    }
}