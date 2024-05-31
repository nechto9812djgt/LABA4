document.getElementById('our_cats').addEventListener('click', function(e) {
    e.preventDefault();
    document.getElementById('cats').style.display = 'block';
  });
document.getElementById('about').addEventListener('click', function(e) {
    e.preventDefault();
    const endOfPage = document.getElementById('end');
    endOfPage.scrollIntoView({ behavior: 'smooth' });
    });