function main() {
	$('.projectList').hide();
	$('.projectButton').on('click', function() {
  $(this).next().slideToggle(400);
		$(this).next().textToggle('Here they are:');
	});
}

$(document).ready(main);