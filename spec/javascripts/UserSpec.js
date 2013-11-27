describe("The User Model", function() {
  var user;

  beforeEach(function() {
    user = new app.models.User({
      firstName: "Dan",
      lastName: "Garland"
    });
  });

  it("should have a firstName", function() {
    expect(user.get("firstName")).toBe("Dan");
  });

  it("should have a lastName", function() {
    expect(user.get("lastName")).toBe("Garland");
  });

  it("should have a Name", function() {
    expect(user.getName()).toBe("Dan Garland");
  });

  it("should have a cid", function() {
    expect(user.cid).not.toBeNull();
  });

  it("should not have an id", function() {
    expect(user.id).toBeUndefined();
  })

  describe("Persistance in local storage", function() {
    beforeEach(function() {
      user.save();
    });

    it("should now have an id", function() {
      expect(user.id).not.toBeNull();
    });

    it("should also be able to retreive it from the store", function() {
      var user = new app.models.User({ id: user.id });
      new_user.fetch();
      expect(new_user.get("firstName")).toBe("Dan");
      expect(new_user.get("lastName")).toBe("Garland");
    });
  });

  describe("fullName", function() {
    var user;
    beforeEach(function() {
      user = new app.models.User();
    }); //

    describe("firstName only", function() {
      beforeEach(function() {
        user.set("firstName", "Dan");
      });

      it("should set only the firstName", function() {
        expect(user.get("fullName")).toBe("Dan");
      });
    });

    describe("lastName only", function() {
      beforeEach(function() {
        expect(user.set("lastName")).toBe("Garland");
      });

      it("should set only the lastName", function() {
        expect(user.get("lastName")).toBe("Garland");
      });
    });

    describe("both firstName and lastName", function() {
      beforeEach(function() {
        user.set("firstName", "Dan");
        user.set("lastName", "Garland");
      });

      it("should set only the firstName", function() {
        expect(user.get("fullName")).toBe("Dan Garland");
      });
    });

    describe("validation", function() {
      it("should be invalid without firstName", function() {
        user.set("firstName", undefined);
        expect(user.isValid()).toBeFalsy();
        expect(user.validationError.message).toEqual("First Name must be defined");
      });

      it("should be invalid without firstName", function() {
        user.set("lastName", undefined);
        expect(user.isValid()).toBeFalsy();
        expect(user.validationError.message).toEqual("Last Name must be defined");
      });

      it("should be invalid without a firstName", function() {
        user.set("bio", undefined);
        expect(user.isValid()).toBeFalsy();
        expect(user.validationError.message).toEqual("Bio must be defined");
      });

      it("should be invalid without a Mission", function() {
        user.set("mission", undefined);
        expect(user.isValid()).toBeFalsy();
        expect(user.validationError.message).toEqual("Mission must be defined");
      });
    });
  });
});

