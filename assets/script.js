(function(){
 const root=document.getElementById('en-new');if(!root)return;
 const views=root.querySelectorAll('[data-page]');
 const select=root.querySelector('#en-service');
 function showPage(file,hash){
  views.forEach(view=>view.hidden=view.dataset.page!==file);
  root.querySelectorAll('nav .nav-links a').forEach(link=>{if(link.getAttribute('href')===file)link.setAttribute('aria-current','page');else link.removeAttribute('aria-current');});
  const target=hash?root.querySelector('#'+hash):root.querySelector('nav');if(target)target.scrollIntoView({block:'start',behavior:'instant'});
 }
 root.addEventListener('click',function(event){
  const link=event.target.closest('a');if(!link||!root.contains(link))return;
  const href=link.getAttribute('href')||'';const parts=href.split('#');const file=parts[0];
  if(!['index.html','services.html','about.html','contact.html'].includes(file))return;
  const service=link.dataset.service;
  if(views.length){event.preventDefault();showPage(file,parts[1]);if(service&&select){select.value=service;const result=root.querySelector('#en-result');if(result)result.textContent='';}}
  else if(service){event.preventDefault();window.location.href=href+'?service='+encodeURIComponent(service);}
 });
 if(!views.length&&select){const service=new URLSearchParams(window.location.search).get('service');if(service)select.value=service;}
 const form=root.querySelector('#en-request');if(!form)return;
 if(window.location.protocol==='https:'||window.location.protocol==='http:'){
  const next=document.createElement('input');
  next.type='hidden';next.name='_next';
  next.value=new URL('thank-you.html',window.location.href).href;
  form.appendChild(next);
 }
})();
