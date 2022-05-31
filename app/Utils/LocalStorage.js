import { ProxyState } from "../AppState.js";
import { Reservation } from "../Models/Reservation.js";
import { Trip } from "../Models/Trip.js";

// REVIEW make your own LocalStorage.js dont know why that was such a pain but it was and it took more time than necessary looking for a local storage. Additionally below study up on set item, get item, JSON.stringify, JSON.parse, and map
export function saveState() {
  let data = {
    trips: ProxyState.trips,
    reservations: ProxyState.reservations
  }
  window.localStorage.setItem('TripPlanner', JSON.stringify(data))
}

export function loadState() {
  let data = window.localStorage.getItem('TripPlanner')
  if (data) {
    let obj = JSON.parse(data)
    ProxyState.trips = obj.trips.map(td => new Trip(td))
    ProxyState.reservations = obj.reservations.map(rd => new Reservation(rd))
  }
}