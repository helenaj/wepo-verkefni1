var Line = Shape.extend({

	constructor: function() {
		this.base("Line");
	},

	draw: function(canvas) {
		canvas.strokeStyle = this.color;
		canvas.lineWidth = this.lineWidth;
		canvas.beginPath();
		canvas.moveTo(this.pos.x, this.pos.y); //byrjun á línu
		canvas.lineTo(this.size.x, this.size.y); //endir á línu
		canvas.stroke();
	},

	drawing:function(point) {
		
		this.size.x = point.x;// - this.pos.x;
		this.size.y = point.y;// - this.pos.y;
	
	},

	added: function(canvas) {
		if(this.size.x < 0) {
			this.pos.x -= this.size.x;
			this.size.x = Math.abs(this.size.x);
		}

		if(this.size.y < 0) {
			this.pos.y -= this.size.y;
			this.size.y = Math.abs(this.size.y);
		}
	},	

});
