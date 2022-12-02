import { getBusinesses } from "./database.js";
import { renderCompanyHTML } from "./BusinessList.js";

const businesses = getBusinesses();

const nyFilter = (businessObj) => {
  if (businessObj.addressStateCode === "NY") {
    return true;
  }
  return false;
};

export const NYCompanies = () => {
  // filter out the NY companies
  const nyBusinesses = businesses.filter(nyFilter);
  const nyHTMLStrings = [];
  // for each NY company, make an html string
  nyBusinesses.forEach((businessObj) => {
    nyHTMLStrings.push(renderCompanyHTML(businessObj));
  });
  // put all of the NY company strings together
  // return the full NY companies string
  return nyHTMLStrings.join("<hr>") + "<hr>";
};
