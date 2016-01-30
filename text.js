var Text= Shape.extend({

	constructor: function(){
		this.base("Text");

		
		//textbox.style.left = this.mouse.x+ "px";
        //textbox.style.top =  (startY- (this.lineWidth/2)) + "px";
		//textbox.classList.add("active");
		//textbox.onkeydown = this.bind(this);
        /*textbox.oninput = function(){
        this.Text = textbox.value;
      }.bind(this);
      	textbox.focus();*/
		
	},

	draw: function(canvas) {
		var context = document.getElementById("canvas");

		canvas.strokeStyle = this.color;
		canvas.lineWidth = this.lineWidth;
	    canvas.lineWidth = this.lineWidth + "px " + this.font;
	    canvas.fillText(this.Text, this.pos.x, this.pos.y);
	    canvas.strokeText(this.Text, this.pos.x, this.pos.y);
	    canvas.measureText("text");
	    this.base(canvas);	
  },
		       
	drawing:function(canvas) {
	//canvas.lineWidth = 4;
    //canvas.font = this.lineWidth + "px " + this.font;
    //canvas.strokeText(this.text, this.startX, this.startY);

		},

	added: function(canvas) {
		//var textbox = document.getElementById("textInput");
		//textbox.classList.remove("active");

	},
	

});

