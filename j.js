let previewtrastornos = document.querySelector('.products-preview');
let previewBox = previewtrastornos.querySelectorAll('.preview');

document.querySelectorAll('.products-container.product').forEach(product =>{
  product.onclick = () =>{
    previewtrastornos.style.display = 'flex';
    let name = product.getAttribute('data-name');
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name == target){
        preview.classList.add('active');
      }
    });
  };
});

previewBox.forEach(close =>{
  close.querySelector('.fa-times').onclick = () =>{
    close.classList.remove('active');
    previewtrastornos.style.display = 'none';
  };
});