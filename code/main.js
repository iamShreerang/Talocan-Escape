import kaboom from "kaboom"
kaboom({
  font:"sink",
})

loadSprite("intro", "sprites/intro.png");
loadSprite("Blocks", "sprites/Blocks.png");
loadSprite("Hero", "sprites/Hero.png");
loadSprite("Plants", "sprites/Plants.png");
loadSprite("crystals", "sprites/crystals.png");
loadSprite("kingdom", "sprites/kingdom.jpg");
loadSprite("eels", "sprites/eels.png");
loadSprite("jellyfish", "sprites/jellyfish.png");
loadSprite("laser", "sprites/laser.png");
loadSprite("machine part1", "sprites/machine part1.png");
loadSprite("machine part2", "sprites/machine part2.png");
loadSprite("machine part3", "sprites/machine part3.png");
loadSprite("machine part4", "sprites/machine part4.png");
loadSprite("machine part5", "sprites/machine part5.png");
loadSprite("portals", "sprites/portals.png");
loadSprite("pufferfish", "sprites/pufferfish.png");
loadSprite("ammo", "sprites/ammo.png");
loadSprite("swordfish", "sprites/swordfish.png");
loadSprite("pillar", "sprites/pillar.png");
loadSprite("laser up", "sprites/laser up.png");
loadSprite("Energy bar", "sprites/Energy bar.png");
loadSprite("Slide1", "sprites/Slide1.PNG");
loadSprite("Slide2", "sprites/Slide2.PNG");
loadSprite("outro1", "sprites/outro1.png");
loadSprite("outro2", "sprites/outro2.png");
loadSprite("spaceship", "sprites/spaceship.png");
loadSound("blaster", "sounds/blaster.mp3");
loadSound("death game", "sounds/death game.mp3");
loadSound("game music", "sounds/game music.mp3");
loadSound("health 10", "sounds/health 10.mp3");
loadSound("health 20", "sounds/health 20.mp3");
loadSound("item pickup", "sounds/item pickup.mp3");
loadSound("level complete", "sounds/level complete.mp3");

let introText;
const GSPEED = 5;
const PSPEED = 300;
const CSPEED = 1;
const JSPEED = 5;
const LSPEED = 620;
let LUSPEED = 300;
const SSPEED = 12;
const ESPEED = 100;
const LEVEL_DOWN = 150;
let ECOUNT = 30;
let CESPEED = ESPEED;
let OXYGEN = 100;
let OxygenText;
let count = 0;
let ItemText;
let backgroundMusic;
let bg = false

const map = [
  //Level 1
  [
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                     ',
    '                                                                                                                                      ',  
    '                _                                                                                       /                             ',
    '                                                                                                                                     ',
    '                                                                                                                                      ',
    '                                                                                                                                            ~ ',
    '                                                                                                                                      ',
    '                                                                                                                                     ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '^^^^^^^^^^^^^ @ ^^^^^^^^^^^^^ @ ^^^^^^^^^^^^^^^ @ ^^^^^^^^^^^^  @  ^^^^^^^^^^^^^^^ @ ^^^^^^^^^^^^^ @ ^^^^^^^^^^^^^^^ @ ^^^^^^^^^^ @ ^^^^^^^^',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '===========================================================================================================================================================================================================================================',
  ],
  //Level 2
  [
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',  
    '                                                                                                                                      ',
    '                                                                                                                           ~          ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '===========================================================================================================================================================================================================================================',
  ],
  //Level 3
  [
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                                                                                                                       ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',  
    '                                                                                                                                      ',
    '                                                                                                                           ~          ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                               %                                                                          #                           ',
    '                                                                                                                    <                 ',
    '      $                                                                                                                               ',
    '                                                                                                                                      ',
    '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
    '                                                                                                                                     ',
    '                                                                                                                                      ',
    '===========================================================================================================================================================================================================================================',
  ],
  //Level 4
  [
    '                                                                                                                                      ',
    '-                                                        >',
    '         +   +   +   +   +   +   +   +   +   +              ',
    '                                                                                                                                      ',
    '         +   +   +   +   +   +   +   +   +   +              ',
    '                                                                                                                                      ',
    '         +   +   +   +   +   +   +   +   +   +              ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',  
    '                                                                                                                                      ',
    '                                                                                                                           ~          ',
    '               *                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                     ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
            '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '===========================================================================================================================================================================================================================================',
  ],
  //Level 5
  [
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',  
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '                                                                                                                              !       ',
    '                                                                                                                                      ',
    '                                                                                                                                     ',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^',
    '                                                                                                                                      ',
    '                                                                                                                                      ',
    '===========================================================================================================================================================================================================================================',
  ],
]
const levelCfg = {
  width : 20,
  height : 20,
  '=' : () => [
    sprite('Blocks'),
    scale(0.2),
    solid(),
    area(),
  ],
  '@' : () => [
    sprite('crystals'),
    scale(0.15),
    area(),
    'crystals',
  ],
  '^' : () => [
    sprite("Plants"),
    scale(0.06),
  ],
  '~' : () => [
    sprite('portals'),
    area(),
    scale(0.3),
    "portals"
  ],
  'p' : () => [
    sprite('Hero'),
    scale(0.1),
    area(),
    body(GSPEED),
  ],
  '_' : () => [
    sprite('machine part1'),
    area(),
    scale(0.1),
    "machine part1",
  ],
  '/' : () => [
    sprite('machine part2'),
    area(),
    scale(0.2),
    "machine part2",
  ],
  '#' : () => [
    sprite('machine part3'),
    area(),
    scale(0.2),
    "machine part3",
  ],
  '$' : () => [
    sprite("ammo"),
    area(),
    scale(0.2),
    "ammo",
  ],
  '%' : () => [
    sprite("machine part4"),
    area(),
    scale(0.2),
    "machine part4",
  ],
  '*' : () => [
    sprite("machine part5"),
    area(),
    scale(0.2),
    "machine part5",
  ],
  '!' : () => [
    sprite("spaceship"),
    area(),
    scale(0.5),
    "spaceship",
  ],
  '+' : () => [
    sprite("eels"),
    area(),
    scale(0.2),
    "eels",
  ],
  '-' : () => [
    sprite("pillar"),
    area(),
    scale(1.5),
    "pillar left",
  ],
  '>' : () => [
    sprite("pillar"),
    area(),
    scale(1.5),
    solid(),
    "pillar right",
  ],
  '<' : () => [
    sprite("Energy bar"),
    area(),
    scale(0.2),
    "Energy bar"
  ]
}

scene("start",() => {
  add([
    sprite("intro",{width:width(),height:height()})
  ])
  add([
    text("Press Enter Key to Start"),
    scale(3),
    pos(width()/2-210,height()/2),
    color(255,0,300),
  ])
  onKeyRelease("enter",() => {
    go("story1")
  })
});

go("start");

scene("story1",() => {
  add([
    sprite("Slide1",{width:width(),height:height()})
  ])
  onKeyRelease("enter",() => {
    go("story2")
  })
})

scene("story2",() => {
  add([
    sprite("Slide2",{width:width(),height:height()})
  ])
  onKeyRelease("enter",() => {
    go("game")
  })
})

scene("credit1",() => {
  add([
    sprite("outro1",{width:width(),height:height()}),
  ])
  onKeyRelease("enter",() => {
    go("credit2")
  })
})

scene("credit2",() => {
  add([
    sprite("outro2",{width:width(),height:height()})
  ])
  onKeyRelease("enter",() => {
    go("start")
  })
})

const playBg = () => {
  if(!bg){
    backgroundMusic = play("game music",{loop : true})
    backgroundMusic.volume(1)
    bg=true;
  }
}

scene("game",(levelNumber = 0) => {
  layers([
    "bg",
    "game",
    "ui",
  ],"game")
  playBg()
  add([
    sprite("kingdom",{width:width(),height:height()}),
    fixed(),
  ])
  const level = addLevel(map[levelNumber],levelCfg);
  const player = level.spawn("p",0,10)
  const displayOxygen = () => {
    destroy(OxygenText)
    if(OXYGEN>20)
    {
      OxygenText = add([
        text("02 LEVEL:" + OXYGEN),
        scale(3),
        pos(vec2(1150, 5)),
        color(255, 255, 255),
        layer("ui"),
        fixed(),
      ])
    }
    else if(OXYGEN>10 && OXYGEN<=20)
    {
      backgroundMusic.volume(0)
      play("health 20",{volume:0.7})
      backgroundMusic.volume(1)
      OxygenText = add([
        text("02 LEVEL:" + OXYGEN),
        scale(3),
        pos(vec2(1150, 5)),
        color(255, 255, 0),
        layer("ui"),
        fixed(),
      ])
    }
    else if(OXYGEN>=0&&OXYGEN<=10)
    {
      backgroundMusic.volume(0)
      play("health 10",{volume:0.7})
      backgroundMusic.volume(1)
      OxygenText = add([
        text("02 LEVEL:" + OXYGEN),
        scale(3),
        pos(vec2(1150, 5)),
        color(255, 0, 0),
        layer("ui"),
        fixed(),
      ])
    }
    if(OXYGEN==0)
    {
      backgroundMusic.volume(0)
      play("death game",{volume:0.7})
      backgroundMusic.volume(1)
      destroy(OxygenText)
      OxygenText = add([
        text("GAME OVER"),
        scale(3),
        pos(vec2(1150, 5)),
        color(255, 0, 0),
        layer("ui"),
        fixed(),
      ])
      destroy(player)
      addKaboom(player.pos)
    }
  }
  add([
    text("Level:" + (levelNumber + 1), { size: 24 }),
    pos(vec2(0, 5)),
    color(255, 255, 255),
    layer('ui'),
    fixed(),
  ]);
  const displayItems = () => {
    destroy(ItemText)
    ItemText = add([
      text("ITEM TAKEN:" + count + "/5"),
      scale(3),
      pos(vec2(1150/2,5)),
      color(255,255,255),
      layer('ui'),
      fixed(),
    ])
  }
  onKeyDown("left",() => {
    player.flipX(true)
    if(toScreen(player.pos).x > 20){
      player.move(-PSPEED,0)
    }
  })
  onKeyDown("right",() => {
    player.flipX(false)
    player.move(PSPEED,0)
  })
  onKeyDown("up",() => {
    if(player.grounded()){
      player.jump()
    }
  })
  player.onUpdate(() => {
    var currCam = camPos();
    if (currCam.x < player.pos.x) {
      camPos(player.pos.x+CSPEED, currCam.y);
    }
  });
  player.onCollide("crystals",() => {
    destroy(player)
    addKaboom(player.pos)
  })
  player.onCollide("machine part1",(machinepart1) => {
    backgroundMusic.volume(0)
    play("item pickup",{volume:0.7})
    backgroundMusic.volume(1)
    destroy(machinepart1)
    count+=1
    displayItems()
  })
  player.onCollide("machine part2",(machinepart2) => {
    backgroundMusic.volume(0)
    play("item pickup",{volume:0.7})
    backgroundMusic.volume(1)
    destroy(machinepart2)
    count+=1
    displayItems()
  })
  player.onCollide("machine part3",(machinepart3) => {
    backgroundMusic.volume(0)
    play("item pickup",{volume:0.7})
    backgroundMusic.volume(1)
    destroy(machinepart3)
    count+=1
    displayItems()
  })
  player.onCollide("machine part4",(machinepart4) => {
    backgroundMusic.volume(0)
    play("item pickup",{volume:0.7})
    backgroundMusic.volume(1)
    destroy(machinepart4)
    count+=1
    displayItems()
  })
  player.onCollide("machine part5",(machinepart5) => {
    backgroundMusic.volume(0)
    play("item pickup",{volume:0.7})
    backgroundMusic.volume(1)
    destroy(machinepart5)
    count+=1
    displayItems()
  })
  player.onCollide("ammo",(ammo) => {
    backgroundMusic.volume(0)
    play("item pickup",{volume:0.7})
    backgroundMusic.volume(1)
    destroy(ammo)
  })
  player.onCollide("Energy bar",(eb) => {
    backgroundMusic.volume(0)
    play("item pickup",{volume:0.7})
    backgroundMusic.volume(1)
    destroy(eb)
    OXYGEN = OXYGEN + 10
    if(OXYGEN>100)
    {
      OXYGEN=100
    }
    displayOxygen()
  })
  if(levelNumber==1)
  {
    loop(1,() => {
      for(let i = 0; i<6; i++){
        let x = rand(0,width()+1000)
        let y = 0
        let j = add([
          sprite("jellyfish"),
          pos(x,y),
          area(),
          scale(0.27),
          "jellyfish",
        ])
        j.onUpdate(() => {
          j.moveTo(j.pos.x, j.pos.y+JSPEED)
        })
      }
    })
    player.onCollide("jellyfish",() => {
      OXYGEN=OXYGEN-5
      displayOxygen()
    })
  }
  if(levelNumber==2)
  {
    loop(2,() => {
      for(let i = 0;i<4;i++){
        let x = width()+1500
        let y = rand(0,height()-50)
        let s = add([
          sprite("swordfish"),
          pos(x,y),
          area(),
          scale(0.5),
          "swordfish",
        ])
        s.onUpdate(() => {
          s.flipX(true)
          s.moveTo(s.pos.x-SSPEED,s.pos.y)
        })
      }
    })
    player.onCollide("swordfish",() => {
      OXYGEN=OXYGEN-5
      displayOxygen()
    })
    onKeyPress("space",() => {
      backgroundMusic.volume(0)
      play("blaster",{volume:0.7})
      backgroundMusic.volume(1)
      const l = add([
        sprite("laser"),
        pos(player.pos.x,player.pos.y+35),
        area(),
        scale(0.1),
        move(0,LSPEED),
        "laser"
      ])
      l.onCollide("swordfish",(swordfish) => {
        destroy(swordfish)
        destroy(l)
      })
    })
  }
  if(levelNumber==3)
  {
    action('eels',(e) => {
      e.move(CESPEED,0)
    })
    onCollide("eels","pillar left",() => {
      CESPEED = ESPEED
      every('eels',(obj) => {
        obj.move(0,LEVEL_DOWN)
        obj.move(CESPEED,0)
      })
    })
    onCollide("eels","pillar right",() => {
      CESPEED = -ESPEED
      every('eels',(eels) => {
        eels.move(0,LEVEL_DOWN)
        eels.move(CESPEED,0)
      })
    })
    player.onCollide("eels",() => {
      destroy(player)
    })
    onKeyPress("space",() => {
      backgroundMusic.volume(0)
      play("blaster",{volume:0.7})
      backgroundMusic.volume(1)
      const laser = add([
        sprite("laser up"),
        pos(player.pos),
        area(),
        scale(0.2),
        "laser up",
      ])
      action("laser up",(lu) => {
        lu.move(0,-LUSPEED)
      })
      onCollide("laser up","eels",(lu,eels) => {
        destroy(lu)
        destroy(eels)
        ECOUNT=ECOUNT-1
        if(ECOUNT==0)
        {
          player.onCollide("pillar right",(pr) => {
            destroy(pr)
          })
        }
      })
    })
    player.onCollide("eels",(eels) => {
      backgroundMusic.volume(0)
      play("death game",{volume:0.7})
      backgroundMusic.volume(1)
      destroy(player)
    })
  }
  player.onCollide("portals",() => {
    destroy(player)
    backgroundMusic.volume(0)
    play("level complete",{volume:0.7})
    backgroundMusic.volume(1)
    wait(1, () => {
      let nextLevel = levelNumber + 1;
      go("game", nextLevel);
    })
  });
  player.onCollide("spaceship",() => {
    go("credit1")
  })
  displayOxygen()
  displayItems()
})
