const asyncCallback = (cb) => {
  setTimeout(() => {
    if (Math.random() < 0.5) {
      return cb(null, "Hello Megan E.");
    } else {
      cb(new Error("Hello Error!"));
    }
  }, 2000);
};

asyncCallback((err, msg) => {
  if (err) {
    console.error(`Error: ${err}`);
  } else {
    console.log(`Menssage: ${msg}`);
	}
});
