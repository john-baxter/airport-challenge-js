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

  describe("airport hangar", function() {
    it("can track the number of planes", function() {
      for(count = 0; count < airport.capacity()-1; count++)
        airport.land(new Plane);
      var pre = airport.planes().length;
      airport.land(new Plane);
      expect(airport.planes().length).toEqual(pre + 1)
    })
      
    it("can not exceed capacity by landing more planes", function() {
      for(count = 0; count < airport.capacity(); count++)
        airport.land(new Plane);
    var pre = airport.planes().length;
    airport.land(new Plane);
    expect(airport.planes().length).toEqual(pre)
    })  
  })

  it("should have a capacity when instantiated", function () {
    expect(airport.capacity()).toBe(5)
  })

  it("should have a default capacity of 5 but be able to be set differently", function() {
    bigAirport = new Airport(6)
    expect(bigAirport.capacity()).toBe(6)
  })

})