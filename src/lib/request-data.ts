// Lambda function to request data from TFNSW
const url = "https://5ily0l2l1l.execute-api.ap-southeast-2.amazonaws.com/tfnsw";

const requestData = async (params = {}) => {
  const response = await fetch(url);
  const json = await response.json();

  return json;
};

export default requestData;
