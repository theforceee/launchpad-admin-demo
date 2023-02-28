interface RequestOptions {
  body?: Record<string, unknown>;
}

async function request(url: string, method: string, options?: RequestOptions) {
  const token = localStorage.getItem("authToken");
  const headers = new Headers({
    Accept: "application/json",
    "Content-Type": "application/json",
  });

  if (token) {
    headers.append("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(url, {
    method,
    headers,
    credentials: "include",
    body: options?.body ? JSON.stringify(options.body) : undefined,
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status} - ${response.statusText}`);
  }

  return response.json();
}

export async function get(url: string, options?: RequestOptions) {
  return request(url, "GET", options);
}

export async function post(url: string, options?: RequestOptions) {
  return request(url, "POST", options);
}

export async function put(url: string, options?: RequestOptions) {
  return request(url, "PUT", options);
}