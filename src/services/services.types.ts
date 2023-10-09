type ResponseError = {
  loc: string[];
  msg: string;
};

export type APIResponseError = {
  detail: ResponseError[];
};
