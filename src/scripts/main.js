'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle').addEventListener('click', () => {
    const textStarter = document.getElementById('price-starter');
    const textProfessional = document.getElementById('price-professional');
    const textCompany = document.getElementById('price-company');

    if (
      textStarter.innerHTML === '$19'
      && textProfessional.innerHTML === '$54'
      && textCompany.innerHTML === '$89'
    ) {
      textStarter.innerHTML = '$12';
      textProfessional.innerHTML = '$36';
      textCompany.innerHTML = '$56';
    } else {
      textStarter.innerHTML = '$19';
      textProfessional.innerHTML = '$54';
      textCompany.innerHTML = '$89';
    }
  });
});
