---
layout: post
title: CSS “or” style dividers with a single DOM element
teaser: Incorporating text into a dividing line is trickier than you might think.
tags:
    [
        'Code Snippets',
    ]
---

Interfaces often ask folks to choose between a set of actions. Fill out this field or that field. Press this button or that button. A common way to visually represent these "or" choices is to separate the choices visually with a line. A line by itself usually is not enough to imply the "or" choice, though. Accompanying text can help, too.

I wanted to create a component that could provide this solution as a single DOM element with nested text, and support both vertical and horizontal orientations. Something along these lines:

```html
<div>Or</div>
```

A bit of toying around [in Codepen](https://codepen.io/cbracco/pen/mdBEOOx), and I landed on something useful and flexible. The vertical version uses some absolute positioning hacks, and the horizontal version uses some negative margin hacks.

{% codepen 'mdBEOOx', "css,result", "600", "true" %}
