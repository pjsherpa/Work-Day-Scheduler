# Work Day Scheduler Starter Code

UCB Challenge 5

Note:The following will be provided in present tense.

This readme has the following:
1. Features
2. HTML 
3. CSS 
4. Javascript 
5. Deployment 
6. Screenshot of Work-Day-Scheduler(img1-img)

Features:

1. The page displays the current date(ref img:1), schedule time with lines to write and edit and save(for which a save button(💾)(ref img:2) is provided.)
2. Click on line to edit, once done click the save button(💾) saves on local storage. Displays saved schedule list after page has been refreshed.
3. Line colour changes individually according to time(ref img2-4). Which is scheduled from 9am to 5pm. (past = red; present=blue; future=green;)

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
7.Comments are present in script.js.

live URL:https://pjsherpa.github.io/Work-Day-Scheduler/

GitHub URL:https://github.com/pjsherpa/Work-Day-Scheduler

Screenshot:

img1:
<img width="750" alt="Screen Shot 2022-07-15 at 5 57 37 PM" src="https://user-images.githubusercontent.com/105903416/179328075-691fb4a5-0a59-4f95-b3ac-d73dbf24b574.png">

img2:
<img width="1422" alt="Screen Shot 2022-07-15 at 5 58 41 PM" src="https://user-images.githubusercontent.com/105903416/179328172-665474ab-708f-4767-84e9-e806c251d045.png">

img3:
<img width="1375" alt="Screen Shot 2022-07-15 at 6 04 06 PM" src="https://user-images.githubusercontent.com/105903416/179328412-894ed604-a735-43d1-8444-acbdafd54f1f.png">

img4:
<img width="1422" alt="Screen Shot 2022-07-15 at 6 00 01 PM" src="https://user-images.githubusercontent.com/105903416/179328213-cfeb43dc-aa08-40af-97bc-0a54ad5dc431.png">
