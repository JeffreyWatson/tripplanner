import { ProxyState } from "../AppState.js";
import { Trip } from "../Models/Trip.js";


class TripsService {
  addTrip(tripData) {
    ProxyState.trips = [...ProxyState.trips, new Trip(tripData)]
  }

  removeTrip(id) {
    ProxyState.trips = ProxyState.trips.filter(t => t.id != id)
  }

  addNotes(notes, id) {
    // REVIEW why wont it save in real time????
    let trip = ProxyState.trips.find(t => t.id == id)
    trip.notes = notes
    // UPDATE dont be a dummy and forget to spell the word trips instead of trip. 2 hours wasted.
    // UPDATE again
    ProxyState.trips = ProxyState.trips
  }

}

export const tripsService = new TripsService()