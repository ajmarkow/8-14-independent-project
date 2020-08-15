$(document).ready(function () {
  $("form").submit(function () {
    const beverage = $("#beverage").val();
    const timeofday = $("#timeofday").val();
    const typeofapplications = string$("#typeofapplications").val();
    const macorpc = $("#operatingsystem").val();
    const favoritecolor = $("#favoritecolor").val();
    alert(favoritecolor + macorpc)
    if ($(macorpc === "mac")) {
      $('#theanswer').text("Swift!");
    } else if ($(macorpc === "pc")) {
      $('#theanswer').text("Python!");
    }
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
