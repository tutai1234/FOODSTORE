let preveiwContainer = document.querySelector('.page_product-preview');
let previewBox = preveiwContainer.querySelectorAll('.page_product-preview-list');

document.querySelectorAll('.page_product-list .page_product-item').forEach(product => {
    product.onclick = () => {
        preveiwContainer.style.display = 'flex';
        let name = product.getAttribute('data-name');
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target');
            if (name == target) {
                preview.classList.add('active');
            }
        });
    };
});

previewBox.forEach(close => {
    close.querySelector('.fa-times').onclick = () => {
        close.classList.remove('active');
        preveiwContainer.style.display = 'none';
    };
});



