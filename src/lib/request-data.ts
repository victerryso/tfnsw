// Lambda function to request data from TFNSW
const endpoint =
  "https://5ily0l2l1l.execute-api.ap-southeast-2.amazonaws.com/tfnsw";

const requestData = async (params = {}) => {
  const url = new URL(endpoint);

  Object.entries(params).forEach(([key, value]) => {
    if (value) {
      url.searchParams.set(key, `${value}`);
    }
  });

  const response = await fetch(url.href);
  const json = await response.json();

  return JSON.parse(json);
};

export default requestData;
