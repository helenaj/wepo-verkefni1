var Text= Shape.extend({

	constructor: function(mouse){
		this.base("text");

		var textbox = document.getElementById("canvas").getContext('2d');
		var text = textbox.measureText("foo");
		text.width;
		ctx.strokeText("Hello world", 10, 50);
		/*textbox.classList.add("active");
		textbox.style.left = this.mouse.x+ "px";
        textbox.style.top =  (startY- (this.lineWidth/2)) + "px";
		//textbox.classList.add("active");
		textbox.onkeydown = this.bind(this);
        textbox.oninput = function(){
        this.text = textbox.value;
      }.bind(this);
      	textbox.focus();
		*/
	},

	draw: function(canvas) {

    canvas.fillStyle = this.color;
    canvas.font = this.lineWidth + "px " + this.font;
    canvas.fillText(this.text, this.pos.x, this.pos.y);
    canvas.strokeText(this.text, this.pos.x, this.pos.y);

		
  },

     
      
      // stroke color
      
     // canvas.fillText(this.pos.x, this.pos.y);
		       
	drawing:function(canvas) {
	canvas.lineWidth = 4;
    canvas.font = this.lineW + "px " + this.font;
    //canvas.strokeText(this.text, this.startX, this.startY);

		},

	added: function(canvas) {
		var textbox = document.getElementById("textInput");
		textbox.classList.remove("active");

	},
	

});

