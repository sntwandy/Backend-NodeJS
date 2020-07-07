const promiseFunction = () => new Promise( (resolve, reject) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      resolve("Hello Megan E.");
    } else {
      reject(new Error("Hello Error!"));
    }
  }, 1000);
});

async function asyncAwait() {
  try {
    const msg = await promiseFunction();
    console.log(msg);
  } catch(err) {
    console.log('Error: ' , err);
  };
};

asyncAwait();