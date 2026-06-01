---
layout: post
title: CSS accessible multi-level dropdown hover navigation menu
teaser: While clickable menus are often a better solution, sometimes you will need to use the hover style instead. Thanks to the :focus-within psuedo selector, this is easier than ever.
tags:
    [
        'Code Snippets'
    ]
---

After reading a recent article on CSS tricks about [clickable navigation menus](https://css-tricks.com/in-praise-of-the-unambiguous-click-menu/), my inner contrarian was no doubt tempted to explore the opposite.

I’ve been using the [CSS “opacity and visibility” trick](https://fvsch.com/articles/transition-fade/test5.html) for smooth two-way transitions for quite some time. Works great in a pinch, except hover-only dropdown menus are not very accessible. Typically I would have to enhance them further with some JavaScript in order to be able to move the focus properly through the nested dropdown menus.

With the [`:focus-within` psuedo selector](https://drafts.csswg.org/selectors-4/#the-focus-within-pseudo), however, JavaScript is no longer necessary! It’s [current browser support](https://caniuse.com/css-focus-within) is fairly wide, implemented by most modern browsers and Internet Explorer 11 and up.

Go ahead and try to <kbd>tab</kbd> through the below menu yourself. Works like a charm!

{% codepen 'PoWZedV' %}

## Bonus!

And if you like drop shadows on your submenus, the example in this post includes a simple hack to prevent the shadows on child submenus from overlapping their parent submenus.
