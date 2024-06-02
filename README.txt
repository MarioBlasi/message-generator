Data Lists:
    Three arrays have been created: quotes, advices, reflections, containing quotes, 
    advices, and reflections respectively.

getRandomIndex Function:
    This function takes an array as an argument and returns a random index to access 
    an element of that array. It uses Math.random() to generate a random number ranging
    from 0 to the length of the array minus one.

generateRandomMessage Function:
    This function uses getRandomIndex to randomly select a quote, an advice, and a 
    reflection from their respective lists. It combines these elements into a formatted string.

    We can also randomly shuffle the indices of the various arrays before using them to select the messages.
    Every time we call generateRandomMessage(), we will get a random message where each part
    (quote, advice, reflection) will be randomly selected from their respective arrays, but shuffled randomly.

Program Execution:
    The generateRandomMessage() function is called, and the generated message is printed
    to the console using console.log().

Result:
    Each time we run the program, we get a different message because the elements are 
    randomly selected from the lists.
