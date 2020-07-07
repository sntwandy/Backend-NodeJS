const os = require('os');

console.log('CPU info: ', os.cpus()); // Output: CPUs info, model, speed and times

console.log('IP address network: ', os.networkInterfaces().lo.map(ip => ip.address)); // Output: newtwork config and ip address especific

console.log('Free RAM [bytes]: ', os.freemem());

console.log('OS: ',os.type()); // Output the type of OS that you're running

console.log('OS Version: ', os.release()); // Output: a string identifying the OS release

console.log('User Info: ', os.userInfo()); // Output: info about the user logged, like username, homedir and shell
