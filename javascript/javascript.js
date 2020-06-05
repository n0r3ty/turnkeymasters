//Pop up Code for Measurmets Request//

let toggleModal = () => {
  document.querySelector('.modal1')
  .classList.toggle('model1-hidden');
};

document.querySelector('#Request-Free')
  .addEventListener('click', toggleModal);


document.querySelector('#learn-more')
    .addEventListener('submit', (event) => {
    event.preventDefault();
    toggleModal();
  });

document.querySelector('.model1__close-bar span')
  .addEventListener('click', toggleModal);
