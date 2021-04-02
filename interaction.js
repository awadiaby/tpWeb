// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
    // Définir ici les attributs de la 'classe'
    this.x_i = 0;
    this.y_i = 0;
    this.x_f = 0;
    this.y_f = 0;
    this.isPressed = false;

    // Developper les 3 fonctions gérant les événements

    this.press = function (evt) {
        console.log("press");
        this.isPressed = true;
        var res = getMousePosition(canvas, evt);
        this.x_i = res.x;
        this.y_i = res.y;

        interactor.onInteractionStart(this);
        interactor.onInteractionUpdate(this);
        interactor.onInteractionEnd(this);
    };

    this.move = function (evt) {
        console.log("move");
        if (this.isPressed) {
            console.log("release");
            var res = getMousePosition(canvas, evt);
            this.x_f = res.x;
            this.y_f = res.y;
            this.isPressed = false;

            interactor.onInteractionStart(this);
            interactor.onInteractionUpdate(this);
            interactor.onInteractionEnd(this);
        }
    };

    this.release = function (evt) {
        if (this.isPressed) {
            console.log("release");
            var res = getMousePosition(canvas, evt);
            this.x_f = res.x;
            this.y_f = res.y;
            this.isPressed = false;

            interactor.onInteractionStart(this);
            interactor.onInteractionUpdate(this);
            interactor.onInteractionEnd(this);
        }
    };

    const boundPress = this.press.bind(this);
    const boundMove = this.move.bind(this);
    const boundRelease = this.release.bind(this);

    // Associer les fonctions précédentes aux évènements du canvas.

    canvas.addEventListener('mousedown', boundPress, false);
    canvas.addEventListener('mousemove', boundMove, false);
    canvas.addEventListener('mouseup', boundRelease, false);
}

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
};



