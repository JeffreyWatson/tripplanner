import { ProxyState } from "../AppState.js";
import { reservationsService } from "../Services/ReservationsService.js";
import { Pop } from "../Utils/Pop.js";


export class ReservationsController {
  constructor() {
    // REVIEW why cant you get it to update in real time or order without page reload.
    ProxyState.reservations.sort((a, b) => a.date - b.date)
    ProxyState.reservations = ProxyState.reservations
    ProxyState.trips = ProxyState.trips
  }

  addReservation(tripId) {
    window.event.preventDefault()
    // REVIEW window.event.target
    let form = window.event.target
    let resData = {
      tripId: tripId,
      type: form.type.value,
      name: form.name.value,
      confirmationNumber: form.confirmationNumber.value,
      address: form.address.value,
      date: form.date.value,
      cost: form.cost.value
    }
    reservationsService.addReservation(resData)
  }

  // REVIEW the purpose behind async and remember to wrap you function in a if statement to make sure you content isnt deleted even when the warning message pops up.
  async removeReservation(id) {
    if (await Pop.confirm('Delete Reservation!', 'Are you sure?', 'warning')) {
      reservationsService.removeReservation(id)
      Pop.toast('Deleting Reservations', 'warning')
    }
  }

}