config.withFilteredTypes(function(types) {
  let s = document.createElement('script');
  s.setAttribute('types', types.join('|'));
  s.src = chrome.extension.getURL('src/monitor.js');
  s.onload = function() {
    this.remove();
  };
  (document.head || document.documentElement).appendChild(s);
});
