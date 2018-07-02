/*
  <a href="javascript:;" data-toggleclass-target=".j-something">Toggles .is-active on .j-something</a>
  <a href="javascript:;" data-toggleclass-target=".j-something" data-toggleclass-callback>Toggles .is-active on .j-something, then invoke callback function</a>
  <a href="javascript:;" data-toggleclass-target=".j-something" data-toggleclass-closest>Toggles .aClass on the closest .j-something element only (and itself if already)</a>
  <a href="javascript:;" data-toggleclass-target=".j-something" data-toggleclass="aClass">Toggles .aClass on .j-something</a>
  <a href="javascript:;" data-toggleclass-target=".j-something" data-toggleclass-exclusive="aClass">Toggles .aClass on .j-something and removes .aClass from .j-something's siblings</a>
  <a href="javascript:;" data-toggleclass-target=".j-something" data-toggleclass-add="aClass">Adds .aClass on .j-something</a>
  <a href="javascript:;" data-toggleclass-target=".j-something" data-toggleclass-remove="aClass">Removes .aClass from .j-something</a>
  <a href="javascript:;" data-toggleclass-target=".j-something" data-toggleclass-remove="aClass" data-toggleclass-add="bClass">Removes .aClass from .j-something and adds .bClass to it</a>
  <a href="javascript:;" class="js-toggleclass-disabled" data-toggleclass-target=".j-something">Does nothing</a>
*/

$(document).on("click", "[data-toggleclass-target]", function () {
  var $this = $(this);

  if (!$this.hasClass("js-toggleclass-disabled")) {
    var
      target = $($this).data('toggleclass-target'),
      $target = ($this.data('toggleclass-closest') !== undefined) ? $($this).parent().closest(target).end().addBack().closest(target).addBack() : $(target),
      exclusive = $this.data("toggleclass-exclusive") === "" ? "is-active" : $this.data("toggleclass-exclusive"),
      callback = $this.data("toggleclass-callback");
    //var
    if (exclusive)
      $target.toggleClass(exclusive).siblings().removeClass(exclusive);
    else {
      var
        add = $this.data("toggleclass-add"),
        remove = $this.data("toggleclass-remove");
      //var
      $target.toggleClass($this.data("toggleclass") || (add || remove ? "" : "is-active")).addClass(add).removeClass(remove);
    }
    if (!!callback) {
      if (callback.indexOf('.') !== -1) {
        callback = callback.split('.');
        var callbackStack = callback.reduce(function (acc, curr) {
          return acc[curr];
        }, window);
        callbackStack(this);
      } else
        window[callback](this);
    }

    return false;
  }
});
