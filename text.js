var Text= Shape.extend({

	constructor: function(){
		this.base("Text");
	},

	draw: function(canvas) {
		var context = document.getElementById("canvas");
		canvas.strokeStyle = this.color;
		canvas.fillStyle = this.color;
		canvas.font = ((this.lineWidth)*5) +"px " + this.fontFamily;
		canvas.fillText(this.Text, this.pos.x, this.pos.y);
		canvas.strokeText(this.Text, this.pos.x, this.pos.y);
		canvas.measureText("Text");
		this.base(canvas);	
	},
		       
	drawing:function(canvas) {

	},

	added: function(canvas) {
		this.Text = prompt("Write your text here","some text");

		if (this.Text != null || this.Text != undefined) {
			document.getElementById("textButton").innerHTML = this.Text;
		}


	},
	

});

