---
aliases: 
tags:
  - post
  - technical
added: 2026-03-17
link: https://nibirsan.org/blog/p/why-i-encode-my-music-into-opus
excerpt: My music "hoarding" practices
date: 2026-03-17T10:01:36+05:30
status: done
content-type: blog
---
I hoard music. I have a 117gig library full of lossless `flac`s, something that you don't see an average high-schooler/mathematician doing. Although it's comparatively smaller than what the expert hoarders have- petabytes. Mine is only a fraction.

But why even that? Several reasons:

1. I like to have control over the media I consume; I hoard other types of media too. No Netflix, no Spotify, and no YouTube unless necessary: I like my files local.
2. I am an avid audiophile. Though my rig is quite modest (yet), I like to listen to a higher quality audio than average folk. Though nothing wrong with listening to okay-ish quality here and there; I AM NOT A PEDANT!

Examples of exceptions: I do stream music when my friend pesters me to listen to _that one song_ or when I need to revisit my 80s mix/radio. I use Metrolist (FOSS) on my phone for that.

Okay, 117gigs. That's a lot. A lot for an Android phone, or a minimalist ThinkPad with 512gigs of storage. But again, _I need my music handy_. I listen to stuff a lot. 

I have two options: serve it via Navidrome/other music server, or take it local. I tried the former, and well.... storage is cheaper than bandwidth + power consumption. I can't afford to have server running, [with internet and Tailscale configs and so on](/blog/p/homelabbing-is-fun/).

**Thus, a truce- convert all the `flac`s into `opus`.** And take it local.

If you look at the specs of the `opus` codec, you'll see some impressive stuff. I don't want to get into technicals here, but TL;DR- `opus` "conserves" ~95% of the good stuff, and that too with a considerable amount of compression.

Think about this: all my `flac`s (a mix of 24 and 16 bit, about 1700 songs), of 117gigs converted to 128k `opus` is just _14gigs_!! **That's ~12% of the original!** And that too without losing too much of the "quality."

Surely, I can take those 14gigs anywhere. On my laptop, on my phone, no worries. Now the question is: how much time does it take my computer to do all of this?

Well, in a modern computer, it takes very less. `ffmpeg` can encode `flac`s into `opus` in a fairly high speed. And most conveniently, you can use the power of scripting to do it for you! 

You can have your main `flac`s in a harddrive, convert them to `opus` into your laptop, then you can `rsync`/syncthing it to your mobile device. Simple workflow!

[This is the script I use](https://raw.githubusercontent.com/moiSentineL/dotfiles/1f3874957b9fd4bb29ff6bb2d5f7e8803678e8fe/scripts/opus.sh) for encoding my whole library, which checks for new files and encodes those only, for which the core command is:

```shell
ffmpeg -v warning -n -i "$file" -c:a libopus -b:a 128k "$target_path" < /dev/null
```

I find this pretty cool. No more fussing. Just me and my music. Simple *nix tools such as `ffmpeg` can do wonders. 

So this way, I can just put stuff on my phone and laptop and listen away. I use `cmus` on my ThinkPad and Poweramp on my Android. 

Ending with some music recs: 

- _TooL_ - 10,000 Days
- _GoGo Penguin_ - Fanfares
- _Ruby Rushton_ - Trudi's Songbook Vol. 1 & 2
- _Yussef Kamaal_ - Black Focus
- _Bongripper_ - Hippie Killer
- _Deftones_ - Around the Fur
- _Porcupine Tree_ - In Absentia
- _Vildhjarta_ - Måsstaden
- _Russian Circles_ - Gnosis

Cheers!
