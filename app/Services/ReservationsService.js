import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";



class ReservationsService {
  addReservation(data) {
    ProxyState.reservations = [...ProxyState.reservations, new Reservation(data)]
  }

  removeReservation(id) {
    ProxyState.reservations = ProxyState.reservations.filter(re => re.id != id)
  }

}

export const reservationsService = new ReservationsService()