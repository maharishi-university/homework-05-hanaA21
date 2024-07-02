class Meditation{
    duration: number;
    constructor(duration: number){
        this.duration = duration;
    }
    start(){
        console.log('Start meditation');
        let count = this.duration;
        const intervalId = setInterval(()=>{
            if(count>0){
                console.log(count);
                count--;
            }else{
                clearInterval(intervalId);
                console.log('Jay Guru Dav')
            }
        },1000);
    }
}
const morning_meditation = new Meditation(5);
morning_meditation.start();
// Start meditation
// 5
// 4
// 3
// 2
// 1
// Jay Guru Dev