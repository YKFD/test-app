export const getRequest = async (url) => {
  const response = await fetch(`http://localhost:3000/${url}`);
  if (response.status < 400) {
    const json = await response.text();
    const data = await JSON.parse(json);
    return {status: response.status, data}
  } else {
    return response
  }
}
