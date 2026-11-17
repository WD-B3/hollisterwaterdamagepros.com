(function(){
var t=document.querySelector('.navtoggle'),n=document.getElementById('mainnav');
if(!t||!n)return;
t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o?'true':'false');});
document.addEventListener('keydown',function(e){if(e.key==='Escape'&&n.classList.contains('open')){n.classList.remove('open');t.setAttribute('aria-expanded','false');t.focus();}});
})();
