// writeCards function
function writeCards(names, eventName) {
  let thankYouMessages = [];

  for (let i = 0; i < names.length; i++) {
    thankYouMessages.push(
      `Thank you, ${names[i]}, for the wonderful ${eventName} gift!`
    );
  }

  return thankYouMessages;
}

// countDown function
function countDown(startingNumber) {
  let currentNumber = startingNumber;

  while (currentNumber >= 0) {
    console.log(currentNumber);
    currentNumber--;
  }
}

// Export functions if required
// module.exports = {
//   writeCards,
//   countDown
// };
