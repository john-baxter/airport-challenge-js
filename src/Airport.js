function Airport(capacity = 5) {
  this._weather = new Weather;
  this._planes = [];
  this._capacity = capacity;
}

Airport.prototype.land = function (plane) {
  if(this._weather.isStormy() === true) {throw new Error("The weather is stormy")}
  if(!this.full()) this._planes.push(plane);
  plane.flying = false;
}
Airport.prototype.takeOff = function (plane) {
  if(this._weather.isStormy() === true) {throw new Error("The weather is stormy")}
  this._planes = this._planes.filter(p => {
    p.flying == false;
  });
  plane.flying = true;
}
Airport.prototype.planes = function () {
  return this._planes;
}
Airport.prototype.capacity = function () {
  return this._capacity;
}
Airport.prototype.full = function () {
  return this.planes().length >= this.capacity();
}
