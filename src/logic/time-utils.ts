export function LogAfterOneSec(){
    setTimeout(()=>{
        console.log('1 sec log');
    },1000)
}

export function LogEachSec(){
    setInterval(()=>{
        console.log('1 sec log');
    },1000)
}