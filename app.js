const billAmount= document.querySelector('#bill-amount');
const cashGiven=document.querySelector('#cash-given');
const nxtbtn=document.querySelector('.next-btn');
const checkBtn= document.querySelector('.check-btn');
const billErrorMsg=document.querySelector('.bill-error');
const cashErrorMsg= document.querySelector('.cash-error');
const notesList=document.querySelectorAll('.no-of-notes');
const cashin=document.querySelector('.cash');
const table =document.querySelector('.table-change');
const Billpaid=document.querySelector('.paid');

const notes=[2000,500,100,20,10,5,1];

Billpaid.style.display="none"
billErrorMsg.style.display="none";
cashErrorMsg.style.display="none";
cashin.style.display="none";
table.style.display="none";

nxtbtn.addEventListener('click',checkBillAmount);

checkBtn.addEventListener('click', ()=>{
    if(Number(billAmount.value)>0){
        billErrorMsg.style.display="none";
        cashin.style.display="flex";
        checkGivenCash();
    }
    else{
        invalid('Bill amount should be greater than 0');
        cashin.style.display="none";
    }
})

/*checking bill amount */
function checkBillAmount(){
    if(Number(billAmount.value)>0){
        billErrorMsg.style.display="none";
        cashin.style.display="flex";
    }else{
       invalid('Bill amount should be greater than 0');
       cashin.style.display="none";
       table.style.display="none";
    }

}

/*checking given cash and amount to be returned*/

function checkGivenCash(){
    if(Number(cashGiven.value) === Number(billAmount.value)){
        PaymentDone();
    }else if(Number(cashGiven.value)>= Number(billAmount.value)){
        cashErrorMsg.style.display="none";
        Billpaid.style.display="none"
        table.style.display="flex";
        const amountTOBeReturned= cashGiven.value-billAmount.value;
        calculateChange(amountTOBeReturned);
    }else{
        invalid('Please pay the full amount or you have to wash utensils here.');
        table.style.display="none";
        Billpaid.style.display="none";
    }
}

function calculateChange(amountTOBeReturned){
    for(let i=0; i<notes.length; i++){
        const noOfNotes=Math.trunc(amountTOBeReturned/notes[i]);
        amountTOBeReturned=amountTOBeReturned%notes[i] ;
        notesList[i].innerText=noOfNotes;
    }
}

function invalid(msg){
    billErrorMsg.style.display="flex";
    billErrorMsg.innerText=msg;
}

function PaymentDone(){
    Billpaid.style.display="block";
    Billpaid.innerText='Full payment done.'
}