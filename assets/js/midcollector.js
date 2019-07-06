document.addEventListener("DOMContentLoaded", function() {
   console.log('Add images to payment option...');
   Ecwid.OnPageLoad.add(function(page) {
        console.log("MidCollector page load handler: ", page.type);
  });
});