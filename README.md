# Password Generator Challenge

## Purpose

The purpose for this challenge is to give the user an easy and fast way to come up with unqiue passwords for them to use. I want to give the user's a place
to quickly generate a brand new password that is custimizable to what they need base on criteria the user enters into the generator.

## User Story

    *AS AN employee with access to sensitive data
    *I WANT to randomly generate a password that meets certain criteria
    *SO THAT I can create a strong password that provides greater security

## Acceptance Criteria

### GIVEN I need a new, secure password

    *WHEN I click the button to generate a password
    *THEN I am presented with a series of prompts for password criteria
    *WHEN prompted for password criteria
    *THEN I select which criteria to include in the password
    *WHEN prompted for the length of the password
    *THEN I choose a length of at least 8 characters and no more than 128 characters
    *WHEN asked for character types to include in the password
    *THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
    *WHEN I answer each prompt
    *THEN my input should be validated and at least one character type should be selected
    *WHEN all prompts are answered
    *THEN a password is generated that matches the selected criteria
    *WHEN the password is generated
    *THEN the password is either displayed in an alert or written to the page

## Pseudo Code

The following was the steps I wrote out in-order to approach this project from a logical stand point using Pseudo Code :

    1. Build Arrays containing the diffrent characters to build password with
    2. Start function with using Alerts, Prompts, and Conforim methods to get the drop down box and collect the users requirements for the password
    3. Use If statements with the boolean values stored in the declared varibles to check which requirements the user would like the password to have
    4. In said If statements, use the, ".concat" method to join selected arrays to merge with the random array
    5. Set Up a for loop with the condition of randomly generating a number and using, "Math.floor" and "Math.random", to pick an index value from the random array. Stopping once the index length of the random array is met
    6. Placing the pulled values from the random array into a new varible, newPassword, and appending it to the DOM

## Challenges

One of the bigger challenges I had well working on this project was the, "how" on actually putting it all together in the for loop. Altough it seems to make sense now, in the moment I became very stuck on getting it to actually build the new string to append to the DOM. I kept running into a bug where the value saved from the for loop was just a single index number and the value of it. It took some reserch to find the solution was in using the, "+=" operator to attach the index value from the, "Math.floor(Math.random() \* array.legth)" and using it as the indexing number.

## Take Away

Using Pseudo Code really helped me visual and tackle the problems head out. Allowing for me to focus on the smaller pieces of the problem didn't make it seem as overwhelming after acheving the smaller wins. In fact, it made the overwhelming challenge appear easy to tackle. I plan on taking the process of Pseudo Coding in the the rest of my projects going forward as it made for a soother experience when coding.

## Links

![The Live Site](https://mmount98.github.io/Password-Generator/)
