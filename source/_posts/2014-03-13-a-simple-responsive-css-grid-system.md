---
layout: post
title: A Simple, Responsive CSS Grid System
teaser: Nothing revolutionary here, but I wanted to share a simple responsive grid system that I had to whip up for work.
date: "2014-03-13 11:13:52"
---

We are currently building a new <abbr title="Content Management System">CMS</abbr> at [Big Room Studios](http://bigroomstudios.com), and I was given the task of writing a fluid CSS grid system for said CMS.

Although this CSS grid is fluid, it also had to be somewhat rigid to start. We didn’t want to give users too much control in the <abbr title="Minimum Viable Product">MVP</abbr> stage.

Because of this, all grid columns simply stack on top of each other on smaller screens, as 100% width blocks. It’s nothing revolutionary, but the code is super minimal and I wanted to share it here in case anyone else found it useful.

<div class="codepen">
  <div data-height="450" data-theme-id="23593" data-slug-hash="hjFDL" data-default-tab="result" data-user="cbracco" data-embed-version="1" class="codepen"></div>
  <script async src="//assets.codepen.io/assets/embed/ei.js"></script>
</div>
