import { generateId } from "../Utils/generateId.js"


export class Reservation {
  constructor(data) {
    this.id = data.id || generateId()
    this.tripId = data.tripId
    this.type = data.type
    this.name = data.name
    this.confirmationNumber = data.confirmationNumber
    this.address = data.address
    // REVIEW use this date format. Looks super clean. Dont forget!
    this.date = new Date(data.date)
    this.cost = data.cost
  }

  // REVIEW ask about the this.date.toDateString()
  get Template() {
    return `
  <div class="card-body bg-dark text-light">
    <div class="row">
      <div class="col-1 d-flex justify-content-center pe-4">${this.type}</div>
      <div class="col-2 d-flex justify-content-center">${this.name}</div>
      <div class="col-3 d-flex justify-content-center">${this.confirmationNumber}</div>
      <div class="col-3 d-flex justify-content-center ps-3">${this.address}</div>
      <div class="col-2 d-flex justify-content-center ps-4">${this.date.toDateString()}</div>
      <div class="col-1 d-flex justify-content-center ps-3">${this.cost}</div>
    </div>
    <i class="mdi mdi-delete selectable d-flex justify-content-center" onclick="app.reservationsController.removeReservation('${this.id}')"></i>
  </div>
  `
  }
}