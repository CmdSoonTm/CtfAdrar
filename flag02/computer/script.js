function updateDateTime() {
    var now = new Date();
    now.setFullYear(now.getFullYear() + 100);
    var datetime = document.getElementById('datetime');
    datetime.textContent = now.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' }) + '   ' + now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);

window.onload = function() {
    var img = document.getElementById('draggable');
    var contextMenu = document.getElementById('contextMenu');
    var open = document.getElementById('open');
    
    img.onmousedown = function(event) {
        img.style.position = 'absolute';
        img.style.zIndex = 1000;
        function moveAt(pageX, pageY) {
            img.style.left = pageX - img.offsetWidth / 2 + 'px';
            img.style.top = pageY - img.offsetHeight / 2 + 'px';
        }
        moveAt(event.pageX, event.pageY);
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }
        document.addEventListener('mousemove', onMouseMove);
        img.onmouseup = function() {
            document.removeEventListener('mousemove', onMouseMove);
            img.onmouseup = null;
        };
    };

    img.oncontextmenu = function(event) {
        event.preventDefault();
        contextMenu.style.top = `${event.clientY}px`;
        contextMenu.style.left = `${event.clientX}px`;
        contextMenu.style.display = 'block';
    };

    open.onclick = function() {
        window.open('files/CosmoCat.txt', '_blank');
        contextMenu.style.display = 'none';
    };

    document.onclick = function(event) {
        if (event.button !== 2) {
            contextMenu.style.display = 'none';
        }
    };

    img.ondragstart = function() {
        return false;
    };

    document.getElementById('button1').onclick = function() {
        window.open('http://mails.nasa.futur', '_blank');
    };

    document.getElementById('button2').onclick = function() {
        window.open('https://www.google.com', '_blank');
    };
};

