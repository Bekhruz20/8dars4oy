let arr=[2, 4, 9, 10, 45, 67, 8, 90]
let arr2=[]

alert(`${arr} Boshlang'ich array`)

for(let i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        arr2.push(arr[i])
    }
}

alert(`${arr2} Juft sonlar`)
// for(let i=0;i<10;i++) {
//     console.log("Hello world",i+1);
// }

// let number=prompt('Son kiriting')
// for(let i=0; i<number; i++) {
//     console.log("Qalesan MAKAKA",i+1);
// }

// let count=0
// while(count<7){
//     console.log("hello world");
//     count++
// } ---->  ishlatilmasin !!!!!!!!!!!!!!!!

// const arr = ['BMW', 'MERS', 'MClaren', 'Ford-Mustang', 'Audi']
// for(let i=0; i<arr.length; i++) {
//     console.log(arr[i]);
// }
