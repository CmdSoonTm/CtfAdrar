function getUserNameCookie() {
    let cookieArr = document.cookie.split(";");
    for(let i = 0; i < cookieArr.length; i++) {
        let cookiePair = cookieArr[i].split("=");
        if('userName' == cookiePair[0].trim()) {
            return decodeURIComponent(cookiePair[1]);
        }
    }
    return null;
}

function checkCookieAndRedirect(cookieName) {
    var cookieArr = document.cookie.split(";");

    for(var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split("=");

        if(cookieName == cookiePair[0].trim()) {
            return;
        }
    }

    alert("tu dois d'abord trouver le Flag CosmoC@t pour continuer ... Let's go");
    window.location.href = '../flag02/index.html';
}

function printLines(lines) {
    let lineIndex = 0;
    let charIndex = 0;
    let delay = 26;
    let lineDelay = 1000;
    
    let terminalElement = document.getElementById('terminal');
    let footer = document.createElement('footer');
    document.body.appendChild(footer);

    checkCookieAndRedirect("CosmoC@t");

    function printNextCharacter() {
        if(lineIndex < lines.length) {
            if(charIndex < lines[lineIndex].length) {
                terminalElement.innerHTML += lines[lineIndex][charIndex];
                charIndex++;
                setTimeout(printNextCharacter, delay);
            } else {
                terminalElement.innerHTML += '<br>';
                charIndex = 0;
                lineIndex++;
                setTimeout(printNextCharacter, lineDelay);
            }
            terminalElement.scrollIntoView({ behavior: 'smooth', block: 'end' });
        } else {
            let button = document.createElement('button');
            button.innerText = "Télécharger les fichiers";
            button.className = 'centered-button';
            button.onclick = function() {
                window.open('files/last_chance.zip', '_blank');
            };
            footer.appendChild(button);
            footer.style.display = 'flex';
        }
    }

    printNextCharacter();
}

let userName = getUserNameCookie('userName');

let lines = [
    '...Allo !?!....',
    '...',
    'Quelqu\'un m\'entend ?',
    '...',
    'Je suis coincé dans l\'espace depuis des jours...',
    'J\'ai suivi le signal du satellite Coms@t et je suis tombé sur un vaisseau abandonné...',
    '...',
    'Je suis à court de carburant et je ne sais pas comment rentrer...',
    '...',
    'Il faut absolument trouver un moyen de réinitialiser le système du Coms@t...',
    'Si vous m\'entendez, il y a un terminal sur l\'interface du vaisseau...',
    'Mais il a grillé quand je l\'ai utilisé...',
    '...',
    'Je vous envoie les logs et les fichiers que j\'ai pu récupérer de la dernière session...',
    'En espérant que vous pourrez m\'aider...',
    '...',
    'Essayez de vous connecter au terminal à distance pour voir si vous pouvez réparer le système..',
    '..et me sortir de là...',
    '...',
    'Il me reste quelques canettes de RedRocket mais je ne sais pas combien de temps je vais tenir...',
    'On se recontacte dès que possible...',
    '...',
];

printLines(lines);

