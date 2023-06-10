let success = false;
let promise = new Promise((resolve,reject)=>{
    if(success){
        setTimeout(() => {resolve(`I succeeded`) }, 5000)
        resolve(`I succeeded`);

    }
    else{
        setTimeout(() => {resolve(`I am still looking for a job`) }, 5000);
        // reject (`I am still looking for a job`)
    }
});
// .then (()=>{console.log(`I will work hard`);})
// .catch(()=>{console.log(`I will upskill`);})
// .finally(()=>{console.log(`I am worthy`);})
// console.log({promise});
const student = async ()=>{
    let result = await promise;
    console.log({result});
}
student();