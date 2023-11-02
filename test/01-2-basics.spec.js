describe("Module: Band Name Generator", function () {
  describe("Task 10: Create a Band Name Generator", function () {
    // Test if the function exists
    it("should declare a function named generateBandName", function () {
      expect(generateBandName).toBeDefined();
    });

    // Test if the function takes two arguments
    it("should take two arguments", function () {
      expect(generateBandName.length).toBe(2);
    });

    // Test for correct band name generation
    it("should return a correctly formatted band name", function () {
      const bandName1 = generateBandName("red", "apple");
      expect(bandName1).toBe("The Red Apple");

      const bandName2 = generateBandName("blue", "banana");
      expect(bandName2).toBe("The Blue Banana");

      const bandName3 = generateBandName("green", "cake");
      expect(bandName3).toBe("The Green Cake");
    });

    // Test for first letter capitalization
    it("should capitalize the first letter of each word in the band name", function () {
      const bandName1 = generateBandName("reD", "applE");
      expect(bandName1).toBe("The Red Apple");

      const bandName2 = generateBandName("BluE", "bAnAnA");
      expect(bandName2).toBe("The Blue Banana");
    });

    // Test for empty string and null values
    it("should handle empty strings and null values gracefully", function () {
      const bandName1 = generateBandName("", "");
      expect(bandName1).toBe("The  ");

      const bandName2 = generateBandName(null, null);
      expect(bandName2).toBe("The  ");

      const bandName3 = generateBandName("Red", null);
      expect(bandName3).toBe("The Red ");

      const bandName4 = generateBandName(null, "Apple");
      expect(bandName4).toBe("The  Apple");
    });

    // Test for numerical inputs
    it("should handle numerical inputs gracefully", function () {
      const bandName1 = generateBandName(123, 456);
      expect(bandName1).toBe("The 123 456");
    });
  });
});
