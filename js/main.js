document.addEventListener('DOMContentLoaded',()=>{
  const links = document.querySelectorAll('.nav-links a');
  links.forEach(link=>{
    if(link.href === location.href || link.href === location.pathname) {
      link.style.color = 'var(--text)';
    }
  });
});