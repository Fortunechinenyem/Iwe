export const apiFetch = async (
  url,
  method = "GET",
  body = null,
  headers = {}
) => {
  const defaultHeaders = { "Content-Type": "application/json", ...headers };

  const options = {
    method,
    headers: defaultHeaders,
  };

  if (body) {
    options.body = JSON.stringify(body);
  }

  try {
    const res = await fetch(url, options);
    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "API request failed");

    return data;
  } catch (error) {
    console.error("API Fetch error:", error);
    throw error;
  }
};
