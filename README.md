<h1 align="center">General Mathematics</h1>

## Features 
- Tons of apps & games
- History hider (About:Blank Cloak)
- Sleek UI with good animations
- Tab cloaker
- Support page to help people
- A working emulator
- A chatroom
- And more!

## Suported Websites
- [Youtube](https://www.youtube.com)
- [CAPTCHA/hCAPTCHA](https://www.captcha.net)
- [Spotify](https://spotify.com)
- [Discord](https://discord.com)
- [Reddit](https://reddit.com)
- [GeForce NOW](https://play.geforcenow.com/) (Partially Supported)
- Any static website
- And more!

# Deploying and Setting up your own General Mathematics

## General Mathematics Quick Deploys

[![Deploy to Heroku](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/heroku.svg)](https://heroku.com/deploy/?template=https://github.com/GeneralMathematics/General-Mathematics-Beta)
[![Run on Replit](https://raw.githubusercontent.com/BinBashBanana/deploy-buttons/master/buttons/remade/replit.svg)](https://replit.com/github/GeneralMathematics/General-Mathematics-Beta)

## Basic Guide

```sh
$ git clone https://github.com/GeneralMathematics/General-Mathematics-Beta --recursive
$ cd General-Mathematics-Beta
$ npm install
$ npm start
```

## Replit Setup Guide

Click the Replit button and CHOOSE Node.JS as the language.
To setup on Replit, first click on the "Run on Replit" button. After loading into your repl, run the following commands:
```sh
$ npm install
$ chmod +x main.sh
$ ./main.sh
```
On Repl, make sure to run the `git submodule update --init` command in shell.

`http://localhost:8080/`

Change server address properties when desired. 

## Updating Bare
```
git submodule update --remote
```

However, this may override files in `static/` so be careful.

# General Math Documentation

## File Structure
```
Folders
static - Folder for files of General Math
node_modules - Files for bare-server-node
BlacklistServe - Used to block make General Math undetectable to automod

Static
css - Contains all CSS for the website and themes
gfiles - Contains all files for games and SWF games
img - For all images used within the website
intergrations - Contains all integrated features
nohist - Allows for people to use About:Blank for no history
scripts - Contains all Javascript files
uv - Contains all files for Ultraviolet Backend Script
```

## Credits

Ultraviolet https://github.com/titaniumnetwork-dev/Ultraviolet

Lightspeed Blocker https://github.com/NebulaServices/Nebula

Package-lock.json https://github.com/AstralService/Lucid/blob/main/package-lock.json

FoxMoss https://mediaology.com

Gfiles https://github.com/BinBashBanana/gfiles

Some More Gfiles https://github.com/caracal-js/gfiles

EmulatorJS https://github.com/ethanaobrien/emulatorjs

EaglerCraft https://github.com/LAX1DUDE/eaglercraft
