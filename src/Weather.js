function Weather() { }

Weather.prototype.isStormy = function() {
  let choice = [true, false];
  return choice[(Math.floor(Math.random() * 2))]
};