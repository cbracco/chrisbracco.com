---
layout: post
title: Convert Screencasts into Animated GIFs on Mac OSX
teaser: How I used three small apps on Mac OSX to create shareable animated GIFs from screencasts.
date: "2013-02-15 10:26:27"
---

Every so often I’ll come across an elaborate [Stack Overflow](http://stackoverflow.com) answer with an animated GIF included, and I marvel at the lengths that some people will go help out a complete strangers.

But is it really that burdensome to create an animated GIF?

![typing arbitrary text into iAWriter](/assets/images/posts/gif-test.gif)

This morning I realized that with the help of a few simple apps on Mac OSX, I can turn a short screencast into an animated GIF pretty effortlessly.

[Animated GIFs](http://en.wikipedia.org/wiki/Graphics_Interchange_Format#Animated_GIF) are great for demonstrating UI actions within applications, like how to open a file in Microsoft Word. They are also great for visualizing UI actions like hover states, clicks, keystrokes, and others that can’t be portrayed very well with a single static image.

## Record a screencast with QuickTime

QuickTime has a simple screencast feature that you can use to record the actions on your desktop. Before recording a screencast, you should first disable OSX’s sub pixel antialiasing to avoid color artifacts.

To do this, open up your Terminal and run the following commands:

```shell
defaults -currentHost write -globalDomain AppleFontSmoothing -int 2
killall Finder
```

### Next...

1. Open up Quicktime and record your screencast (File --> New Screen Recording).
2. Click and drag to select a specific portion of your screen to record.
3. Click the "Start Recording" button.
4. Save as a `.mov` file.

After saving your recording, you should turn sub pixel antialiasing back on from the Terminal.

```shell
defaults -currentHost delete -globalDomain AppleFontSmoothing
killall Finder
```

## Convert screencast to a GIF using GIFBrewery

The simplest conversion tool I’ve found so far is GIFBrewery, a $4.99 download in the App Store. This app lets you easily convert your screencast into an animated GIF.

1. Download and open up [GIFBrewery](https://itunes.apple.com/us/app/gif-brewery/id435989461?mt=12) ($4.99)
2. Crop and resize the capture area as desired.
3. Use a low FPS (3-5 frames per second) to reduce file size.
4. Generate, preview, and save your new animated GIF.

If something doesn’t look right in preview mode, go back and tweak the settings. For the GIF in this post, I had to keep the frame rate at 10 for it to look decent.

## Compress the animated GIF with ImageOptim

Depending on the settings you used and how long the screencast is, your animated GIF could end up being pretty large and not render so nicely in browsers. Luckily, you can compress your GIF with a tool like ImageOptim, which works like a charm for me.

1. Download and open up [ImageOptim](http://imageoptim.com/) (it’s free).
2. Drag your animated GIF file into the app and it will automatically compress and re-save your file.

**Presto!** You now have a brand new animated GIF at your disposal. You can paste these into emails, GitHub issues, Stack Overflow answers, Reddit comments, or wherever else your heart desires.
