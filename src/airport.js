var plane = 'planey mcplaneface';

var Airport = function() {
};

var planes_in_airport = [];

Airport.prototype.land_plane = function(plane) {
  planes_in_airport.push(plane);
  return planes_in_airport;
};

Airport.prototype.take_off_plane = function(plane) {
  planes_in_airport.pop(plane);
  return planes_in_airport;
};
