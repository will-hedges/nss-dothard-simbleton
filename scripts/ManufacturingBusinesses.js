import { renderCompanyHTML } from "./BusinessList.js";
import { getBusinesses } from "./database.js";

const businesses = getBusinesses();

const manufacturingFilter = (businessObj) => {
  if (businessObj.companyIndustry === "Manufacturing") {
    return true;
  }
  return false;
};

export const ManufacturingCompanies = () => {
  // filter out the manufacturing companies
  const manufacturingBusinesses = businesses.filter(manufacturingFilter);
  const manufacturingHTMLStrings = [];
  // for each manufacturer, make an HTML string
  manufacturingBusinesses.forEach((businessObj) => {
    manufacturingHTMLStrings.push(renderCompanyHTML(businessObj));
  });
  // join and return all the strings
  return manufacturingHTMLStrings.join("<hr>") + "<hr>";
};
