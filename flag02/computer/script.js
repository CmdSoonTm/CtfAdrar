function updateDateTime() {
    var now = new Date();
    var datetime = document.getElementById('datetime');
    datetime.textContent = now.toLocaleDateString() + '   ' + now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);

