module.exports = function getZerosCount(number) {
  // your implementation
    var count = 0;
	for (var i = 2; i <= number; i++) {
		count += factfive(i);
	}
	return count;
}

function factfive(i) {
	var count = 0;
	while (i % 5 == 0) {
		count++;
		i /= 5;
	}
	return count;
}