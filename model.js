// Implémenter ici les 4 classes du modèle.
function Drawing() {
    this.forms = [];
}

function Form(couleur, epaisseur) {
    this.couleur = couleur;
    this.epaisseur = epaisseur;
}

function Line(x, y, x_f, y_f) {
    Form.call(this);
    this.x = x;
    this.y = y;
    this.x_f = x_f;
    this.y_f = y_f;
}

function Rectangle(x_top_left, y_top_left, width, length, epaisseur, couleur) {
    Form.call(this, couleur, epaisseur);
    this.x_top_left = x_top_left;
    this.y_top_left = y_top_left;
    this.width = width;
    this.length = length;
}


// N'oubliez pas l'héritage !
Rectangle.prototype = new Form();
Line.prototype = new Form();