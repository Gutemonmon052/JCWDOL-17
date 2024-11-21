class QueueSim {
  queue: Array<string> = [];
  interval:number = 0;
  orderQueque:string = ''

  // constructor(order: string) {
  //   this.orderQueque = order
  // }

  addQueue(order: string) {
    this.queue.push(order);
  }

  prcsQueue() {
    return new Promise((resolve, reject) => {
      this.interval = Math.floor(Math.random() * 5);
      setTimeout(() => {
        resolve(this.queue.shift());
      }, this.interval * 1000);
    });
  }

  printResQueue() {
      console.log(this.queue);
  }
}

const savequeue = new QueueSim();

savequeue.addQueue("Order 1");
savequeue.addQueue("Order 2");
savequeue.addQueue("Order 3");
savequeue.addQueue("Order 4");

savequeue.printResQueue();

async function runProcess() {
  while (savequeue.queue.length > 0) {
    const order = await savequeue.prcsQueue();
    console.log(`Queue ${order} Done in ${savequeue.interval} seconds`);
  }
}

runProcess()