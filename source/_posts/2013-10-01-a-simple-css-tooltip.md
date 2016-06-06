---
layout: post
title: A Simple CSS Tooltip
teaser: This is my minimalist approach for tooltips in HTML and CSS only.
date: "2013-10-01 13:00:36"
---

With pseudo elements, the triangle hack, and data attributes, I created a simple tooltip system in HTML and CSS.

<div class="codepen">
  <div data-height="380" data-theme-id="23593" data-slug-hash="qzukg" data-default-tab="result" data-user="cbracco" data-embed-version="1" class="codepen"></div>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

To give any element a tooltip, simply add the `data-tooltip` attribute to it, like so:

```html
<a href="#" data-tooltip="I am a tooltip">I am a link</a>
```

One caveat with this method is that transitions on pseudo elements [don’t quite work right](http://css-tricks.com/transitions-and-animations-on-css-generated-content/) in Webkit browsers (Chrome, Safari). It works just fine in Firefox, but if you include the CSS for the transition it will break the tooltip in Webkit, which is annoying. This means you can’t transition the opacity or positioning of the tooltip for a fade or movement effect. But if you don’t care about that extra pizazz, then this method will work just fine.

## Bonus!

Because boredom, I created a simple directional tooltip system. With class names, you can specify which side you would like the tooltip to appear (top, right, bottom, or left).

<div class="codepen">
  <div data-height="700" data-theme-id="23593" data-slug-hash="nufHz" data-default-tab="result" data-user="cbracco" data-embed-version="1" class="codepen"></div>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>
