import { localURL as URL } from "./settings.js";
function handleHttpErrors(res) {
  if (!res.ok) {
    return Promise.reject({ status: res.status, fullError: res.json() });
  }
  return res.json();
}

class ResFacade {
  fetchData = () => {
    const options = this.makeOptions("GET"); //True add's the token
    return fetch(URL + "/api/recipes/getrecipe", options).then(handleHttpErrors);
  };


  makeOptions(method, body) {
    var opts = {
      method: method,
      headers: {
        "Content-type": "application/json",
        Accept: "application/json"
      }
    };
    if (body) {
      opts.body = JSON.stringify(body);
    }
    return opts;
  }
      
}

const facadeRes = new ResFacade();
export default facadeRes;