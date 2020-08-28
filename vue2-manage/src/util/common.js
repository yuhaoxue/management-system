import service from "@/util/request";

export function requestOfPost(url, params) {
  return service.post(url, params);
}

export function requestOfGet(url) {
  return service.get(url);
}
