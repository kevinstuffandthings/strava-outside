config = {
  activityTypes: ['Flywheel', 'Peloton', 'Sufferfest', 'Virtual', 'Zwift'],

  withFilteredTypes(callback) {
    config.use(data =>
      callback(
        Object.keys(data)
          .filter(i => data[i])
          .sort(),
      ),
    );
  },

  use(callback) {
    chrome.storage.local.get(null, function(items) {
      if (Object.keys(items).indexOf('_init') < 0) {
        items = {_init: true};
        config.activityTypes.forEach(type => (items[type] = true));
        chrome.storage.local.set(items);
      }
      delete items._init;
      callback(items);
    });
  },
};
