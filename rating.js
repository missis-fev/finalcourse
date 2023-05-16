const form = document.querySelector('.form');
    const buttonS = document.querySelectorAll('.rating_sign_input');
    const comment = document.querySelector('.rating_comment');

    buttonS.forEach((radio) => {
        radio.addEventListener('change', function () {
            const checkedNumber = document.querySelector('.rating_sign_input:checked').value || undefined;

        buttonS.forEach((item) => {
            const currentLabel = item.previousElementSibling;
            (item.value <= checkedNumber) ?
                currentLabel.classList.add('check') :         currentLabel.classList.remove('check');
            
            });
        });
    });