//built in modules
const os = require ('os')
const user = os.userInfo()
console.log(user);


console.log(`The system uptime is ${os.uptime()} seconds`);

const currentOs = {
    name :os.type(),
    release : os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
    hostname: os.hostname(),
}
console.log(currentOs);