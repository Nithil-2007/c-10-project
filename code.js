var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var start = createSprite(8,8,10,50)
    start.shapeColor="yellow"
var cup = createSprite(390,375,10,50)
    cup.shapeColor="blue"     
var sofia = createSprite(29,27,15,15)
    sofia.shapeColor= 'red'
var wall1 = createSprite(83,24,10,125)
   wall1.shapeColor="black"
var wall2 = createSprite(16,65,60,10)
   wall2.shapeColor="black"
 var wall3 = createSprite(50,137,120,10)
     wall3.shapeColor="black"

var wall4 = createSprite(157,110,10,100)
    wall4.shapeColor="black"

var wall5 = createSprite(124,26,10,50)
    wall5.shapeColor='black'
   
var wall6 = createSprite(150,200,175,10)
    wall6.shapeColor="black"
    
var wall7 = createSprite(83,248,175,10)    
   wall7.shapeColor="black"

var wall8 = createSprite(232,250,10,95)
   wall8.shapeColor='black'

var wall9 =createSprite(166,293,135,10)
   wall9.shapeColor='black'
var wall10 = createSprite(44,302,10,100)
    wall10.shapeColor="black"
var wall11 = createSprite(74,347,50,10)    
    wall11.shapeColor="black"
var wall12 = createSprite(200,347,105,10)      
    wall12.shapeColor="black"
var wall13 = createSprite(200,372,10,50)     
    wall13.shapeColor="black"
var wall14 = createSprite(275,347,45,10)    
    wall14.shapeColor="black"
var wall15 = createSprite(298,304,10,90) 
    wall15.shapeColor="black"
    
var wall16 = createSprite(374,262,47,10)    
    wall16.shapeColor="black"
 var wall17 = createSprite(326,308,48,10)   
    wall17.shapeColor="black"
    
var wall18 = createSprite(373,345,49,10)    
    wall18.shapeColor="black"
var wall19 = createSprite(298,373,10,49)    
    wall19.shapeColor="black" 
    
var wall20 = createSprite(202,47,10,90)    
   wall20.shapeColor="black"
var wall21 = createSprite(200,168,10,58)
    wall21.shapeColor="black"
var wall21 = createSprite(348,197,99,10) 
    wall21.shapeColor="black"
var wall22 = createSprite(300,146,95,10)
   wall22.shapeColor="black"

var wall23 = createSprite(349,97,110,10)
   wall23.shapeColor="black"

var wall24 = createSprite(314,121,10,43)
   wall24.shapeColor="black"

var wall25 = createSprite(272,97,45,10)
    wall25.shapeColor="black"
var wall26 = createSprite(248,29,10,50)
    wall26.shapeColor="black"
var wall27 = createSprite(300,68,10,50)
    wall27.shapeColor="black"
  
var wall28 = createSprite(349,24,10,50)
    wall28.shapeColor="black"
   

function draw() {
  
  background("pink");
  createEdgeSprites()
  drawSprites();
  
  
  sofia.bounceOff(edges)
  sofia.bounceOff(wall1);
  sofia.bounceOff(wall2)
  sofia.bounceOff(wall3)
  sofia.bounceOff(wall4)
  sofia.bounceOff(wall5)
  sofia.bounceOff(wall6)
  sofia.bounceOff(wall7)
  sofia.bounceOff(wall8)
  sofia.bounceOff(wall9)
  sofia.bounceOff(wall10)
  sofia.bounceOff(wall11)
  sofia.bounceOff(wall12)
  sofia.bounceOff(wall13)
  sofia.bounceOff(wall14)
  sofia.bounceOff(wall15)
  sofia.bounceOff(wall16)
  sofia.bounceOff(wall17)
  sofia.bounceOff(wall18)
  sofia.bounceOff(wall19)
  sofia.bounceOff(wall20)
  sofia.bounceOff(wall21)
  sofia.bounceOff(wall22)
  sofia.bounceOff(wall23)
  sofia.bounceOff(wall24)
  sofia.bounceOff(wall24)
  sofia.bounceOff(wall25)
  sofia.bounceOff(wall26)
  sofia.bounceOff(wall27)

  
  
  if (keyDown("space")) {
    sofia.velocityX=0
    sofia.velocityY=0
    
  }
  if (keyDown("up")) {
    sofia.y=sofia.y-5
  }
  
  if (keyDown("down")) {
   sofia.y=sofia.y+5
  }
  if (keyDown("left")) {
    sofia.x=sofia.x-5
  }
  
  if (keyDown(("right"))) {
    sofia.x=sofia.x+5
  }
  
}



function resetsofia()
{
  
}

function checkwin()
{
  if ( sofia.isTouching(cup))  
{
  textSize(40);
  stroke("red");
  text("You Win", 200,200); 

}
if (sofia.isTouching(cup)) {
  background("white")
}



}











































































































// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
