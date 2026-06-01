---
layout: post
title: Create an image grid with CSS grid, repeat, and minmax
teaser: And add a touch of JavaScript to randomly load new images in the grid.
tags:
    [
        'Code Snippets'
    ]
---

{% codepen "VwjBGby" %}

This grid layout is very easy to accomplish with CSS grid. The magic lies inside a couple lines of CSS:

```css
.grid {
    display: grid;
    grid-template-columns: repeat(10, minmax(4em, 8em));
}
```

What’s happening here, exactly?

- `repeat` tells CSS grid to repeat the rules inside the expression.
- `10` represents the desired number of columns before it begins to repeat.
- `minmax` sets a minimum and maximum size for each column.

To prevent horizontal overflow on smaller devices and keep the entire grid centered also requires two more lines of CSS:

```css
.grid {
    overflow: hidden;
    justify-content: center;
}
```

{% codepen "VwjBGby", "css,result", "600", "false" %}

And if there are more images than can fit inside the grid and still look reasonable, with a touch of JavaScript the images can randomly fade in and out and replace one another until there are no new images left to load.

{% codepen "VwjBGby", "js", "600", "false" %}
