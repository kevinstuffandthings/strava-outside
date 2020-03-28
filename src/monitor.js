(function() {
  const hiddenEntries = document.currentScript.getAttribute('types').split('|');
  const hiddenActivityTypes = hiddenEntries.filter((i) => i.charAt(0) != ':');
  const hiddenBlocks = hiddenEntries.filter((i) => i.charAt(0) == ':');

  const _hide = function(selector) {
    jQuery(selector)
      .not(`a[href='/athletes/${currentAthlete.id}']`)
      .closest('div.feed-entry')
      .slideUp(400, function() { jQuery(this).hide() });
  }

  const hideIndoors = function() {
    hiddenActivityTypes.forEach(function(description) {
      if (description) {
        console.log(`Hiding activities: ${description}`);
        ['enhanced-tag', 'activity-map-tags'].forEach(function(tag) {
          _hide(`div.${tag}:contains(${description})`);
        });
      }
    });
  };

  const hideChallenges = function() {
    console.log('Hiding challenges');
    _hide('div.challenge');
  };

  const hideMapless = function() {
    console.log('Hiding mapless activities');
    _hide('div.feed-entry:not(:has(div.activity-map))');
  };

  const hideAll = function() {
    hideIndoors();
    if (hiddenBlocks.indexOf(':challenge') >= 0) {
      hideChallenges();
    }
    if (hiddenBlocks.indexOf(':mapless') >= 0) {
      hideMapless();
    }
  };

  jQuery(document).ready(function() {
    console.log('Watching feed for indoor activities...');
    hideAll();
    initActions = (function() {
      const original = initActions;
      return function() {
        hideAll();
        return original.apply(this, arguments);
      };
    })();
  });
})();
