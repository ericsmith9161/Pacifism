

# Pacifism #


## Background ##

Geometry Wars started off as a mini game within an Xbox 360 game, Forza Motorsport. It became a cult classic and eventually had a standalone version with multiple sequels and numerous modes. As a high schooler I loved playing the pacifism mode - but sans Xbox I had to come up with my own solution to play it again.

The game takes place on a 2d grid with a player with diamond shaped foes following the player; if diamond and player collide the player loses. The player can move through randomly spawning gates to destroy any enemies within a certain radius (with each destroyed diamond helping to rack up a high score), and destroyed diamonds drop “multiplier shards” that the player can collect to increase their score more quickly.

Pacifism is strategic and addictive, and for those who like to watch numbers go up almost unparalleled. An aesthetic of restrained maximalism makes it uniquely pleasant to observe, and visual effects (see Bonus Features) continue to build upon that aesthetic.

## Functionality & MVP ##

With this Pacifism game, users will be able to:

- Start and restart the game
- Move around as a player
- Avoid diamonds that spawn at increasing rates as time goes on
- Move through gates to keep the diamonds at bay
- Increase their score and multiplier through destroying diamonds and collecting shards
		(both will be available on-screen)
- View their own high score and compare with those of others

Additionally, the page will include:
	
* Links to my personal pages
* A production README
* A dropdown/modal with how to play instructions

## Wireframe ##

![Image of Wireframe](https://i.ibb.co/Z1SWtS0/Screen-Shot-2020-06-21-at-1-26-23-PM.png)

## Architecture and Technologies ##

#### This project will use ####

* Vanilla `JavaScript` for game logic
* `HTML Canvas` for game rendering
* `HTML5` and `CSS` for page placement and styling
* `Webpack` to bundle js files
* `keymaster` for binding keys and player movement

#### In addition to the entry file, the application will have the following scripts ####

* `game.js`
	- will handle logic for creating and updating necessary Canvas elements
	- will keep track of boundaries and prevent objects from going out of bounds

* `game_view.js`
	- will render necessary game objects to the DOM
	- will hold key handler logic for movement
	- takes care of requesting animation frames

* `score.js`
	- will handle updating score and multipliers

* `util.js`
	- this is where utility functions will be stored, especially those dealing with vectors and inheritance

* `moving_object.js`
	- this will be the parent class for diamonds, gates and the player
	- it will store methods that handle movement, collision and rendering

* `diamond.js` (inherits from `moving_object`)
	- specific collision mechanics
	- specific movement mechanics

* `shard.js` 
	- specific collision mechanics, incrementing multiplier and disappearing

* `gate.js` (inherits from `moving_object`)
	- specific movement mechanics
	- specific collision mechanics including ‘blast radius’

* `player.js` (inherits from `moving_object`)
	- movement based on key presses
	- corresponding collision mechanics for diamonds, gates and shards

* `keymaster.js` will allow the player to move the ship

#### and the following assets (will not necessarily all be mp3 files) ####

* `collect.mp3` - for shards
* `collide.mp3` - for diamonds
* `explode.mp3` - for gates
* `bgm.mp3` - for background sounds

#### **bonus scripts** (if time) will include ####

* `gravity-grid.js`
* `fireworks.js` (inherits from moving_object?)
* `sounds.js`
* `high_score_histogram.js`

## Implementation Timeline ##

### Day 1: ###
* setup project skeleton, get webpack going, brush up on canvas and create player,
diamond, shard and gate assets
* make sure board is showing up on the screen
* moving object parent class
* implement player and player movement on board
* setup page using wireframe

### Day 2: ###
* diamonds and their movement
* collision logic for player with diamonds
* game start and restart
* gates and collision logic for gates 

### Day 3: ###
* shards
* scoring
* page styling and polishing

### Day 4: ###
* toggle-able audio
  - subdued enemy spawn audio
  - gate spawn audio
  - gate pass through sound
  - music
* “game-feel”, make sure game feels good to play and tweak mechanics
* final run-through of styling to ensure game is presentable

## Bonus Features ##

* Difficulty levels (to adjust initial spawn rate and allow players to get into the action more quickly)
* High score histogram using D3JS to compare scores to other players
* Geometry Wars has some really rad (and math intensive) visual effects, some I’d love to implement in the future include
  -  Fireworks when player goes through gate
  - The Gravity Grid! (this one is super cool but perhaps nightmarishly devious in its implementation with respect to computational complexity)