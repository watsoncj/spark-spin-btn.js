$.fn.spin = function(enabled) {
  return this.each(function() {
    $this = $(this);
    if (typeof enabled === "boolean" && !enabled) {
      $this.children('i.spin').remove(); 
    } else {
      $this.prepend($('<i class="icon spin"></i>'));
    }
  });
};
