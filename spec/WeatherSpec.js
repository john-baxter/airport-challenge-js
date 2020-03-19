describe("Weather", function() {
  let weather;
  beforeEach(function(){ 
    weather = new Weather()
  })
  it("can be stormy", function() {
    spyOn(weather, "isStormy").and.returnValue(true)
    expect(weather.isStormy()).toEqual(true)
  })
  it("can be not stormy (aka sunny)", function() {
    spyOn(weather, "isStormy").and.returnValue(false)
    expect(weather.isStormy()).toEqual(false)
  })
})
