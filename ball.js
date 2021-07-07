class Ball
{
    constructor(x,y,r){
        var ball_features={
            isStatic:false
          }
       this.ball=Bodies.circle(x,y,r,ball_features)
  World.add(world,this.ball)
this.r=r
    }
    display(){
        ellipseMode(CENTER)
        ellipse(this.ball.position.x,this.ball.position.y,this.r)
    }
}