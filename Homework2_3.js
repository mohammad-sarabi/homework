
function mili(miliSecond){
let day=miliSecond/864e5;// 864e5 is day*hour*minute*second*miliSecond
    let dey_leftOver=day%Math.trunc(day);
let hour =dey_leftOver*24;
    let hour_leftOver=hour%Math.trunc(hour);
let minute=hour_leftOver*60;
    let minute_leftOver=minute%Math.trunc(minute);
let second=minute_leftOver*60;
    let second_leftOver=second%Math.trunc(second);
 let mili_Second=second_leftOver*1000;
    let mili_Second_leftOver=mili_Second%Math.trunc(mili_Second);
console.log(Math.trunc(day),"day",Math.trunc(hour),"hour",Math.trunc(minute),"minute",Math.trunc(second),"second",Math.trunc(mili_Second),"miliSecond")
}








