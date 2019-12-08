export default function updateDataApi(data) {
    const dataContent = {
      content: data.content
    }
      return new Promise((resolve, reject) => {
        
        const url = 'http://192.168.1.28:3001/todos/'+data.id
        fetch(url, {
          method: "PUT",
          headers: {"Content-type": "application/json"},
          body: JSON.stringify(dataContent)
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
  