// Code your solutions in this file


function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);

  }

  return gifts;
}

wrapGifts(gifts);

const names = ["Cecylia", "Christian", "Ava"];

function writeCards(names, event) {
    // Create a new array to hold the messages
    let thankYouMessages = [];
  
    // Iterate through the input array
    for (let i = 0; i < names.length; i++) {
        console.log(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
      // Build the 'thank you' message for each name using string interpolation
      let message = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;

      
      // Add the message to the new array
      thankYouMessages.push(message);
    }
  
    // Return the new array
    return thankYouMessages;
  }



function countDown(startingNumber) {
    let i = startingNumber;
    
    while (i >= 0) {
      console.log(i);
      i--;
    }
  }
