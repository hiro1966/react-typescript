import axios from "axios";

export default function FetchTest () {
  const onButtonClick = () => {
    axios.get("http://yahoo.co.jp")
      .then((response) => alert(`名前：${response}`))  
      .catch(function (error) {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);      // 例：400
            console.log(error.response.statusText);  // Bad Request
            console.log(error.response.headers);
        } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
        } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
        }
        console.log(error.config);
    })
  }

  return (
    <div>
      <button onClick={onButtonClick}>押して！</button>
    </div>
  )
}