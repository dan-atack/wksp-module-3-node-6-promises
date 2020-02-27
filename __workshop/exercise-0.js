// Exercise 0.1
// ------------
// Write a function testNum that takes a number as an argument and returns
// a Promise that tests if the value is less than or greater than the value 10.

// Exercise 1 is done...

const compareToTen = (num) => {
    myPromise = new Promise((resolve, reject) => {
        if(num > 10) {
            resolve(num)
        } else {
            reject(num + " is less than 10, error!")
        }
    })
    return myPromise;
}

const divideByThree = (result) => {
    // Forming an experimental promise chain to see how it works.
    newPromise = new Promise((resolve, reject) => {
        if(result % 3 === 0) {
            resolve(result / 3)
        } else {
            reject(result + " wasn't divisible by three.")
        }
    })
    return newPromise;
}

// Calling the Promise
compareToTen(11)
    .then(result => divideByThree(result))
    // Chaining promises: Just stack the .then statements in the list of promises that follow from the first function.
    .then(data => console.log("CASE A", data))
    .catch(error => console.log("Case B", error))

compareToTen(8)
    .then(result => console.log("Case C", result))
    .catch(error => console.log("CAse D", error))



    
// Exercise 0.2
// ------------
// Write two functions that use Promises that you can chain!
// The first function, makeAllCaps(), will take in an array of words and capitalize them,
// and then the second function, sortWords(), will sort the words in alphabetical order.
// If the array contains anything but strings, it should throw an error.

const arrayOfWords = ['cucumber', 99, 'tomatos', 'avocado']
const complicatedArray = ['cucumber', 44, true]
  
const makeAllCaps = (array) => {
    thePromise = new Promise((resolve, reject) => {
        let words = [];
        array.forEach(word => {
            (typeof word == "string") ? words.push(word.toUpperCase()) : reject(word + " isn't a word!")
        })
        resolve(words)
    })
    return thePromise;
};

const sortWords = (array) => {
    nextPromise = new Promise((resolve, reject) => {
        array.sort();
        resolve(array)
    })
    return nextPromise;
}; 

// Calling (testing)
makeAllCaps(arrayOfWords)
// Then follows from the first function and uses whatever it returns:
.then(sortWords)
// Making my console logs more verbose, to make sure I'm seeing what I want to see.
.then((result) => console.log("All caps succeeds! " + result))
.catch(error => console.log("I don't want to see this. " + error))

makeAllCaps(complicatedArray)
.then(sortWords)
// Making my console logs more verbose, to make sure I'm seeing what I want to see.
.then((result) => console.log("I shouldn't see this either. " + result))
.catch(error => console.log("Non-kosher item detected: " + error))

    
