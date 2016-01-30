var Text= Shape.extend({

	constructor: function(mouse){
		this.base("Text");

		var textbox = document.getElementById("textInput");
		textbox.classList.add("active");
		//textbox.style.left = this.mouse.x+ "px";
        //textbox.style.top =  (startY- (this.lineWidth/2)) + "px";
		textbox.classList.add("active");
		//textbox.onkeydown = this.bind(this);
        textbox.oninput = function(){
        this.Text = textbox.value;
      }.bind(this);
      	textbox.focus();
		
	},

	draw: function(canvas) {

	    canvas.fillStyle = this.color;
	    canvas.font = this.lineWidth + "px " + this.font;
	    canvas.fillText(this.Text, this.pos.x, this.pos.y);
	    canvas.strokeText(this.Text, this.pos.x, this.pos.y);

	    //var text = textbutton.measureText("text");
	    //this.Text.width;

		
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

