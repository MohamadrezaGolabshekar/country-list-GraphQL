type Resp = {
  result: boolean;
  data?: any;
};

type Data = {
  status: number;
  [key: string]: any;
};

export const success = (data: Data): Resp => ({
  data,
  result: true,
});

export const fail = (data: Data): Resp => ({
  data,
  result: false,
});
