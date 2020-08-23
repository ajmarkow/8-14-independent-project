$(document).ready(function () {
  $("form").submit(function () {
    event.preventDefault();
    const macorpc = $("#operatingsystem").val();
    const beverage = $("#beverage").val();

    if (macorpc == 'mac') {
      $('#theanswer').text("Swift!")
    }
    else if (macorpc == 'pc') {
      $('#theanswer').text("Python!")
    }

    if (beverage == 'coffee') {
      $('#theanswer').text("JavaScript!")
    };
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




