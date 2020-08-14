$(document).ready(function () {
  $("form").submit(function () {
    let beverage = $("#beverage").val();
    let timeofday = $("#timeofday").val();
    let typeofapplications = $("#typeofapplications").val();
    let macorpc = $("#operatingsystem").val();
    let favoritecolor = $("#favoritecolor").val();
    if ($(macorpc === 'mac')) {
      $('#theanswer').text("Swift!");
    } else { }
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
