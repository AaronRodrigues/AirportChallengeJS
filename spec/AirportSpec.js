describe("Airport", function(){
  var airport;
  var plane ;

  beforeEach(function(){
    airport = new Airport();
    plane = 'plane';
  });

  it("should allow planes to land", function(){
    airport.land_plane(plane);
    expect(planes_in_airport).toEqual([plane]);
  });

  it("should instruct a plane to take off and confirm that it is gone", function(){
    airport.take_off_plane(plane);
    expect(planes_in_airport).toEqual([]);
  });
});
