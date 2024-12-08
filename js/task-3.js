// function checkForSpam(message) {
//   const spamWord1 = 'spam';
//   const spamWord2 = 'sale';

//   if (
//     message.toLowerCase().includes(spamWord1) ||
//     message.toLowerCase().includes(spamWord2)
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }

function checkForSpam(message) {
  const messageLowerCase = message.toLowerCase();
  const spamWord1 = "spam";
  const spamWord2 = "sale";

  const firstSpamWord = messageLowerCase.includes(spamWord1);
  const secondSpamWord = messageLowerCase.includes(spamWord2);

  const hasSpamWords = firstSpamWord || secondSpamWord;

  return hasSpamWords;
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
