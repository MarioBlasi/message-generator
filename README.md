# Data Lists

## Introduction:

In this project, we have created three arrays: `quotes`, `advices`, and `reflections`, each containing quotes, advices, and reflections respectively.

## getRandomIndex Function:

This function takes an array as an argument and returns a random index to access an element of that array. It utilizes `Math.random()` to generate a random number ranging from 0 to the length of the array minus one.

## generateRandomMessage Function:

The `generateRandomMessage` function employs `getRandomIndex` to randomly select a quote, an advice, and a reflection from their respective lists. It then combines these elements into a formatted string.

We have also implemented a feature to randomly shuffle the indices of the various arrays before using them to select the messages. Every time `generateRandomMessage` is called, a random message is generated where each part (quote, advice, reflection) is randomly selected from their respective arrays but shuffled randomly.

## Program Execution:

Upon execution, the `generateRandomMessage` function is called, and the generated message is printed to the console using `console.log()`.

## Result:

Each time the program is run, a different message is obtained because the elements are randomly selected from the lists.
