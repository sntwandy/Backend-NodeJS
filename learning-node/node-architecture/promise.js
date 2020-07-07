const promise = new Promise( (resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("Hello Megan E.");
    } else {
      reject(new Error("Hello Error!"));
    }
  }, 2000);
});

promise
  .then(msg => msg.toUpperCase())
  .then(msg => console.log('Message: ',msg))
  .catch(err => console.log('Error: ', err));