---
layout: post
title: CSS “truly center” a single child element horizontally when siblings are present
teaser: "I discovered a less hacky solution to this very specific and minor layout problem."
cssFile: 'truly-center.css'
tags:
    [
        'Code Snippets',
    ]
---

## The problem

If you have a parent element with multiple children, it is trickier than you might think to “truly center” one of the child elements horizontally. Your first instinct may be to reach for flexbox and text-align.

<div class="truly-center truly-center--problem">
  <button class="truly-center__child button button--outline" type="button">&times;</button>
  <div class="truly-center__child truly-center__centered"><span>Center</span></div>
</div>

```css
.truly-center--problem {
    display: flex;
    align-items: center;
}

.truly-center--problem .truly-center__centered {
    flex: 1;
    text-align: center;
}
```

As you can see, this does not work as intended. The “centered” child element is only horizontally centered within the **remaining space** in the parent element, and not the “true center” of the parent element.

In this case the width of the centered element is equal to the width of the parent element minus any sibling element(s). The centered element can only be “truly centered” if the width of child elements on both the left and right of it are equal.

<div class="truly-center truly-center--problem">
  <button class="truly-center__child button button--outline" type="button">&times;</button>
  <div class="truly-center__child truly-center__centered"><span>Center</span></div>
  <button class="truly-center__child button button--outline" type="button">&times;</button>
</div>

But what if you only wanted one non-centered child element, or non-centered siblings with different widths on each side of the centered element?

## Absolute positioning

A quick fix for this is to remove the non-centered child elements from the document flow and position them absolutely.

**Caveat:** You need to know the dimensions of each child element, and then calculate the appropriate padding for the centered element so that it doesn’t overlap the absolutely positioned elements.

<div class="truly-center truly-center--absolute">
  <button class="truly-center__child button button--outline" type="button">&times;</button>
  <div class="truly-center__child truly-center__centered"><span>Center</span></div>
</div>

```css
.truly-center--absolute {
    position: relative;
}

.truly-center--absolute .button {
    position: absolute;
    top: 50%;
    margin-top: [SIBLING HEIGHT / 2];
    left: [PARENT LEFTHAND PADDING];
}

.truly-center--absolute .truly-center__centered {
    text-align: center;
}
```

## Pseudo element

You could also use the :after pseudo selector as a sort of “spacer” element to nudge the centered element to “true center”.

**Caveat:** You need to know the dimensions of each child element, and then calculate the appropriate dimensions for the pseudo element to nudge the centered element to “true center”.

<div class="truly-center truly-center--pseudo">
  <button class="truly-center__child button button--outline" type="button">&times;</button>
  <div class="truly-center__child truly-center__centered"><span>Center</span></div>
</div>

```css
.truly-center--pseudo .truly-center__centered {
    position: relative;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.truly-center--pseudo .truly-center__centered:after {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    content: '';
    width: [SIBLING WIDTH];
    height: 1px;
}
```

## Negative margin

You could also use a negative margin on the centered element to shift it into “true center”.

**Caveat:** You need to know the dimensions of each child element, and then calculate the appropriate negative margin to nudge the centered element to “true center”.

<div class="truly-center truly-center--negative-margin parent">
  <button class="truly-center__child button button--outline" type="button">&times;</button>
  <div class="truly-center__child truly-center__centered"><span>Center</span></div>
</div>

```css
.truly-center--negative-margin {
    display: flex;
    align-items: center;
}

.truly-center--negative-margin .truly-center__centered {
    flex: 1;
    margin-left: [SIBLING WIDTH * -1];
    padding: 0 [SIBLING WIDTH];
    text-align: center;
}
```

## CSS grid

The above solutions will work in pretty rigid circumstances, but break down if the size of surrounding siblings change across viewport sizes or different UI states. Is there a better way?

CSS grid to the rescue! This solution is the most flexible of the bunch. You can have elements to the left and right, and you don’t need to care about their dimensions.

<div class="truly-center truly-center--grid">
  <div class="truly-center__child">
    <button class="button button--outline" type="button">&times;</button>
  </div>
  <div class="truly-center__child truly-center__centered"><span>Center</span></div>
  <div class="truly-center__child">
    <button class="button button--outline" type="button">Cancel</button>
    <button class="button button--outline" type="button">Save</button>
  </div>
</div>

```css
.truly-center--grid {
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    align-items: center;
  }

.truly-center--grid .truly-center__child:last-child {
    text-align: right;
}
```
