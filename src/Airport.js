function Airport() {
  this._planes = [];
}

Airport.prototype.land = function (plane) {
  this._planes.push(plane);
  plane.flying = false;
}
Airport.prototype.takeOff = function (plane) {
  this._planes = this._planes.filter(p => {
    p.flying == false;
  });
  plane.flying = true;
}
Airport.prototype.planes = function () {
  return this._planes;
}