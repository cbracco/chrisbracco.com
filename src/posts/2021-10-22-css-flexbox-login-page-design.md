---
layout: post
title: Responsive two-column login page with CSS flexbox
teaser: "A simple solution for a recent design trend."
tags:
    [
        'Code Snippets',
    ]
---

A trend has emerged recently for signup, login and other authentication-style pages that you’ll find in most modern web applications. Several tools I use on a daily basis for work have started using a two-column design for these pages, with the form located on one side and some sort of call-to-action or reminder of the value proposition on the other.

I quite like the trend, so I whipped up a proof-of-concept using CSS flexbox. The layout switches to one-column for smaller devices, and creates some visual separation between the login form and the rest of the page content using white space and shadows.

{% codepen 'JjyRXXx', "result", "600", "true" %}
