var editingMode = {rect: 0, line: 1};

function Pencil(ctx, drawing, canvas) {
    this.currEditingMode = editingMode.line;
    this.currLineWidth = 5;
    this.currColour = '#000000';
    this.currentShape = 0;
    this.x_i = 0;
    this.y_i = 0;
    // Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

    this.currLineWidth = canvas.width;
    // this.currEditingMode = canvas.;
    var dnd = new DnD(canvas, this);

    document.getElementById("colour").addEventListener(("change"), (event) => {
        this.currColour = event.target.value;

        console.log(this.currColour);
    });

    document.getElementById("spinnerWidth").addEventListener(("change"), (event) => {
        this.currLineWidth = event.target.value;
    });


    document.getElementById("butLine").addEventListener(("change"), (event) => {
        if (event.target.checked) {
            this.currEditingMode = editingMode.line
        }
    });

    document.getElementById("butRect").addEventListener(("change"), (event) => {
        if (event.target.checked) {
            this.currEditingMode = editingMode.rect
        }
    });

    // Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
    this.onInteractionStart = (dnd) => {
        console.log(this.currColour)
        if (this.currEditingMode === editingMode.line) {
            this.x_i = dnd.x_i;
            this.y_i = dnd.y_i;
            //this.currentShape = new Line(dnd.x_i, dnd.y_i, dnd.x_f, dnd.y_f, this.currLineWidth, this.currColour);
        } else {
            this.currentShape = new Rectangle(dnd.x_i, dnd.y_i, 10, 10, this.currLineWidth, this.currColour)
        }

        //this.currentShape.paint(ctx);
    };

    this.onInteractionUpdate = (dnd) => {
        if (this.currEditingMode === editingMode.line) {
            this.currentShape = new Line(this.x_i, this.y_i, dnd.x_f, dnd.y_f, this.currLineWidth, this.currColour);
        } else {
            this.currentShape = new Rectangle(dnd.x_f, dnd.y_f, dnd.x_f + 10, dnd.x_f + 10, this.currLineWidth, this.currColour)
        }

        this.currentShape.paint(ctx);
    };

    this.onInteractionEnd = (dnd) => {
        console.log(this.x_i)
        console.log(this.y_i)
        console.log(dnd.x_f)
        console.log(dnd.y_f)
        if (this.currEditingMode === editingMode.line) {
            this.currentShape = new Line(this.x_i, this.y_i, dnd.x_f, dnd.y_f, this.currLineWidth, this.currColour);
        } else {
            this.currentShape = new Rectangle(dnd.x_f, dnd.y_f, dnd.x_f + 10, dnd.y_f + 10, this.currLineWidth, this.currColour)
        }

        this.currentShape.paint(ctx);
        drawing.forms.push(this.currentShape);
    }
}


