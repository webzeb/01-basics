describe("JavaScript Basics Continued", function () {
  beforeEach(function () {
    spyOn(console, "log");
  });

  afterEach(function () {
    console.log.calls.reset();
  });

  describe("Task 6: Control Structures - Conditional Statements", function () {
    it("should define a variable named studentGrade than is of type number", function () {
      expect(studentGrade).toBeDefined();
      expect(typeof studentGrade).toBe("number");
    });
    it("should declare a function named gradeCommentary that takes no arguments", function () {
      expect(gradeCommentary).toBeDefined();
      expect(gradeCommentary.length).toBe(0);
    });
    it("should log 'Excellent work!' for a grade of 90 or above", function () {
      studentGrade = 90;
      gradeCommentary();
      expect(console.log).toHaveBeenCalledWith("Excellent work!");
    });

    it("should log 'Good job!' for grades between 80 and 89", function () {
      studentGrade = 85;
      gradeCommentary();
      expect(console.log).toHaveBeenCalledWith("Good job!");
    });

    it("should log 'You passed.' for grades between 70 and 79", function () {
      studentGrade = 75;
      gradeCommentary();
      expect(console.log).toHaveBeenCalledWith("You passed.");
    });

    it("should log 'Needs improvement.' for grades below 70", function () {
      studentGrade = 65;
      gradeCommentary();
      expect(console.log).toHaveBeenCalledWith("Needs improvement.");
    });
  });

  describe("Task 7: Control Structures - Loops", function () {
    it("should declare a function named logNumbers that takes no arguments", function () {
      expect(logNumbers).toBeDefined();
      expect(logNumbers.length).toBe(0);
    });
    it("should log numbers from 1 to 10", function () {
      logNumbers();
      for (let i = 1; i <= 10; i++) {
        expect(console.log).toHaveBeenCalledWith(i);
      }
    });
    it("should declare a function named countByTwos that takes no arguments", function () {
      expect(countByTwos).toBeDefined();
      expect(countByTwos.length).toBe(0);
    });
    it("should log even numbers from 2 to 20", function () {
      countByTwos();
      for (let i = 2; i <= 20; i += 2) {
        expect(console.log).toHaveBeenCalledWith(i);
      }
    });
    it("should declare a function named triangle that takes no arguements", function () {
      expect(triangle).toBeDefined();
      expect(triangle.length).toBe(0);
    });
    it("should log a seven line triangle of # characters", function () {
      triangle();
      for (let i = 1; i <= 7; i++) {
        expect(console.log).toHaveBeenCalledWith("#".repeat(i));
      }
    });
  });

  describe("Task 8: More on Functions", function () {
    it("should declare a function named calculateArea that takes two arguments: length and width", function () {
      expect(calculateArea).toBeDefined();
      expect(calculateArea.length).toBe(2);
    });
    it("should calculate area correctly", function () {
      expect(calculateArea(5, 10)).toEqual(50);
      expect(calculateArea(0, 10)).toEqual(0);
      expect(calculateArea(-5, 10)).toBeNaN(); // Edge case: Negative dimensions are not physically meaningful, so expect a NaN
    });
    it("should declare a function expression named greetPerson that takes a name as an argument", function () {
      expect(greetPerson).toBeDefined();
      expect(greetPerson.length).toBe(1);
    });
    it("should greet a person correctly", function () {
      greetPerson("Alice");
      expect(console.log).toHaveBeenCalledWith("Hello, Alice!");
    });
  });

  describe("Task 9: Objects and Properties", function () {
    it("should declare an object named book with properties: title, author, and year", function () {
      expect(book).toBeDefined();
      expect(book.title).toBeDefined();
      expect(book.author).toBeDefined();
      expect(book.year).toBeDefined();
    });
    it("should declare a function named logBookTitle that takes no arguments", function () {
      expect(logBookTitle).toBeDefined();
      expect(logBookTitle.length).toBe(0);
    });
    it("should log the book's title correctly", function () {
      logBookTitle();
      expect(console.log).toHaveBeenCalledWith(book.title);
    });
    it("should declare a function named updateYear that takes no arguments", function () {
      expect(updateYear).toBeDefined();
      expect(updateYear.length).toBe(0);
    });
    it("should update the book's year correctly", function () {
      let currentYear = new Date().getFullYear();
      updateYear();
      expect(book.year).toEqual(currentYear);
    });
    it("should declare a function named addGenre that takes no arguments", function () {
      expect(addGenre).toBeDefined();
      expect(addGenre.length).toBe(0);
    });
    it("should add a genre property to the book", function () {
      addGenre();
      expect(book.genre).toBeDefined();
    });
  });
});
