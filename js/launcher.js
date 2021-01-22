class Launcher{
    constructor(bodyA,pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness : 0.004,
            length : 10
        }
        this.pointB = pointB;
        this.slingshot = Matter.Constraint.create(options);
        World.add(world,this.slingshot);
    }
    display(){
        if(this.slingshot.bodyA){
            var posA = this.slingshot.bodyA.position;
            var posB = this.pointB;
            line(posA.x,posA.y,posB.x,posB.y);
        }
    }
    fly(){
        this.slingshot.bodyA = null;
    }
    attach(body){
        this.slingshot.bodyA = body;
    }    
}