
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColour = '#000000';
	this.currentShape = 0;

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	this.currLineWidth = canvas.width;
	// this.currEditingMode = canvas.;
	var dnd = new DnD(canvas, this);

	document.getElementById("colour").addEventListener(("change"), (event) => {
		console.log(event);
		this.currColour = event.target.value;
	});

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	this.onInteractionStart = (dnd) => {
		if (this.currEditingMode === editingMode.line){
			this.currentShape = new Line(dnd.x_i, dnd.y_i, this.currLineWidth, this.currColour);
		}
		else {
			this.currentShape = new Rectangle(dnd.x_i, dnd.y_i, 50, 100,this.currLineWidth, this.currColour)
		}

		this.currentShape.paint(ctx);
	};

	this.onInteractionUpdate = (dnd) => {
		// a faire
	};

	this.onInteractionEnd = (dnd) => {
		if (this.currEditingMode === editingMode.line){
			this.currentShape = new Line(dnd.x_f, dnd.y_f);
		}
		else {
			this.currentShape = new Rectangle(dnd.x_f, dnd.y_f, 50, 100,2, this.currColour)
		}

		this.currentShape.paint(ctx);
	}
}


