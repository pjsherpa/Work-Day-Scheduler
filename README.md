# Work Day Scheduler Starter Code

UCB Challenge 5

Note:The following will be provided in present tense.

This readme has the following:
1. Features
2. HTML 
3. CSS 
4. Javascript 
5. Deployment 
6. Screenshot of Work-Day-Scheduler(img1-img5)

Features:

1. The page displays the current date(ref img:1), schedule time with lines to write and edit and save(for which a save button(💾)(ref img:1) is provided.)
2. Click on line to edit, once done click the save button(💾)Displays message(ref img:2) saves on local storage. Displays saved schedule list after page has been refreshed.
3. Line colour changes individually according to time(ref img1). Which is scheduled from 9am to 5pm. (past = red; present=blue; future=green;)
4. Colour rearranges the next day.

HTML:

1. HTML uses bootstrap to create web-page.  (ref: https://getbootstrap.com/docs/4.0/components/input-group/)
2. Unique Id and classes have been setup for Dom manipulation.
3. script.js has been linked and google fonts.
4. Comments present in index.html

CSS:
1. Changed backgroundcolour for past/present and future.
2. .input-group-text has been modified to display in consistency.
3. Google font added for message.
4. Comments present in style.css.

Javascript:

1. Create variables for elements,classes and id's to be used in functions using Jquery($).
2. JS uses moment() to display Current Date and setup time(hour)
3. JS uses moment() to setup time(individual hour is created through loop) in the time element and compare it with currentTime(converted to number using parseInt.
4. Function created for the comparison, which displays different colors focusing on different lines accordingly depending if its past||present||future.
5. displayMessage function created.
6. AddEvent listener created Local storage setup for all lines individually using unique ID for scheduledlist 9am-5pm. Once clicked also invokes displayMessage function.
7. Comments are present in script.js.

Deployment:

live URL:https://pjsherpa.github.io/Work-Day-Scheduler/

GitHub URL:https://github.com/pjsherpa/Work-Day-Scheduler

Screenshot:

img1: This screenshot is based at 3:35PM

<img width="1432" alt="Screen Shot 2022-07-16 at 3 35 58 PM" src="https://user-images.githubusercontent.com/105903416/179373856-a9ac6705-fbd2-418e-b1e9-025a2a8f5f32.png">


img2:
![Screen Shot 2022-07-16 at 3 41 58 PM](https://user-images.githubusercontent.com/105903416/179374042-67b7a666-eb4f-4849-9aa8-53f6bd9d2abe.png)

