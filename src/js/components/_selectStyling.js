const setOption = (opt, container) => {
  if (!opt.id) {
    return opt.text.toUpperCase();
  }
  let $opt = $(opt.element);
  $(container).addClass('lang-switch__option');

  let img = $opt.attr('data-image');

  if (!img) {
    return opt.text;
  } else {
    return $(
      '<span><img src="' +
        img +
        '" width="38" /><span> ' +
        opt.text +
        '</span> </span>'
    );
  }
};

const langSwitcher = function () {
  $('.lang-switch').select2({
    minimumResultsForSearch: -1,
    width: '100%',
    templateResult: setOption,
    templateSelection: setOption,
  });

  $('.lang-switch').on('change', evt => {
    let options = evt.currentTarget.options;
    let index = evt.currentTarget.selectedIndex;
    let href = $(options[index]).data('href');
    if (href) window.location = href;
  });
};
langSwitcher();
