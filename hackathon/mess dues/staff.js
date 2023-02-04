// let extra=0
// let fee=0

console.log(extra)
console.log(fee)
//let total=document.getElementById('total')
const sub=document.getElementById('submit')
sub.addEventListener('click',(e) =>{
    const rollNo= document.getElementById('rollNo').value
    const extra=document.getElementById('extra').value
    const fee=document.getElementById('fee').value
    var total=extra+fee
    document.getElementById('total').innerHTML=total
    console.log(total)
})
