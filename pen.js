var Pen = Shape.extend({

	constructor: function(){
		this.base("Pen");
		canvas.lineWidth = this.lineWidth;
	    canvas.lineJoin = 'round';
	    canvas.lineCap = 'round';
	    canvas.strokeStyle = this.color;
	    var mouseX = this.pos.x;
		var mouseY = this.pos.y;
	    this.penPos = [];
	    this.penPos.push({x:mouseX, y:mouseY});



	},


	startDrawing: function(canvas) {
		

		

	},

	draw: function(canvas) {
	 var pos1 = this.penPos[0];
	var pt = {x:mouseX, y:mouseY};
    this.penPos.push(pt);
    
    canvas.beginPath();
    canvas.moveTo(pos1.x, pos1.y);
    for(var i = 1; i < this.penPos.length; i++){
      canvas.lineTo(this.penPos[i].x, this.penPos[i].y);
    }
    canvas.stroke();
    canvas.closePath();

        //mo
    },
                            
		      


    
	

	drawing:function(point) {
		

	},

	stopDrawing:function(point) {
		
	},

	added: function(canvas) {
		

},

});

