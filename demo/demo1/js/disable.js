document.addEventListener('contextmenu', event => event.preventDefault());

// Disable F12, Ctrl+Shift+I, and Ctrl+U
document.onkeydown = function (e) {
    // F12
    if (e.keyCode == 123) {
        return false;
    }
    // Ctrl+Shift+I
    if (e.ctrlKey && e.shiftKey && e.keyCode == 73) {
        return false;
    }
    // Ctrl+U
    if (e.ctrlKey && e.keyCode == 85) {
        return false;
    }
};

// Make the page visible after everything is loaded
window.onload = function () {
    document.documentElement.style.visibility = 'visible';
}