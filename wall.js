class Wall
{
    constructor(x,y,w,h){
        var wall_features={
            isStatic:true
          }
       this.wall=Bodies.rectangle(x,y,w,h,wall_features)
  World.add(world,this.wall)
this.w=w
this.h=h
    }
    display(){
        rectMode(CENTER)
        rect(this.wall.position.x,this.wall.position.y,this.w,this.h)
    }
}