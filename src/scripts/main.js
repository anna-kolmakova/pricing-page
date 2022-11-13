'use strict';

document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('toggle').addEventListener('click', () => {
    const textStarter = document.getElementById('price-starter');
    const textProfessional = document.getElementById('price-professional');
    const textCompany = document.getElementById('price-company');
    const priceStarterMonthly = '$19';
    const priceStarterYearly = '$12';
    const priceProfessionalMonthly = '$54';
    const priceProfessionalYearly = '$36';
    const priceCompanyMonthly = '$89';
    const priceCompanyYearly = '$56';

    if (
      textStarter.innerHTML === priceStarterMonthly
      && textProfessional.innerHTML === priceProfessionalMonthly
      && textCompany.innerHTML === priceCompanyMonthly
    ) {
      textStarter.innerHTML = priceStarterYearly;
      textProfessional.innerHTML = priceProfessionalYearly;
      textCompany.innerHTML = priceCompanyYearly;
    } else {
      textStarter.innerHTML = priceStarterMonthly;
      textProfessional.innerHTML = priceProfessionalMonthly;
      textCompany.innerHTML = priceCompanyMonthly;
    }
  });
});
