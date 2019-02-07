(function() {
  const hiddenTypes = document.currentScript.getAttribute('types').split('|');

  const hideIndoors = function() {
    hiddenTypes.forEach(function(description) {
      // TODO: maybe use currentAthlete.id to still show
      // a user's own stupid inside activities?
      console.log(`Hiding activities: ${description}`);
      jQuery(`div.media-body:contains(${description})`)
        .closest('div.feed-entry')
        .hide();
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
