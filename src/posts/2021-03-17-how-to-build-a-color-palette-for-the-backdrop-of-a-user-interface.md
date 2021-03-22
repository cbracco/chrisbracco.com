---
layout: post
title: How to build a color palette for the backdrop of a user interface
teaser: It’s tempting to combine a few flat grayscale shades together and call it a day. But it’s way more fun to create your own. It’s not that hard, and can add a touch of character to your UI.
tags:
    [
        'Design',
        'Tutorials',
    ]
---

User interfaces serve a wide variety of purposes, and are built to facilitate many different mediums. Some exist to delight, while others aim to increase productivity and efficiency.

The “backdrop” of a user interface is where some of your most important color decisions will be made. The colors for your UI backdrop have to be neutral enough to stay out of the way of your content and UI components, but if too dull it can make people feel bored and uninspired.

# What’s the intent?

Before diving in, however, it’s important to first consider how you want people to “feel” when using an interface. Certain palettes can make people feel calm, focused, or productive, while others can create confusion, frustration, or boredom.

Do you want to facilitate calmness and productivity? Cool blues are helpful. Going for something more welcoming and cozy? Consider warmer earth tones. Looking to excite and delight? Drop the notion of neutrality altogether, and dial up the saturation.

# HSL color model to the rescue

I find the HSL color model^[HSL stands for Hue, Saturation, Lightness. [It’s a useful model for thinking about color](https://en.wikipedia.org/wiki/HSL_and_HSV), especially in the context of software and interfaces.] to be the most intuitive for building neutral color palettes for user interfaces. I like to first choose a hue based on intent, and then fine-tune the saturation, lightness, and steps to create a palette that is versatile and has a touch of character, but also stays out of the way and allows the rest of the UI to shine.

# Single palette generator

I made a simple palette generator app with [Vue.js](https://vuejs.org/) to help facilitate this process. Unlike other palette generator apps, this one includes a live preview so you can get some sense of how your palette might look applied to some common user interface elements.

If you understand the HSL color model, it should be fairly simple to use.

1. Select a hue that mirrors your intent
2. Add a smidge of saturation
3. Play around with lightness and step up/step down intervals
4. Have a look at the preview and tweak as you go

There isn’t much method to the madness here, and that’s kind of on purpose. Color selection is very subjective and what “feels” good can be good enough in some cases. Play around, have fun.

{% codesandbox 'https://codesandbox.io/embed/user-interface-colors-9wc13?fontsize=14&hidenavigation=1&theme=dark&view=preview', '800' %}
