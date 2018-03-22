import fetch from 'dva/fetch';

/** 服务器地址 */
const SERVER_ADDRESS = '/meeteam/';

// axios.defaults.withCredentials = true;

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const httpSettings = {
    mode: 'cors',  // HTTP访问控制模式下发起HTTP请求(enabled cors mode)
    credentials: 'include',   // 请求数据时带上cookie
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return fetch(SERVER_ADDRESS + url, { ...httpSettings, ...options })
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}
