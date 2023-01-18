$('.lang').selectric({
  disableOnMobile: false,
  nativeOnMobile: false,
  optionsItemBuilder: function (itemData, element, index) {
    $('.selectric-items').removeAttr('style');
    var val = itemData.value.toLowerCase(),
      valIcon = val.toLowerCase();

    if (val == 'zh-TW') {
      valIcon = 'cn';
    } else if (val == 'yi') {
      valIcon = 'in';
    } else if (val == 'ja') {
      valIcon = 'jp';
    } else if (val == 'ar') {
      valIcon = 'ae';
    } else if (val == 'vi') {
      valIcon = 'vn';
    }
    return element.val().length
      ? '<a class="selectric-link" href="#"><img class="selectric-flag" src="./icons/' +
          valIcon +
          '.svg" alt="">' +
          '<span>' +
          itemData.text +
          '</span></a>'
      : itemData.text;
  },
  labelBuilder: function (el) {
    var val = el.value.toLowerCase(),
      valIcon = val.toLowerCase();

    if (val == 'zh-TW') {
      valIcon = 'cn';
    } else if (val == 'yi') {
      valIcon = 'in';
    } else if (val == 'ja') {
      valIcon = 'jp';
    } else if (val == 'ar') {
      valIcon = 'ae';
    } else if (val == 'vi') {
      valIcon = 'vn';
    }

    return (
      '<img class="selectric-flag" src="./icons/' +
      valIcon +
      '.svg" alt="">' +
      '<span>' +
      el.text +
      '</span>'
    );
  },
  onOpen: function () {
    $('.selectric-items').removeAttr('style').addClass('item-active');
  },
  onClose: function () {
    $('.selectric-items').removeClass('item-active');
  },
});
