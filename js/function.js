/* Tooltip Boostrap */
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

/* Include HTML */
w3.includeHTML();

/* Add Menu */
$( document ).ready(function() {

	$('#sidebar-collapse-btn').on('click', function(event){
		event.preventDefault();
    debugger;

		$("#app").toggleclass("sidebar-open");
	});

	$("#sidebar-overlay").on('click', function() {
		$("#app").removeclass("sidebar-open");
	});

});
