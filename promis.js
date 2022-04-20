class MyPromise {
  constructor(callBack) {
    this.status = "pending";
    this.fulfilledQueArr = [];
    this.rejectedQueArr = [];

    const resolve = (value) => {
      if (this.status === "pending") {
        this.status = "fulfilled";
        this.value = value;
        this.fulfilledQueArr.forEach((fn) => fn(value));
      }
    };

    const reject = (value) => {
      if (this.status === "pending") {
        this.status = "rejected";
        this.value = value;
        this.rejectedQueArr.forEach((fn) => fn(value));
      }
    };
    callBack(resolve, reject);
  }

  then(fnFulfilled, fnRejected) {
    return new MyPromise((resolve, reject) => {
      if (this.status === "pending") {
        this.fulfilledQueArr.push(() => {
          const newResoleResalt = fnFulfilled(this.value);
          if (newResoleResalt instanceof MyPromise) {
            newResoleResalt.then(resolve, reject);
          } else {
            resolve(newResoleResalt);
          }
        });
        this.rejectedQueArr.push(() => {
          const newRejectResult = fnRejected(this.value);
          if (newRejectResult instanceof MyPromise) {
            newRejectResult.then(resolve, reject);
          } else {
            reject(newRejectResult);
          }
        });
      }

      if (this.status === "fulfilled") {
        const newResoleResalt = fnFulfilled(this.value);
        if (newResoleResalt instanceof MyPromise) {
          newResoleResalt.then(resolve, reject);
        } else {
          resolve(newResoleResalt);
        }
      }

      if (this.status === "rejected") {
        const newRejectResult = fnRejected(this.value);
        if (newRejectResult instanceof MyPromise) {
          newRejectResult.then(resolve, reject);
        } else {
          reject(newRejectResult);
        }
      }
    });
  }
}

const request = (obj) => {
  return new MyPromise((resolve, reject) => {
    let xhr = new XMLHttpRequest();
    xhr.open(obj.method || "GET", obj.url);

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    };
    xhr.onerror = () => reject(xhr.statusText);
    xhr.send();
  });
};

request({
  method: "GET",
  url: "https://jsonplaceholder.typicode.com/todos/1",
}).then((data) => console.log(JSON.parse(data)));
