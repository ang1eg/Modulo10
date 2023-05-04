'use strict';

let deferredInstallPrommt = null;
const installButton = document.getElementById('butInstall');
installButton.addEventListener('click', installPWA);

window.addEventListener('beforeinstallprompt', saveBeforeInstallPromptEvent);

//salvar el evento de instalar

function saveBeforeInstallPromptEvent(evt) {
    deferredInstallPrommt = evt;
    installButton.removeAttribute('hidden');
}

//preguntar al usuario si quiere instalar
function installPWA(evt){
    deferredInstallPrommt.prompt();
    evt.srcElement.setAttribute('hidden',true);
    deferredInstallPrommt.userChoice.then((choice)=>{
        if(choice.outcome === "accepted") {
             console.log("aceptado")
        }
        else {
            console.log("no aceptado")
        }
        deferredInstallPrommt=null;
    })

}

window.addEventListener('appinstalled', logAppInstalled);

function logAppInstalled(evt){
    console.log("Juego instalado");
}