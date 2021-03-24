const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine ;
var world ;

var ground;
function setup (){
createCanvas(3000,1000);

engine = Engine.create();
world = engine.world;

}

function draw (){
background("yellow");

Engine.update(engine);

ground = new Ground(1500,950,3000,20);
}