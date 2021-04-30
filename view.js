// Implémenter ici les fonctions paint à ajouter dans chacune des classes du modèle.

Rectangle.prototype.paint = function (ctx) {
    var form = new Form(this.couleur, this.epaisseur);
    form.paint(ctx);
    ctx.rect(
        this.x_top_left,
        this.y_top_left,
        this.width,
        this.length
    );
    ctx.stroke();
};

Line.prototype.paint = function (ctx) {
    var form = new Form(this.couleur, this.epaisseur);
    form.paint(ctx);
    ctx.beginPath();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x_f, this.y_f); //COmment avoir ici les coordonnees finales?
    ctx.stroke();
};

Form.prototype.paint = function (ctx) {
    ctx.strokeStyle = this.couleur;
    ctx.lineWidth = this.epaisseur;
    ctx.stroke();
};

Drawing.prototype.paint = function (ctx) {
    //console.log(this.getForms());
    //ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};