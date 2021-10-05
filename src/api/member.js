import req from "./config";


export const getMember = (data) => {
  return req("get", "/users", data)
}


