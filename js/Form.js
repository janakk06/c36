class Form {
  constructor() {
    this.input = createInput('Name');
    this.title = createElement('h2')
    this.button = createButton('Play');
    this.greeting = createElement('h3');
  }


  display(){
    //var title = createElement('h2')
   this.title.html("Car Racing Game");
    this.title.position(130, 0);
    
    //var input = createInput("Name");
    //var button = createButton('Play');
    
    this.input.position(130, 160);
    this.button.position(250, 200);

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      var name = this.input.value();
      
      playerCount+=1;
      player.index = playerCount;
      player.update()
      player.updateCount(playerCount);
    //  var greeting = createElement('h3');
    this.greeting.html("Hello " + player.Name )
    this.greeting.position(130, 160)
    });

  }
}
