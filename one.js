x="i"
y="am"

z=" devid"


console.table([x,y,z])
let v=undefined
console.log(typeof v)
let q="25aids"
let r=Number(q)
console.log(typeof q)
console.log(typeof r)
const val=Symbol("7")
const ass=Symbol("7")
const work=function() {
    console.log('Hey')
}
work()
let s="Victor"
console.log(`Hello ${s},I am ${z}`)//string interpolation
console.log(z.replace(z,s))//replace
console.log(z.trim())//trim
const k=12345.4678
const l=k.toFixed(2)
console.log(l)
let m=Math.random()//to print random values of variable every time
console.log(m)
let o=new Date()
console.log(typeof o)
let fix=o.toLocaleString()
console.log(fix)
let t=Date.now()
console.log(t)
 arr=[2,4,6,8]
console.log(arr[1])
console.log(arr)
arr.reverse()
console.log(arr)
const person=
{
    name:"David",
    sex:"female",

    greet: function() {
        console.log(`hello world ${this.name} here and am a ${this.sex}`);
    }
}
person.greet();
