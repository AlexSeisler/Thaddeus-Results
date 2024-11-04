

document.addEventListener('DOMContentLoaded', function() {

    // Function to show the popup
    function showPopup() 
    {
        // Show the close button after time
        setTimeout(() => {
            document.querySelector('.close-btn').style.display = 'block';
        }, 10000); 

        setTimeout(() => {
            document.getElementById('microsoft-form').style.height = "480px";
            document.getElementById('microsoft-form').style.width = "640px";
            
        }, 3000); 
    }

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