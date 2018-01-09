// Import from pusher

self.importScripts('https://js.pusher.com/4.2/pusher.worker.min.js');

function RealtimeHandler() {
  this.something = 'abc';
}

Object.assign(RealtimeHandler.prototype, {
  subscribe: function() {
    var a = 123;
  },

  unsubscribe: function() {
    var b = 456;
  },
});

self.addEventListener('message', function(event) {
  if (!self.handler) {
    self.handler = new RealtimeHandler();
  }

  switch (event.data.action) {
    case 'subscribe':
      self.handler.subscribe(event.data);
      break;
    case 'unsubscribe':
      self.handler.unsubscribe(event.data);
      break;
  }
});
