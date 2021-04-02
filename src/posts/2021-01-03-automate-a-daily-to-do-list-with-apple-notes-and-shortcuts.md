---
layout: post
title: "Automate a daily to-do list with Apple Notes and Shortcuts"
teaser: "For my daily tasks list, I find the less friction the better."
tags:
    [
        'Tutorials',
    ]
---

When it comes managing daily tasks, I’ve tried everything: sticky notes, bullet journaling, and every productivity app under the sun. I keep coming back to a very simple and boring solution: an automated daily note.

As an iOS user, I realized I can use the [Shortcuts app](https://en.wikipedia.org/wiki/Shortcuts_(app)) to automate the creation of a daily to-do note in the [Apple Notes app](https://support.apple.com/guide/notes/welcome/mac), send myself a reminder notification to fill it out, and then keep them all in sync across devices with iCloud.

On my phone I have notifications turned off for nearly every app, but this is one that I welcome. I like being prompted to think about what I have to do well before I have to get started.

Research shows that writing your to-do list the evening beforehand can help improve sleep quality, reduce procrastination, and reduce guilt about enjoying a relaxing evening. It gives me the opportunity clear this information from my brain’s working memory so that I can either wind down from the day or focus on other things.

## How to set it up

1. Open the Shortcuts app on your iPhone and create a new Personal Automation
2. Add a Date action and set `Specified Date` to `Tomorrow`
3. Add a Variable action and set `Date` to a variable named `Title`
4. Add a Notes action and set "Create note with `Title` in `To Do` folder
5. Add a Notification action and set "Show notification" to whatever message you want to see.
6. Set the time and interval for when you would like this automation to fire. I chose 8PM, daily.

{% img './src/assets/images/posts/daily-todo-shortcut.png', 'apple shortcuts app daily to do automation', '65vw' %}

And, voilà! Each evening at 8PM I receive a reminder notification to fill out my to-do list for the following day. No more scrambling every morning to come up with a plan and stressing out over all of my tasks.

{% img './src/assets/images/posts/apple-notes.png', 'apple notes app macos', '65vw' %}
