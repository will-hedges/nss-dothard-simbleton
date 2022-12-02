import { getBusinesses } from "./database.js";

const businesses = getBusinesses();

export const renderCompanyHTML = (businessObj) => {
  const companyHTML = `
    <section class="business">
      <h3 class="business__name">${businessObj.companyName}</h3>
      <p class="business__address">
        ${businessObj.addressFullStreet}
        <br>
        ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}  
      </p>
  </section>`;
  return companyHTML;
};

// make and export a list of all businesses
export const AllBusinesses = () => {
  const allBusinessesList = [];
  businesses.forEach((businessObj) => {
    allBusinessesList.push(renderCompanyHTML(businessObj));
  });
  return allBusinessesList.join("<hr>") + "<hr>";
};
