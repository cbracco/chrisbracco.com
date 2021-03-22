---
layout: post
title: A simple CSS tooltip
teaser: This is my minimalist approach for tooltips in HTML and CSS only.
tags:
    [
        'Code Snippets',
    ]
---

With pseudo elements, the triangle hack, and data attributes, I created a simple tooltip system in HTML and CSS.

{% codepen "qzukg" %}

To give any element a tooltip, simply add the `data-tooltip` attribute to it, like so:

```html
<a href="#!" data-tooltip="I am a tooltip">I am a link</a>
```

One caveat with this method is that transitions on pseudo elements [don’t quite work right](http://css-tricks.com/transitions-and-animations-on-css-generated-content/) in Webkit browsers (Chrome, Safari). It works just fine in Firefox, but if you include the CSS for the transition it will break the tooltip in Webkit, which is annoying. This means you can’t transition the opacity or positioning of the tooltip for a fade or movement effect. But if you don’t care about that extra pizazz, then this method will work just fine.

## Bonus!

Because boredom, I created a simple directional tooltip system. With class names, you can specify which side you would like the tooltip to appear (top, right, bottom, or left).

{% codepen "nufHz", "600", "false" %}
