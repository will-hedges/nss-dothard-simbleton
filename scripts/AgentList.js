import { getBusinesses } from "./database.js";

const businesses = getBusinesses();

// go through all the businesses
export const AgentNames = () => {
  // make a new agent obj based on the original array using map
  const agentHTMLRepresentations = businesses.map(
    // callback function
    (business) => {
      const agentHTML = `
        <section class="agent">
          <h3 class="agent__name">${business.purchasingAgent.nameFirst} ${business.purchasingAgent.nameLast}</h3>
          <h4 class="agent__company">${business.companyName}</h4>
          <h4 class="agent__phoneNumber">${business.phoneWork}</h4>
        </section>
        <hr>`;
      return agentHTML;
    }
  );
  const finalHTML = agentHTMLRepresentations.join("");
  return finalHTML;
};
