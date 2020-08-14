$(document).ready(function () {
  $("form").submit(function () {
    const beverage = $("#beverage").val();
    const timeofday = $("#timeofday").val;
    const typeofapplications = $("#typeofapplications").val();
    const macorpc = $("#operatingsystem").val();
    const favoritecolor = $("#favoritecolor").val();
    $('#theanswer').replaceWith(macorpc);
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
