---
layout: post
title: How to undo an iCal calendar import
teaser: Here’s how to undo that mistake.
tags:
    [
        'Tutorials'
    ]
---


I recently imported a busy external calendar into one of my existing personal calendars using the “Import” feature in the macOS Calendar app, which accepts an `.ics` file. I watched in horror as all of these new external events began populating in my _personal_ calendar. I thought I was doomed and would have to manually delete hundreds of events.

Alas, there was a way out. If you open the `.ics` file in a text editor (I used [VS Code](https://code.visualstudio.com/)), you should be able to use the editor’s “Find & Replace” functionality to create a new `.ics` file that when imported will cancel all of the events you just added from that calendar.

At the time of writing, my ICS file looked something like this:

```
BEGIN:VCALENDAR
VERSION:2.0
PRODID:icalendar-ruby
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
DTSTAMP:20210323T151852Z
UID:24e83108-062b-496f-8229-2e2057e3940a
DTSTART;VALUE=DATE:20200427T000000
DTEND;VALUE=DATE:20200428T000000
SUMMARY:Calendar Event Name
END:VEVENT
END:VCALENDAR
```

You may notice there is no `STATUS` property for the event. Using “Find & Replace” I added it to each event by replacing every `END:VEVENT` line with `STATUS:CANCELLED\nEND:VEVENT`.

Save the file, re-import it the same way you did the first time, and should start to see the events disappear. Phew!
