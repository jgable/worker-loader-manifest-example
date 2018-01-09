import RealtimeWorker from 'workers/realtime.worker';

class Thing {
  constructor() {
    this.worker = new RealtimeWorker();
    this.worker.addEventListener('message', (event) => {
      console.log('MESSAGE!', event);
    });
  }

  something() {
    console.log('Something');
    this.worker.postMessage({action: 'subscribe', data: {something: true}});
  }
}

const thing = new Thing();

thing.something();

export default thing;
