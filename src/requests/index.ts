import { KEY_CACHE, URLS } from "../constants";

interface RequestOptions {
  body?: Record<string, unknown>;
}

export const BASE_API_URL = process.env.REACT_APP_BASE_API_URL || "";

async function request(url: string, method: string, options?: RequestOptions) {
  const token = localStorage.getItem(KEY_CACHE);
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
    // throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    console.log(`HTTP ${response.status} - ${response.statusText}`);
  }

  // Unauthorized
  if (response.status === 401) {
    localStorage.removeItem(KEY_CACHE);
    window.location.href = URLS.LOGIN;
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
