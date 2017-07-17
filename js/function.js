/* Tooltip Boostrap */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Include HTML */
w3.includeHTML();

/* Add Menu */
$(function () {

	$('#sidebar-collapse-btn').on('click', function(event){
		event.preventDefault();

		$("#app").toggleclass("sidebar-open");
	});

	$("#sidebar-overlay").on('click', function() {
		$("#app").removeclass("sidebar-open");
	});

});
