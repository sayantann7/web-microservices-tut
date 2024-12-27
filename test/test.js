const autocannon = require('autocannon');

const urls = ['http://localhost:3000', 'http://localhost:3000/stress-test'];
const duration = 30;

urls.forEach(url => {
    const instance = autocannon({
        url,
        duration
    },(err,result)=>{
        if(err){
            console.error(err);
        }else{
            console.log('URL : ',url);
            console.log('Number of requests : ',result.requests.total);
            console.log('Duration : ',result.duration);
        }
    });
    
    autocannon.track(instance);
});