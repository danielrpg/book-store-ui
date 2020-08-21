import http from "../components/common/HttpCommon";

const signin = (user) => {
  return http.post("api/v1/auth/signin", user);
};

export { signin };
