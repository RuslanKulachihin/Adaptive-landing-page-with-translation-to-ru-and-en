const menu = document.querySelector('span.tri_poloski');
const menuX = document.querySelector('a.close');
const menuS = document.querySelector('.menu-main-sections-mobile');
const menuZ = document.querySelector('.top-menu');
console.log(menu);

menu.style.display = 'block';
menuX.style.display = 'none';
menuS.style.display = 'none';

menu.onclick = () => {
  if (menu.style.display === 'block') {
    menu.style.display = 'none';
    menuX.style.display = 'inline-block';
    menuS.style.display = 'block';
    menuS.style.position = 'relative';
    menuS.style.left = '0px';
    menuS.style.transitionDuration = '1s ';
    menuZ.style.backgroundColor = '#fff';
    menuZ.style.transitionDuration = '1s ';
    setTimeout(ecd, 2000);
  }
};
menuX.onclick = () => {
  if (menuX.style.display === 'inline-block') {
    menu.style.display = 'block';
    menuX.style.display = 'none';
    menuS.style.position = 'absolute';
    menuS.style.left = '1000px';
    menuS.style.transitionDuration = '2s ';
    menuZ.style.backgroundColor = 'rgba(255, 255, 255, .4)';
    menuZ.style.transitionDuration = '2s ';
    menuS.style.display = 'none';
  }
};
