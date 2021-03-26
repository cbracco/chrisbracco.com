---
layout: post
title: Simple Vanilla JavaScript “Component”
teaser: Frameworks? Who needs ’em! Kidding.
tags:
    [
        'Code Snippets'
    ]
---

If all you want is a few simple components for a small website or app, you can do so without having to fuss with frameworks, transpilation, or build tools. All it takes is the constructor pattern combined with prototype methods.

{% codepen 'VpZpBp', 'js,result' %}

And yes, you can use the newer [`class` syntactic sugar](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes) instead, but then you will have to worry about transpilation for [older browsers that do not support the `class` syntax](https://caniuse.com/es6-class) (namely IE11 and under).
