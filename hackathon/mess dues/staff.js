
const sub=document.getElementById('submit')
sub.addEventListener('click',(e) =>{
    const rollNo= document.getElementById('rollNo').value
    let extra='0'
    extra=document.getElementById('extra').value
    let fee='0'
    fee=document.getElementById('fee').value
    extra=parseInt(extra,10)
    fee=parseInt(fee,10)
    var total=extra+fee
    document.getElementById('total').innerHTML=total
})
