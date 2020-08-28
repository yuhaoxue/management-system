import { requestOfPost, requestOfGet } from "@/util/common";

// post请求
export function postRequest(url, params) {
  return new Promise((resolve, reject) => {
    requestOfPost(url, params)
      .then(res => resolve(res))
      .catch(error => reject(error));
  });
}

// get请求
export function getRequest(url) {
  return new Promise((resolve, reject) => {
    requestOfGet(url)
      .then(res => resolve(res))
      .catch(error => reject(error));
  });
}
