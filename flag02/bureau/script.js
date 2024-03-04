function updateDateTime() {
    var now = new Date();
    var datetime = document.getElementById('datetime');
    datetime.textContent = now.toLocaleDateString() + '   ' + now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);

function transp(base64) {
    return atob(base64);
}

function checkPassword() {
    var storedPasswordBase64 = "YW1p";
    var storedPassword = transp(storedPasswordBase64);
    var enteredPassword = document.getElementById("password").value;
    if (enteredPassword === storedPassword) {
        window.location.href = "../computer/index.html";
    } else {
        $("<div title='Erreur'>Mot de passe erroné</div>").dialog({
            modal: true,
            buttons: {
                "Essayer à nouveau": function() {
                    $(this).dialog("close");
                }
            }
        });
    }
}

document.getElementById("password").addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        checkPassword();
    }
});

window.onload = function() {
    var img = document.getElementById('draggable');
    img.style.backgroundImage = 'url("images/Postit01.png")';
    var contextMenu = document.getElementById('contextMenu');
    var flip = document.getElementById('flip');

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

    flip.onclick = function() {
        if (img.style.backgroundImage.includes('Postit01.png')) {
            img.style.backgroundImage = 'url("images/Postit02.png")';
        } else {
            img.style.backgroundImage = 'url("images/Postit01.png")';
        }
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
};