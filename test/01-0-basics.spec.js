describe("JavaScript Basics Assignment", function () {
  beforeEach(function () {
    // Set up a spy on the console.log method
    spyOn(console, "log").and.callThrough();
  });

  afterEach(function () {
    // Clear all calls after each test
    console.log.calls.reset();
  });

  describe("Task 1: String Manipulation", function () {
    it("should define firstName, middleName, and lastName variables", function () {
      expect(firstName).toBeDefined();
      expect(middleName).toBeDefined();
      expect(lastName).toBeDefined();
    });
    it("should declare a function named logFullName that takes no arguments", function () {
      expect(logFullName).toBeDefined();
      expect(logFullName.length).toBe(0);
    });
    it("should correctly concatenate names into fullName and log it", function () {
      logFullName();
      expect(console.log).toHaveBeenCalledWith(
        `${firstName} ${middleName} ${lastName}`
      );
    });
  });

  describe("Task 2: Data Types", function () {
    // Checking the definitions of variables
    it("should define a number variable named age", function () {
      expect(age).toBeDefined();
      expect(typeof age).toBe("number");
    });

    it("should define a boolean variable named isStudent", function () {
      expect(isStudent).toBeDefined();
      expect(typeof isStudent).toBe("boolean");
    });

    it("should define a variable named courses that is an array containing three strings", function () {
      expect(courses).toBeDefined();
      expect(Array.isArray(courses)).toBe(true);
      expect(courses.length).toBe(3);
      courses.forEach((course) => {
        expect(typeof course).toBe("string");
      });
    });

    // Checking the logVariableTypes function
    it("should declare a function named logVariableTypes that takes no arguments", function () {
      expect(logVariableTypes).toBeDefined();
      expect(logVariableTypes.length).toBe(0);
    });

    it("should log the type of each variable when logVariableTypes is called", function () {
      logVariableTypes();
      expect(console.log).toHaveBeenCalledWith("number");
      expect(console.log).toHaveBeenCalledWith("boolean");
      expect(console.log).toHaveBeenCalledWith("object"); // arrays are technically objects in JavaScript
    });
  });

  describe("Task 3: Variables Declaration", function () {
    it("should have the correct values assigned", function () {
      expect(school).toBe("Hogwarts");
      expect(subject).toBe("Potions");
      expect(professor).toBe("Snape");
    });
  });

  describe("Task 4: Basic Operators", function () {
    it("should define a variable x equal to 5", function () {
      expect(x).toBe(5);
    });
    it("should define a variable y equal to 10", function () {
      expect(y).toBe(10);
    });
    it("should correctly log results of arithmetic operations", function () {
      logAddition();
      logSubtraction();
      logMultiplication();
      logDivision();
      expect(console.log).toHaveBeenCalledWith(15);
      expect(console.log).toHaveBeenCalledWith(5);
      expect(console.log).toHaveBeenCalledWith(50);
      expect(console.log).toHaveBeenCalledWith(0.5);
    });
  });

  describe("Task 5: Operator Precedence", function () {
    it("should correctly evaluate and log expressions considering operator precedence", function () {
      logResults();
      expect(console.log).toHaveBeenCalledWith(23);
      expect(console.log).toHaveBeenCalledWith(35);
    });
  });
});
