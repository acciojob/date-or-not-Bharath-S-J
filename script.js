var isDate = function (input) {
  //   write your code here
	if (Object.prototype.toString.call(input) === "[object Date]" && !isNaN(input.getTime())) {
        return true;
    }

    // Try to parse if it's not already a Date object
    const parsed = new Date(input);
    return !isNaN(parsed.getTime());
};

// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
