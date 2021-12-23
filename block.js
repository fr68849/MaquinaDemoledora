class Block{
    constructor(x, y, width, height) {
        var options = {
          restitution:0.8,
          friction:1,
          density:0.03
                     
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.smokeImage = loadImage("polvo1.png");
        World.add(world, this.body);

       
        
      }
      display(){
        var angle = this.body.angle;
        var pos= this.body.position;

    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        stroke("black");
        strokeWeight(6);
        fill("red");
        rect(0,0,this.width, this.height)
        //imageMode(CENTER);
        //image(this.smokeImage, 0, 0, this.width, this.height);
        pop();

        }
       
        
        }


      






