# Admin Dashboard

Next.js 14 (App Router) + Tailwind CSS admin panel for attendance and work management.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3000 — you'll land on the login screen.

## Demo login

```
Username: admin
Password: Admin@123
```

## How auth works right now

Login is fully static — see `lib/auth.js`. On successful login a small
session object (`{ username, name, loggedInAt }`) is written to
`localStorage` under the key `wf_session`. Every page under
`app/(protected)/` is wrapped by `components/AuthGuard.jsx`, which checks
for that session and redirects to `/` if it's missing.

### Swapping in a real API later

Only `lib/auth.js` needs to change:

- `login(username, password)` → replace the static check with a
  `fetch("/api/auth/login", { method: "POST", ... })` call, and store
  whatever token/session the API returns instead.
- `logout()`, `getSession()`, `isAuthenticated()` can stay as-is if you
  keep storing the session in `localStorage`, or adjust them to read
  from cookies if you move to server-side sessions.

Nothing in the pages or components needs to change, since they only ever
call these four functions.

## Data

Dashboard numbers (`Total Employees`, `Present Today`, the attendance
chart, recent attendance list, etc.) come from `lib/mockData.js`. Each
export there is meant to map 1:1 to a future API endpoint — swap the
export for a `fetch`/SWR call in the page that consumes it when the
backend is ready.

## Structure

```
app/
  page.js                  → Login screen
  (protected)/
    layout.js              → Sidebar + Navbar + Footer shell, wraps children in AuthGuard
    dashboard/page.js       → Dashboard (stats, chart, recent attendance, quick actions)
    employees/page.js       → Placeholder
    attendance/page.js      → Placeholder
    work-distribution/page.js → Placeholder
    profile/page.js         → Placeholder
components/
  Sidebar.jsx, Navbar.jsx, Footer.jsx
  StatCard.jsx, AttendanceChart.jsx, RecentAttendance.jsx, QuickActions.jsx
  AuthGuard.jsx
lib/
  auth.js       → static auth now, swap point for real API
  mockData.js   → static dashboard data, swap point for real API
```

## Color tokens

Defined in `tailwind.config.js`:

| Token | Hex |
|---|---|
| primary | #14532D |
| secondary | #16A34A |
| bg | #F8FAFC |
| card | #FFFFFF |
| text-secondary | #64748B |
| border | #E2E8F0 |
| success | #22C55E |
| warning | #F59E0B |
| error | #EF4444 |
