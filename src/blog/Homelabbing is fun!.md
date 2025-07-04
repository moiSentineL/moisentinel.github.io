---
aliases: 
tags:
  - post
  - technical
added: 2025-06-29
link: https://nibirsan.org/blog/p/homelabbing-is-fun
excerpt: Docker, tailscale and remote music production. Cool!
date: 2025-07-04T18:37:38+05:30
status: done
content-type: blog
---
I love learning new tools and experimenting with them like a madman. Recently I discovered docker and tailscale, and oh boy...

Sure enough, I found myself diving deeper into the homelabbing culture (thanks reddit and youtube). But thankfully I have not yet bought an SBC (but I am desperate to get one!)

## Docker and Docker-compose

I use Arch. Things get messy. You run into weird dependency errors, [AUR](https://aur.archlinux.org/) BS, and typical problems that you might experience with a rolling-release type Linux distro.

Then Docker came into my life. I had heard about it so much, but never bothered to try it out. What it essentially does is create isolated environments (called "containers") for you to run your software on. Without *any* interference.

![](https://www.youtube.com/watch?v=DQdB7wFEygo)

Docker and Docker-compose are basically the same thing, except that docker-compose allows you to manage your containers with a simple `yaml` file. It's quite handy if you want to get a lot of stuff running, like this:

{% lanimage "src/blog/attachments/docker-ps.png", "docker" %}

Just make a folder where you will store your `yaml` file and necessary configs, and run `sudo docker-compose up -d`. (Make sure to check tutorials before lol).

And vóila, I now have my own music server ([Navidrome](https://www.navidrome.org/)), [Jellyfin](https://jellyfin.org/) which I can access from anywhere. 

Wait, but how?

## Tailscale

[Tailscale](https://tailscale.com/) is (sort of) a VPN service that you can use to access your devices from anywhere.

So, what you can do is, keep your homelab at your home (duh!) and access it from that shitty bistro you visit every now and then. 

All you have to do is connect to your Tailnet (that's the name for your Tailscale network) via the VPN (available on almost all possible OS's).

They also have this thing called `MagicDNS`, which allows you to type in the *nickname* of the device to access it, and you don't even have to type the IP!

{% lanimage "src/blog/attachments/tailscale-magic-DNS.png", "magic DNS" %}

You can also `ssh` into any device like that!

Just do:

```bash
ssh nibir@absurd
```

or whatever the device name is. Super cool!

Also... I found a cool workflow to use Tailscale:

## Remote Music Production

My producer friend lives 60kms away from my home, and we needed to make the song we've been putting off for 1.5 years. And since I am the musician and have all the setup, I needed my friend to take control of my PC and DAW and help me record and mix stuff.

But how could he do it? We also needed crystal clear audio. Latency on his side didn't matter as long as the quality was nice; he didn't need to record anything.

So, we set up a tailnet of our own, connected our devices and used [Sunshine](https://app.lizardbyte.dev/Sunshine/?lng=en-US)+[Moonlight](https://moonlight-stream.org/) to control the PCs. These apps were actually made for playing games from other devices, but you could do more than that, right? Like, making music!

That is how I discovered Tailscale actually- we were struggling to get Sunshine+Moonlight working, there was some problem in my router settings that I couldn't figure it out. So I said, fuck it, let's try Tailscale.

And it worked perfectly. 

Sunshine+Moonlight was working great. There was very low latency, but of course you cannot expect a LAN-like 10ms from a relayed connection. Now, the next problem was my Linux system. **Sunshine couldn't pick up the audio.**

That's where [Sonobus](https://sonobus.net/) came in. 

It's an open-source software for transferring audio from one device to another, and it integrates very well with your DAW. Just what we needed. [You can even host your own server](https://www.sonobus.net/sonobus_userguide.html#Using-Your-Own-Connection-Server-with-the-Standalone-App), and since we were using Tailscale, we could access it without worry.

So, that's how my friend and I recorded one part of our song. [Listen here](https://pillowcase.su/f/4ee3a8c2b320120877e84e3c9324573c)!
A lot more to do, but we at least we got something done!

Amazing experience. Though I have had to do some tweaking here and there. These reddit posts helped me.

## Future plans?

I wanna do a lot more with docker and tailscale. 

- Host wallabag
- Buy an SBC
- Move Navidrome there
- and use Pi-Hole
- yada yada yada blah blah 
- and so on.

Aah I will burn some of my money now.

Please feel free to send me some [here](https://buymeacoffee.com/nibirsan). Or UPI: `nibir@fam`.

Gracias!