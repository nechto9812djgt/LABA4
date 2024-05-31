const linkbtn = document.getElementById('slider');
    const sliderContainer = document.querySelector('.slider');

    linkbtn.addEventListener('click', function() {
        if (sliderContainer.style.display === 'none') {
            sliderContainer.style.display = 'block';
            linkbtn.textContent = 'Закрыть слайдер';
        } else {
            sliderContainer.style.display = 'none';
            linkbtn.textContent = 'Открыть слайдер';
        }
    });