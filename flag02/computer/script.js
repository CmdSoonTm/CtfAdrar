function updateDateTime() {
    var now = new Date();
    now.setFullYear(now.getFullYear() + 100);
    var datetime = document.getElementById('datetime');
    datetime.textContent = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) + '   ' + now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);

