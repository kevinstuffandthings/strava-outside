const page = document.getElementById('options_div');
const manifestData = chrome.runtime.getManifest();

['name', 'description', 'author', 'version'].forEach(function(item) {
  if ((element = document.getElementById(item))) {
    element.innerText = manifestData[item];
  }
});

config.use(function(data) {
  Object.keys(data)
    .sort()
    .forEach(function(activityType, i) {
      let id = `cb${i}`;
      let checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.setAttribute('id', id);
      chrome.storage.local.get({[activityType]: !!data[activityType]}, function(
        settings,
      ) {
        checkbox.checked = settings[activityType];
      });

      let label = document.createElement('label');
      label.setAttribute('htmlFor', id);
      label.appendChild(document.createTextNode(activityType));

      checkbox.addEventListener('click', function() {
        let checked = checkbox.checked;
        chrome.storage.local.set({[activityType]: checked}, function() {});
      });

      let div = document.createElement('div');
      div.setAttribute('class', 'activity');
      div.appendChild(checkbox);
      div.appendChild(label);
      page.appendChild(div);
    });
});
