(function() {
  const hiddenTypes = document.currentScript.getAttribute('types').split('|');
  const showMine = document.currentScript.getAttribute('showMine');

  const hideIndoors = function() {
    hiddenTypes.forEach(function(description) {
      console.log(`Hiding activities: ${description}`);
      jQuery(`div.media-body:contains(${description})`)
        .closest('div.feed-entry')
        .hide();
      if (showMine) {
        jQuery(`div.media-body a[href='/athletes/${currentAthlete.id}']`)
          .closest('div.feed-entry')
          .show();
      }
    });
  };

  jQuery(document).ready(function() {
    console.log('Watching feed for indoor activities...');
    hideIndoors();
    initActions = (function() {
      const original = initActions;
      return function() {
        hideIndoors();
        return original.apply(this, arguments);
      };
    })();
  });
})();
