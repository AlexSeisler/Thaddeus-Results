function closePopup() {
    // Hide the popup and overlay
    document.querySelector('.popup1').style.display = 'none';
    document.querySelector('.overlay').style.display = 'none';

    // Set a timer to show the popup again after 20 seconds
    setTimeout(showPopup, 20000); // 20000 milliseconds = 20 seconds
}

function showPopup() {
    // Show the popup and overlay again
    document.querySelector('.popup1').style.display = 'block';
    document.querySelector('.overlay').style.display = 'block';
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