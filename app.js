function App(canvasSelector) {
	var self = this;
	self.getEventPoint = function(e) {
		return new Point(e.pageX - self.canvasOffset.x,e.pageY - self.canvasOffset.y);
	}

	self.drawingStart = function(e) {	
		var startPos = self.getEventPoint(e);
		var shape = self.shapeFactory();
		shape.pos = startPos;
		shape.color = self.color;
		shape.lineWidth = self.lineWidth;
		shape.startDrawing(startPos,self.canvasContext);
		startPos.log('drawing start');

	
		self.saveActions = function(e) {
             var imgData = document.getElementById("canvas").toDataURL("image/png");
             var win = window.open(imgData, '_blank');
  				win.focus();
        }

         
		var drawing = function(e) {
			var pos = self.getEventPoint(e);
			
			shape.drawing(pos,self.canvasContext);

			self.redraw();
			shape.draw(self.canvasContext);
		}

		
		var drawingStop = function(e) {
			var pos = self.getEventPoint(e);

			shape.stopDrawing(pos,self.canvasContext);

			pos.log('drawing stop');

			self.shapes.push(shape);
			self.notSelected.push(shape);
			shape.added(self.canvasContext);

			// Remove drawing and drawingStop functions from the mouse events
			self.canvas.off({
				mousemove:drawing,
				mouseup:drawingStop
			});

			self.redraw();
		}

		// Add drawing and drawingStop functions to the mousemove and mouseup events
		self.canvas.on({
			mousemove:drawing,
			mouseup:drawingStop,
		});	

	}
	

	self.mousedown = function(e) {
		if(self.shapeFactory != null) {
			self.drawingStart(e);
		} else {
		}

		self.redraw();
	}

	self.redraw = function() {
		self.canvasContext.clearRect(0, 0, self.canvasContext.canvas.width, self.canvasContext.canvas.height);
		for(var i = 0; i < self.shapes.length; i++) {
			self.shapes[i].draw(self.canvasContext);
		}
	}

	self.clear = function() {
		self.shapes = [];
		self.redraw();
	}

	self.undo = function() {

		self.deletedItems.push(self.shapes.pop());
		self.redraw();
	}

	self.redo = function() {
		self.shapes.push(self.deletedItems.pop());
		self.redraw();
	}

	self.setColor = function(color) {
		self.color = color;
	}

	self.setLineWidth = function(lineWidth) {
		self.lineWidth = lineWidth;
	}

	self.setFont = function(font) {
		self.fontFamily = font;
	}

	self.init = function() {
		// Initialize App	
		self.canvas = $(canvasSelector);
		self.canvasOffset = new Point(self.canvas.offset().left,self.canvas.offset().top);
		self.canvas.on({
			mousedown:self.mousedown
		});
		self.shapeFactory = null;
		self.canvasContext = canvas.getContext("2d");
		self.shapes = new Array();
		self.deletedItems = new Array();
		self.notSelected = new Array();
		
		// Set defaults
		self.color = '#ff0000';	
		self.lineWidth = 1;
		self.shapeFactory = function() {
			return new Pen(); }

		
	}
	
	self.init();
}



var app = null;
$(function() {
	// Wire up events
	app = new App('#canvas');

	$('#rectanglebutton').click(function(){app.shapeFactory = function() {
		return new Rectangle();
	};});

	$('#circlebutton').click(function(){app.shapeFactory = function() {
		return new Circle();
	};});

	$('#linebutton').click(function(){app.shapeFactory = function() {
		return new Line();
	};});

	$('#penbutton').click(function(){app.shapeFactory = function() {
		return new Pen();
	};});

	$('#clearbutton').click(function(){app.clear()});
	$('#savebutton').click(function(){app.saveActions()});
	$('#undobutton').click(function(){app.undo()});
	$('#redobutton').click(function(){app.redo()});
	$('#selectbutton').click(function(){app.select()});
	$('#color').change(function(){app.setColor($(this).val())});
	$('#lineWidth').change(function(){app.setLineWidth($(this).val())});
	$('#font').change(function(){app.setFont($(this).val())});
	
});
