---
layout: post
title: CSS Sticky (But Not Fixed) Footer
teaser: '“We need the footer to stick to the bottom of the page without using JavaScript or position: fixed;” ...Challenge accepted.'
tags:
    [
        'Code Snippets',
    ]
---

When tasked to build a footer that would always stick to the bottom of page, using CSS only, my first instincts were to reach for the `position: fixed;` property&mdash;the problem, though, was that the footer could not be visible all the time. It instead needed to flow naturally, while also following these rules:

-   The footer should be visible if the content above it is shorter than the user’s viewport height.
-   If the content is taller than the user’s viewport height, then the footer should disappear from view and rest at the bottom of the page, as it would naturally.
-   This must be done without JavaScript, and without using the `position: fixed;` property (which would keep the footer at the bottom of the viewport at all times, regardless of the above content).

Below is a small pen demonstrating my solution, and it works fabulously. Feel free to use this method on your next project.

{% codepen "zekgx" %}

## Update! With flexbox

Turns out you can also accomplish this particular layout with flexbox. The CSS is a lot simpler, too.

{% codepen "BaLdqKp" %}

## Update! With CSS grid

And finally, you can also achieve this effect using CSS grid.

{% codepen "ZEBmQXo" %}
