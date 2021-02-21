# streamwithfriends.online

## Inspiration
Teleparty (better known as Netflix Party) was a big inspiration. I was hoping to take that experience and make it available but with video chat. Now, of course, one can stream over Zoom and watch with friends but it is just not the same. The latency differences make it very difficult to seamlessly watch AND listen to the video. 

## What it does?
My project solves that problem. I directly bring in the data from the servers of the streaming service, and with the use of the timestamp features on YouTube (for now) I made the video such that it constantly communicates the timestamp between the viewers.

## How I built it?
✨ typescript magic ✨ and lots of coffee and constant brainracking.

## Challenges I ran into
Getting the ![socket.io](socket.io) parts to work and working with Rust without a bunch of prior knowledge was tough.
The ```npm run dev``` gave some problems at first but I sorted it out.

## Accomplishments that I'm proud of
Getting the project to work.

## What I learned?
Probably test the waters and have a team beforehand, working alone was hectic.
However, working alone was distraction-free and kinda fun with a lot of Eureka! moments :)

## What's next for streamwithfriends.online?
- Integrating other streaming services. 
- Find a way to probably emulate a device on the web browser.
- Try to find OAuth's for streaming services.
- Make it free for everyone to use
- Probably convert it into a desktop app using Electron if it becomes too bulky.

