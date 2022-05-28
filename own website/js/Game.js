class Game {
    constructor() {
      this.input = createInput("").attribute("placeholder", "Enter a value Between1 and 10");
      this.playButton = createButton("Play");
    
      this.greeting = createElement("h2");
      this.n=null;
    }
  
    setElementsPosition() 
    {
     
      this.input.position(width / 2 - 110, height / 2 - 80);
      this.playButton.position(width / 2 - 90, height / 2 - 20);
      this.greeting.position(width / 2 - 300, height / 2 - 100);
    }
  
    setElementsStyle() {
   
      this.input.class("customInput");
      this.playButton.class("customButton");
      this.greeting.class("greeting");
    }
  
    hide() {
      this.greeting.hide();
      this.playButton.hide();
      this.input.hide();
    }
  
    handleMousePressed() {
      this.playButton.mousePressed(() => {
        this.input.hide();
        this.playButton.hide();
        
        this.n=this.input.value();
        this.greeting.html(this.n);

        var r= random(1, 10)
        if(this.n===r)
        {
          this.greeting.html("Wow!! you have guessed it right");
        }
        else{
          this.greeting.html("Better luck next time!!");
        }
      });
    }
  
    display() {
      this.setElementsPosition();
      this.setElementsStyle();
      this.handleMousePressed();
    }
  }
  