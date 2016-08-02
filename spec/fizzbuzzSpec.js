describe('Javabuzz', function() {
  var javabuzz;

  beforeEach(function() {
    javabuzz = new Javabuzz();
  });

  describe('knows when a number is', function() {
    it ('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(6)).toBe(true);
    });
    it ('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(10)).toBe(true);
    });
    it ('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(30)).toBe(true);
    });
  });

  describe('knows when a number is NOT', function() {
    it ('divisible by 3', function() {
      expect(javabuzz.isDivisibleByThree(7)).toBe(false);
    });
    it ('divisible by 5', function() {
      expect(javabuzz.isDivisibleByFive(9)).toBe(false);
    });
    it ('divisible by 15', function() {
      expect(javabuzz.isDivisibleByFifteen(31)).toBe(false);
    });
  });

  describe('when playing, says', function() {

    it('"Java" when a number is divisible by 3', function() {
      expect(javabuzz.says(3)).toEqual("Java");
    });

    it('"Buzz" when a number is divisible by 5', function() {
      expect(javabuzz.says(5)).toEqual("Buzz");
    });

    it('"Javabuzz" when a number is divisible by 15', function() {
      expect(javabuzz.says(15)).toEqual("Javabuzz");
    });

    it('returns the number when it is not divisible by 3, 5 or 15', function() {
      expect(javabuzz.says(7)).toEqual(7);
    });
  });
});
