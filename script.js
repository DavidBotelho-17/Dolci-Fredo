const burger = document.querySelector('.burger');
const toggle = document.getElementById('nav-toggle');

burger.addEventListener('click', function(e) {
  e.preventDefault();
  toggle.checked = !toggle.checked;
});

document.querySelectorAll('.nav__list a').forEach(link => {
  link.addEventListener('click', function() {
    toggle.checked = false;
  });
});

let scrollPosition = 0;
toggle.addEventListener('change', function() {
  if (toggle.checked) {
    scrollPosition = window.pageYOffset;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
  } else {
    document.body.style.position = '';
    document.body.style.top = '';
    document.body.style.width = '';
    window.scrollTo(0, scrollPosition);
  }
});

window.addEventListener('DOMContentLoaded', () => {
  const deals = document.querySelectorAll('.week__list .deal');
  if (deals.length === 0) return;

  const hoje = new Date().getDay();

  if (hoje === 0 || hoje === 6) {
    deals.forEach(deal => deal.classList.remove('deal--hot'));
    return;
  }

  const indiceDia = hoje - 1;

  deals.forEach((deal, index) => {
    if (index === indiceDia) {
      deal.classList.add('deal--hot');
    } else {
      deal.classList.remove('deal--hot');
    }
  });
});
