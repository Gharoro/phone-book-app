const error_json_response = (statusCode, error) => {
  const json = {
    status: statusCode,
    error: error,
  };
  return json;
}

const success_json_response = (statusCode, message, data = null) => {
  const json = {
    status: statusCode,
    message: message,
    data: data,
  };
  return json;
}

module.exports ={error_json_response, success_json_response};