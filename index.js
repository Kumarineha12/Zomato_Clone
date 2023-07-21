let loc_bx=document.getElementById('loc_bx');
let arrow =document.getElementById('arrow')
let address =document.getElementById('address')
address.addEventListener('focusin',()=>{
    loc_bx.style.visibility="visible";
    arrow.style.transform="rotate(180deg)";
    loc_bx.style.opacity=1;
})
address.addEventListener('focusout',()=>{
    loc_bx.style.visibility="hidden";
    arrow.style.transform="rotate(0deg)";
    loc_bx.style.opacity=0;
})
let email=document.getElementById('email');
let phone=document.getElementById('phone');
let emails=document.getElementById('emails');
let phones=document.getElementById('phones');
let emails_phones=document.getElementById('emails_phones');
phone.addEventListener('click', ()=>{
    emails_phones.classList.add('show_more');
    email.checked=false;
});
email.addEventListener('click', ()=>{
    emails_phones.classList.remove('show_more');
    phone.checked=false;
})


