# React Notes

[Website url](https://zingy-cobbler-d4269d.netlify.app/)


## What Worked Well:
    I think that the firebase worked quite well with the project. I had some trouble at first, but, once I got the hang of it, it wasn't too bad. 

    I the web app functions as it is supposed to and the functions I implemented also work

## What Didn't
    I tried to put the show state into the firebase and then use it from there to filter the notes (by color) but I had a little trouble doing the second part of it. I got them on firebase but couldn't figure out how to access them the way I wanted to. So i used immur (produce) to keep track of the filtering locally. But in the end, I think I liked it better like this since it allows each person who has the browser open to localy filter notes themselves instead of having to see the filtered notes of someone else. This also would allow more than one person to use the notes app at the same time as well. 

## Extra Credit
    1. the first extra creadit i tackled was the notes color. I have three buttons at the bottom that let you change the colors of the notes. I added the noteColor to the state of the note to keep track of it. I think it works pretty well and the colors look pretty.
    2. The second EC i tackled was filtering. I filtered by color. At the top you click which color you want to see and it shows you only that. One little thing I would change/ had trouble with was the filter buttons. The plue, green, and pink buttons are all good and are self-explanatory. But the white-ish one (which is for seeing all notes) is not. Although when you click on it, it shows you all notes, it is not intuative that that is what it does. One option i explored was labeling the buttons but i hated how the labels looked. I chose to not use lables. This was a question of wheter to go with functionality or aesthetic, and i chose aesthetic. I know functionality is important but i just hated the labels a lot.
        Also one problem i had with filter was the when you had a filter on and tried to create a note, it wouldn't always show up. this is because i put the default note color to pink so if the filter was on for another color, the note wouldn't appear since it was pink. I got around this by have a function that makes the new note color pink if the filter is on "see all" and if it isn't, it will make the noteColor the same color as the current filter. 
    3. third was just to make it looks pretty. i added hover states for all of my buttons and made them transform ( "come out of the page"). I made the cursor change to pointer when it was on something clickable so the user knows what they can click on. Also addes box shadows to the notes themselves to make them appear more 3D- the shadows correspond to the note colors. Blues have a bluish shadow, pinks hava a pinkish shadow, and so on. And when you hover over a note, it's shadow changes to a yellow-ish color to show that that is the one the user is on. 
    4. The resize of the boxes. i gave them a min and max heights & widths to allow the user to allow the TextAutoSize some room/ flexibility. So the user is able to make the note itself bigger and smaller - but only within the size I specified. 

## Screenshots
![](https://i.imgur.com/OXY467m.jpg)
