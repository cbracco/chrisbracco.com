---
layout: post
title: "Visualize CSS spacing utilities"
teaser: A simple way to visualize spacing values for documentation.
tags:
    [
        'Code Snippets',
    ]
---

Design systems, CSS frameworks, styleguides and more will often provide a set of HTML utility classes meant to be reused in situations where a more custom-tailored solution may not be required.

Here is a really simple way to visualize spacing utilities intended for display in documentation for a framework, web application, design system or otherwise. Basically just different background colors for the parent element and utiltity classes, and then the "space" will be represented by the background color of the parent element.

I am using a SCSS loop for brevity to generate the classes.

{% codepen 'OJWOKEv', 'css,result' %}
