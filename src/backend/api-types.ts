export interface RequestErrorInfo {
  status?: number;
  statusText?: string;
  method?: string;
  url?: string;
  message: string;
}

export interface NetworkError extends Error {
  request: {
    method?: string;
    url: string;
  };
}
