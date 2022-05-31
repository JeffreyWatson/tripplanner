import { ProxyState } from "../AppState.js";
import { tripsService } from "../Services/TripsService.js";
import { loadState, saveState } from "../Utils/LocalStorage.js";
import { Pop } from "../Utils/Pop.js";

function _drawTrips() {
  let trips = ProxyState.trips
  let template = ''
  trips.forEach(t => template += t.Template)
  document.getElementById('trips').innerHTML = template
}

export class TripsController {
  constructor() {
    ProxyState.on('trips', _drawTrips)
    ProxyState.on('reservations', _drawTrips)
    ProxyState.on('trips', saveState)
    ProxyState.on('reservations', saveState)
    loadState()
    _drawTrips()
  }


  addTrip() {
    window.event.preventDefault()
    console.log("adding a trip");
    let form = window.event.target
    let tripData = {
      // form.label MUST match the name="" attribute on my input in my html
      name: form.trip.value
    }
    console.log(tripData);
    tripsService.addTrip(tripData)
  }

  async removeTrip(id) {
    if (await confirm('Delete Trip', 'Are You Sure?', 'warning')) {
      tripsService.removeTrip(id)
      Pop.toast('Deleting trip', 'warning')
    }
  }

  addNotes(id) {
    // REVIEW dont forget to let textarea = just like you would let form = and fill out all necessary attributes in the textarea or form. Was a pain to find the problem although it wasnt one of the above and it was my misspelling of ProxyState.trips cover all areas correctly the first time. 
    let textarea = window.event.target
    console.log(textarea);
    tripsService.addNotes(textarea.value, id)
  }

}
