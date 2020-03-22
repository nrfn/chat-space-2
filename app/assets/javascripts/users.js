$(function() {
  $("#user-search-field").on("keyup", function() {
    let input = $("#user-search-field").val();
    $.ajax({
      type: "GET",
      url: "/users",
      data: { keyword: input },
      dataType: "json"
    })
    .done(function(user) {
      console.log("成功です");
    })
    .fail(function() {
      console.log("失敗です");
    })
  });
});