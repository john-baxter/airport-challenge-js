describe("Airport", function () {
  var airport;

  beforeEach(function () {
    airport = new Airport;
  })

  it("stores planes", function () {
    expect(airport.planes()).toEqual([]);
  })

  it("can instruct a plane to land", function () {
    plane = new Plane;
    airport.land(plane);
    expect(airport.planes()).toEqual(jasmine.arrayContaining([plane]));
  })

  it("can instruct a plane to take off", function () {
    plane = new Plane;
    airport.land(plane);
    airport.takeOff(plane);
    expect(airport.planes()).toEqual([]);
  })
})