export default function deleteDataApi(data) {

    return new Promise((resolve, reject) => {
      
      const url = 'http://192.168.1.28:3001/todos/'+data
      fetch(url, {
        method: "DELETE"
      })
        .then((response) => response.json())
        .then((res) => {
          console.log('res', res)
          resolve(res);
        })
        .catch((error) => {
          console.log('error', error)
          reject(error);
        });
    });
  }
