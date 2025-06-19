const handleFetchErrors = (response) => {
  if (!response.ok) {
    switch (response.status) {
      case 429:
        throw new Error('API limit exceeded');
      case 503:
        throw new Error('Service unavailable');
      default:
        throw new Error(`HTTP error ${response.status}`);
    }
  }
  return response;
};

export default handleFetchErrors;
