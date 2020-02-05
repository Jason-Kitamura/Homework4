This code quiz took a lot of code to write. I am aware that there is definitely a shorter method to creating this quiz, but this is what I know, and amd very happy to get it working 95% on my own.

The quiz works pretty well. 
    - First users will press the start button to start, and the timer will start cownting down from 60.
    - Users can answer the question by clicking on the answer they choose,
    - if the answer if right, a dialogue pops up saying 'correct!' and the next question and answers pop up.
    - if the answer is wrong, a dialogue pops up saying 'wrong!", the time decreases by 10, and the next question and answers pop up.
     - the quiz is over once they have answered all of the questions, or the timer <= 0.
     - The user is then shown their score (time left), a button to play again(refresh the screen), and submit their name and score
     - if they click subit, their info will be stores in loval storage

A few extra features,
    - the highscore list (which does not work yet) toggles between showing and hidden everytime a user click the button
    - press F5 to exit quiz(user could already do this but now they know how)


That being said, eveything works except the highscores list. (stores data in local storage but no function to pull it out into the highscores section YET).