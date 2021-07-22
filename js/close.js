// var card_category_list = document.getElementsByClassName(
//   "card-category-list child"
// );
// var item = document.getElementsByClassName("card-category-list-item");
// function toggle(t) {
//   var display = t.parentElement.nextSibling.style.display;
//   if (display == "none") {
//     t.parentElement.nextSibling.style.display = "block";
//     t.parentElement.nextSibling.style.height = "100%";
//     t.className = t.className.replace("fa-chevron-up", "fa-chevron-down");
//   } else {
//     t.parentElement.nextSibling.style.display = "none";
//     t.className = t.className.replace("fa-chevron-down", "fa-chevron-up");
//   }
// }

// for (var i = 0; i < card_category_list.length; i++) {
//   card_category_list[i].style.display = "none";
//   card_category_list[i].style.transition = "all 1s";
//   card_category_list[i].previousSibling.innerHTML +=
//     '<i class="fa fa-chevron-up menus-expand  menus-closed" aria-hidden="true" style="margin-left:20px;" οnclick="toggle(this)"></i>';
// }


classifyclick = function (classify) {
  var expan = $(classify).parent().parent().next();
  var temp = expan
  if (expan.css("display") == "none") {
    $(classify).removeClass("fa-chevron-left")
    $(classify).addClass("fa-chevron-down")
    expan.css('height', '');
    expan.css("display", "block");
    height = expan.height();
    expan.css("height", "0px");
    expan.animate({ height: height + 'px' });
    while (temp.parent().hasClass("child")) {
      temp.parent().animate({ height: temp.parent().height() + height + 'px' })
      temp = temp.parent()
    }
  }
  else {
    $(classify).removeClass("fa-chevron-down")
    $(classify).addClass("fa-chevron-left")
    temp_classify = classify;
    height = expan.height();
    expan.animate({ height: '0px' }, { complete: function () { $(temp_classify).parent().parent().next().css("display", "none"); } });
    while (temp.parent().hasClass("child")) {
      temp.parent().animate({ height: (temp.parent().height() - height) + 'px' })
      temp = temp.parent()
    }
  }
}
