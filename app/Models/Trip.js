import { ProxyState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";



export class Trip {
  constructor(tripData) {
    this.id = tripData.id || generateId()
    this.name = tripData.name
    this.notes = tripData.notes
  }


  // REVIEW a couple things here. onblur is to indicate the user agent that the element has lost focus. The value of this attribute points to a script which is executed when the element loses focus. Next you need to learn how to have the collapse toggle only call upon a single trip instead of all trips at once. When adding app.Controller.function do not forget '' inside of the parenthesis when using string interpolation. Learn how to drop parts of a form into a new row for design purposes example being the add reservations button looks ugly and doesn't help the form align with the above sections.
  get Template() {
    return `
    <div class="card" id="">
    <div class="card-header text-center fw-bold" onclick="app.tripsController.removeTrip('${this.id}')">
    ${this.name}<i class="selectable mdi mdi-minus"></i>
    </div>
    <div class="card-body bg-dark text-light" id="hide">
    <div class="row">
    <div class="col-1 d-flex justify-content-center">Type</div>
    <div class="col-2 d-flex justify-content-center">Name</div>
    <div class="col-3 d-flex justify-content-center">Confirmation</div>
    <div class="col-3 d-flex justify-content-center">Address</div>
    <div class="col-2 d-flex justify-content-center">Date</div>
    <div class="col-1 d-flex justify-content-center pe-3">Cost</div>
    ${this.Reservations}
    </div>
    <span class="d-flex justify-content-end align-items-center pb-1"> Total = $${this.total}</span>
    <textarea onblur="app.tripsController.addNotes('${this.id}')" name="notes" type="text" id="notes" value="text" style="height: 50px">${this.notes}</textarea>
    <div>
    </div>
    </div>
    
      
    <form class="item-form d-flex justify-content-between p-2" onsubmit="app.reservationsController.addReservation('${this.id}')">
    <select class="text-center" name="type" id="type" required>
    <option value="">None</option>
    <option value="✈️">✈️</option>
    <option value="🚗">🚗</option>
    <option value="🏨">🏨</option>
    <option value="🎡">🎡</option>
    </select>
    <input type="text" required="name" name="name" id="name" placeholder="Company Name">
    <input type="text" required="name" name="confirmationNumber" id="confirmationNumber" placeholder="Confirmation number">
    <input type="address" required="address" name="address" id="address" placeholder="Address">
    <input type="date" required="date" name="date" id="date" placeholder="Date">
    <input type="number" required="cost" name="cost" id="cost" min="0" placeholder="Cost">
    <button class="btn btn-primary" title="add reservation">Add reservations</button>
    </form>
    </div>
    `
  }

  // REVIEW the getter and setter methods allow you to define object accessors. Works awesome for injecting a template from reservations to trips like below and for the get total when looking to add up the cost of several different items within the trip. 
  get Reservations() {
    let reservations = ProxyState.reservations.filter(re => re.tripId == this.id)
    let template = ''
    reservations.forEach(re => template += re.Template)
    return template
  }

  get total() {
    let reservations = ProxyState.reservations.filter(re => re.tripId == this.id)
    let resTotal = 0
    // REVIEW parseInt function parses a string argument and returns and integer of the specified radix(the base of mathematical numeral systems) Helpful in this situation to not return a string of all the costs of each particular res and adds them all up to a whole number. 
    reservations.forEach(re => resTotal += parseInt(re.cost))
    return resTotal
  }

}
//     <p>
//   <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">Hide/Show</button>
// </p>