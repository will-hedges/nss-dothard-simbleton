import { getBusinesses } from "./database.js";

export const BusinessList = () => {
  const businesses = getBusinesses();
  let businessesHTML = "";
  businesses.forEach((businessObj) => {
    businessesHTML += `
      <section class="business">
        <h2 class="business__name">${businessObj.companyName}<h2>
        <p class="business__address">
          ${businessObj.addressFullStreet}
          ${businessObj.addressCity}, ${businessObj.addressStateCode} ${businessObj.addressZipCode}  
        </p>
      </section>`;
  });
  return businessesHTML;
};
