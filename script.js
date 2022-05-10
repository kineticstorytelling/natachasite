const fname = document.getElementById('inp');
const lname = document.getElementById('inpt');

const btn = document.getElementById('submit');
btn.addEventListener('click', function(){
 alert("Thank you for reaching out " + fname.value + " "+ lname.value + ". We will be in touch.");
    fname.value = '';
    lname.value = '';
});
