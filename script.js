const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
document.getElementById('demoBtn').addEventListener('click',()=>{
  document.getElementById('demoMsg').textContent='Demo started — this button is interactive.';
});
