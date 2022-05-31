import { ReservationsController } from "./Controllers/ReservationsController.js";
import { TripsController } from "./Controllers/TripsController.js";

class App {
  tripsController = new TripsController();
  reservationsController = new ReservationsController()
  // REVIEW  why did my templates register once i added valuescontroller after the fact.
}

window["app"] = new App();
