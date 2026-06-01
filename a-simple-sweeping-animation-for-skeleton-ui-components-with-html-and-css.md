---
layout: post
title: A simple sweeping animation for skeleton UI components with HTML and CSS
teaser: A touch of HTML/CSS to help improve perceived performance in asynchronous web applications.
tags:
    [
        'Code Snippets',
    ]
---

I’m not sure where the terminology originates, but “[skeleton UI](https://css-tricks.com/building-skeleton-screens-css-custom-properties/)” has become a popular [perceived performance](https://developer.mozilla.org/en-US/docs/Learn/Performance/Perceived_performance) technique and is a useful one to have in the ol’ toolbelt.

Depending on the context, this technique can be used to mock entire screens or individual components that may have to load asynchronously. They help communicate to folks that something is indeed happening when they first arrive, and also prevent jumping content and costly layout reflows.

Here is a simple example that uses a “sweeping” gradient animation over a generic “card” component to communicate movement and change.

{% codepen 'YzNNEjR', 'css,result' %}
