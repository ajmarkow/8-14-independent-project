$(document).ready(function () {
  $("form").submit(function () {
    const beverage = $("#beverage").val();
    const timeofday = $("#timeofday").val;
    const typeofapplications = $("#typeofapplications").val();
    $('#theanswer').replaceWith("Test");
    event.preventDefault();
  });

  $('#darktoggle').change(function () {
    if ($('#darktoggle').is(':checked')) {
      $('body').addClass("inverted");
    }
    else if ($('#darktoggle').is !== (':checked')) {
      $('body').removeClass("inverted");
    }
  });
});



/* Function to change answer if input changes */
