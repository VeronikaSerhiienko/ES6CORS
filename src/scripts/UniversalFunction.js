const UniversalFunction = sampleUrl => {
  return new Promise((resolve, reject) => {
    const requestUrl = new XMLHttpRequest();
    requestUrl.open('GET', sampleUrl, true);
    requestUrl.onload = () => {
      if (requestUrl.status === 200) {
        resolve(requestUrl.responseText);
      } else {
        const error = new Error(requestUrl.statusText);
        error.code = requestUrl.status;
        reject(error);
      }
    };

    requestUrl.onerror = function() {
      reject(new Error('Network Error'));
    };

    requestUrl.send();
  });
};

export { UniversalFunction };
