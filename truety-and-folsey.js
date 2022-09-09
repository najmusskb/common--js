// truthy



const z = { class: 9 };
if (!!z) {
    console.log('yes this is truthy value')
}





// falsy
// const x = null;
// if (!x) {
//     console.log('yes this is falsy')
// }







function work(x, y = 4) {
    return x + y;
}
console.log(work(32);