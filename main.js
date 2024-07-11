import { advertisementsData } from './sample-data.js';

document.addEventListener("DOMContentLoaded", function() {
    displayAdvertisements(advertisementsData);
    setupFilter(advertisementsData);
});

const displayAdvertisements = (advertisementsData) => {
    const container = document.getElementById("advertisements");
    container.innerHTML = "";
    advertisementsData.forEach(advertisement => {
      const advertisementCard = createAdvertisementCard(advertisement);
      container.appendChild(advertisementCard);
    });
};

const createAdvertisementCard = (advertisement) => {
    const card = document.createElement("div");
    card.className = "card mb-4 col-md-4";

    const image = document.createElement("img");
    image.src = advertisement.image;
    image.className = "card-img-top mt-2";
    card.appendChild(image);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    card.appendChild(cardBody);

    const title = document.createElement("h5");
    title.className = "card-title";
    title.innerText = advertisement.title;
    cardBody.appendChild(title);

    const description = document.createElement("p");
    description.className = "card-text";
    description.innerText = advertisement.description;
    cardBody.appendChild(description);

    const contact = document.createElement("p");
    contact.className = "card-text";
    contact.innerText = "Contact: ***";
    contact.addEventListener("click", () => {
        if (contact.innerText === "Contact: ***") {
            contact.innerText = `Contact: ${advertisement.contact}`;
          } else {
            contact.innerText = "Contact: ***";
          }
    });
    cardBody.appendChild(contact);

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer text-center";
    card.appendChild(cardFooter);

    const btnDetails = document.createElement("button");
    btnDetails.className = "btn btn-info btn-block";
    btnDetails.innerText = "Details";
    btnDetails.addEventListener('click', () => {
        alert(`Contact: ${advertisement.contact}`);
    });    
    cardFooter.appendChild(btnDetails);

    return card;
};

const setupFilter = (advertisementsData) => {
    const filterInput = document.getElementById("filter-title");
    filterInput.addEventListener("input", function () {
      const contains = filterInput.value.toLowerCase();
      const filteredAdvertisements = advertisementsData.filter((advertisement) =>
        advertisement.title.toLowerCase().includes(contains)
      );
      displayAdvertisements(filteredAdvertisements);
    });
};