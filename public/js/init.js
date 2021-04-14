$(document).ready(function() {
  //   init sidenav
  $(".sidenav").sidenav();

  //initi datapicker
  $(".datepicker").datepicker();

  //hiding btn text on width
  $(window).resize(() => {
    var width = $(window).width();
    if ($(this).width() <= 682) {
      $(".btn-text").addClass("hide");
    } else {
      $(".btn-text").removeClass("hide");
    }
  });

  // preview of uploaded image.
  document.getElementById("files").onchange = function() {
    var reader = new FileReader();

    reader.onload = function(e) {
      // get loaded data and render thumbnail.
      document.getElementById("image").src = e.target.result;
    };

    // read the image file as a data URL.
    reader.readAsDataURL(this.files[0]);
  };

  //initialize fee of month
  $("select").formSelect();

  //valading forms
  $("#admission_form").on("submit", () => {
    console.log("jai bholenath ki");
  });
});
