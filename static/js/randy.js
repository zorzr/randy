function randInt(start, end) {
    start = Math.ceil(start);
    end = Math.floor(end);
    return Math.floor(Math.random() * (end - start + 1)) + start;
}

function generateInt() {
	var start = $('#integer-start').val();
	var end = $('#integer-end').val();
	var random = randInt(start, end);
	$('#integer-random').val(random);
}