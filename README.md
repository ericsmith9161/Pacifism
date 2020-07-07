

# Pacifism #


## Background ##

Geometry Wars started off as a mini game within an Xbox 360 game, Forza Motorsport. It became a cult classic and eventually had a standalone version with multiple sequels and numerous modes. As a high schooler I loved playing the pacifism mode - but sans Xbox I had to come up with my own solution to play it again.

The game takes place on a 2d grid with a player with diamond shaped foes following the player; if diamond and player collide the player loses. The player can move through randomly spawning gates to destroy any enemies within a certain radius (with each destroyed diamond helping to rack up a high score), and destroyed diamonds drop “multiplier shards” that the player can collect to increase their score more quickly.

Pacifism is strategic and addictive, and for those who like to watch numbers go up almost unparalleled. An aesthetic of restrained maximalism makes it uniquely pleasant to observe, and visual effects (see Bonus Features) continue to build upon that aesthetic.

## Functionality ##

With this Pacifism game, users can:

- Start and restart the game
- Move around as a player
- Avoid diamonds that spawn at increasing rates as time goes on
- Move through gates to keep the diamonds at bay
- Increase their score and multiplier through destroying diamonds and collecting shards
		(both will be available on-screen)
- View their own high score and compare with those of others

Additionally, the page includes
	
* Links to my personal pages
* How to play instructions

## Gameplay Example ##

![Gameplay GIF](https://media.giphy.com/media/H1BFimsEnitzRLLhP4/giphy.gif)

## Architecture and Technologies ##

#### This project uses ####

* Vanilla `JavaScript` for game logic
* `HTML Canvas` for game rendering
* `HTML5` and `CSS` for page placement and styling
* `Webpack` to bundle js files
* `Mongoose` and `MongoDB` as well as `Express` for a light backend to keep track of global high scores

#### In addition to the entry file, the application has the following scripts ####

* `game.js`
	- handles logic for creating and updating necessary Canvas elements along with corresponding audio
	- keeps track of frames and changes over time
	- keeps track of boundaries and prevents objects from going out of bounds

* `game_view.js`
	- renders necessary game objects to the DOM
	- responsible for starting, restarting, and game overs
	- holds key handler logic for movement
	- allows for toggleable audio
	- takes care of requesting animation frames

* `score.js`
	- handles updating score and multipliers

* `util.js`
	- this is where utility functions will be stored, especially those dealing with vectors
	- holds helper functions for high scores and high score updating
	- collision helper functions are also kept here

* `diamond.js`, `shard.js`, `gate.js`, `player.js`
	- specific movement mechanics, rendering and collision information

* `explosion.js` 
	- specific rendering information

* `sound.js`
	- responsible for sound objects, allows for simple audio manipulation

* `page.js`
	- responsible for modal setup (global score-board and about)


#### and the following assets (will not necessarily all be mp3 files) ####

* `collect.mp3` - for shards
* `collide.mp3` - for diamonds
* `explode.mp3` - for gates
* `bgm.mp3` - for background music, (The Ephemeral Bluebell by Bibio)

## Enjoy! ##

# [Pacifism](https://pacifism.herokuapp.com "Pacifism") #

