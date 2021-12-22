var Bee,BeeIMG
var Beetle, kBeetle, BeetleIMG, kBeetleIMG
var ladyBug, ladyBugIMG
var stickBug, stickBugIMG
var mountain, mountainImg
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var bugsGroup,bug
var score

function preload() {
    BeeImg = loadImage("BEE.png");   
    BeetleIMG = loadImage("BEEtle.png");
    kBeetleIMG = loadImage("kBEEtle.png");
    ladyBugIMG = loadImage("ladyBug.png");
    stickBugIMG = loadImage("stickBug.png");
    pogMusic = loadSound("stickBuggedLol.mp3");
    mountainImg = loadImage("Mountain.png");
}


function setup() {
    createCanvas(1000, 615);
    
    pogMusic.loop();
    mountain = createSprite(500, 300);
    mountain.addImage("Mountain", mountainImg);
    mountain.scale = 4
    
    BEE = createSprite(500, 307);
    BEE.addImage("BEE", BeeImg);
    BEE.scale = 0.2
    bugsGroup = createGroup();
 

}

function draw() {
         
    text("Score: " + score, 800, 50);
    if (gameState === PLAY) {

        score = score + Math.round(getFrameRate() / 60);
    
        if (keyDown("left_arrow")) {
            BEE.x = BEE.x - 3
        }

        if (keyDown("right_arrow")) {
            BEE.x = BEE.x + 3;
        }

        if (keyDown("up_arrow")) {
            BEE.y = BEE.y - 3;
        }

        if (keyDown("down_arrow")) {
            BEE.y = BEE.y + 3;
        }
        spawnBugs();

        if (BEE.isTouching(bug)) {
            gameState = END;
        }
        else if (gameState === END) {
            bugsGroup.setVelocityXEach(0);
            bugsGroup.setLifetimeEach(-1)
        }
    }
           
   drawSprites();
}

 



    function spawnBugs()
    {
        if (frameCount % 100 === 0) {
            var bug = createSprite(900, (random(0,615)), 10, 40);
            
            bug.velocityX = -10
      
            var rand = Math.round(random(1, 4));
            switch (rand) {
                case 1: bug.addImage(BeetleIMG);
                    break;
                case 2: bug.addImage(kBeetleIMG);
                    break;
                case 3: bug.addImage(ladyBugIMG);
                    break;
                case 4: bug.addImage(stickBugIMG);
                    break;
                default: break;
            }
      
            bug.scale = 0.5;
            bug.lifetime = 100;
      
            bugsGroup.add(bug)
        }
    }

