import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
//anv geolocation
//name- origin : plats på id / koordinater
//stop lookup : https://journeyplanner.integration.sl.se/v2/stop-finder?name_sf=odenplan&any_obj_filter_sf=2&type_sf=any
//här finns slutdestination
//anv stop lookup: visar id för odenplan. destination för url

//https://journeyplanner.integration.sl.se/v2/trips?type_origin=any&type_destination=any&name_origin=9025001000001861&name_destination=9091001000009192&calc_number_of_trips=3
console.log("hej");
