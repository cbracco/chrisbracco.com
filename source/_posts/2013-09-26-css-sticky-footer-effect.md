---
layout: post
title: CSS Sticky (But Not Fixed) Footer
teaser: "“We need the footer to stick to the bottom of the page without using JavaScript or <code>position: fixed;</code>.” ...Challenge accepted."
date: "2013-09-26 11:28:05"
dateUpdated: "2020-12-21 14:28"
---

For a recent web app project, I had to build a footer that would always stick to the bottom of page, using CSS only. My first instincts led me to the `position: fixed;` property, but it turns out the client didn’t want the footer visible at all times. They wanted it to behave as follows:

- The footer should be visible if the content above it is shorter than the user’s viewport height.
- If the content is taller than the user’s viewport height, then the footer should disappear from view and rest at the bottom of the page, as it would naturally.
- This must be done without JavaScript, and without using the `position: fixed;` property (which would keep the footer at the bottom of the viewport at all times, regardless of the above content).

Below is a small pen demonstrating my solution, and it works fabulously. Feel free to use this method on your next project.

<div class="codepen">
  <div data-height="500" data-theme-id="23593" data-slug-hash="zekgx" data-default-tab="result" data-user="cbracco" data-embed-version="1" class="codepen"></div>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>

## Update! With flexbox

Turns out you can also accomplish this particular layout with flexbox. The CSS is a lot simpler, too.

<div class="codepen">
  <div data-height="500" data-theme-id="23593" data-slug-hash="BaLdqKp" data-default-tab="result" data-user="cbracco" data-embed-version="1" class="codepen"></div>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>
