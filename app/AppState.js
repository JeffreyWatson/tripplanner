import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"

class AppState extends EventEmitter {
  /** @type {import('./Models/Value').Value[]} */
  values = []


  /** @type {import('./Models/Trip').Trip[]} */
  trips = []

  /** @type {import('./Models/Reservation').Reservation[]} */
  reservations = []
}
// REVIEW Remind yourself that when you dont spell the class name right after proxy state you could potentially get a weird error that states the below get. check spelling.
export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
