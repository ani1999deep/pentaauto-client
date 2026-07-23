// lib/auth.js
//
// Static authentication for now. Everything the app calls goes through
// `login()` / `logout()` / `getSession()` / `isAuthenticated()`, so when a
// real backend is ready, only the inside of `login()` needs to change to an
// API call (e.g. POST /api/auth/login) — the rest of the app is untouched.

const SESSION_KEY = "wf_session";

// TODO(api-swap): replace with a real API call, e.g.
//   const res = await fetch("/api/auth/login", { method: "POST", body: JSON.stringify({ username, password }) });
//   if (!res.ok) return { success: false, error: "Invalid username or password" };
//   const { token, user } = await res.json();
const STATIC_CREDENTIALS = {
  username: "admin",
  password: "Admin@123",
};

export function login(username, password) {
  if (username === STATIC_CREDENTIALS.username && password === STATIC_CREDENTIALS.password) {
    const session = {
      username,
      name: "Admin",
      loggedInAt: new Date().toISOString(),
    };
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
    return { success: true, session };
  }
  return { success: false, error: "Invalid username or password" };
}

export function logout() {
  localStorage.removeItem(SESSION_KEY);
}

export function getSession() {
  if (typeof window === "undefined") return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

export function isAuthenticated() {
  return getSession() !== null;
}
