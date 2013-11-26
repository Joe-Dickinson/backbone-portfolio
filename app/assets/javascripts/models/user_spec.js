describe("The User Model", function() {
  var user;

  beforeEach(function() {
    user = new app.models.User();
  });

  it("should have a firstName", function() {
    expect(user.get("firstName")).toBe("Dan");
  });
});