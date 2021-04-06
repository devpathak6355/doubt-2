class Ball {

    constructor(){
        var options={
            isStacic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body= Bodies.circle(100,470,20,options);
        World.add(world, this.body);
      }
      display(){
        circle(100,470,20); 
      }
} 