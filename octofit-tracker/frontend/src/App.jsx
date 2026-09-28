import { Navigate, NavLink, Route, Routes } from 'react-router-dom'
import Activities from './components/Activities.jsx'
import Leaderboard from './components/Leaderboard.jsx'
import Teams from './components/Teams.jsx'
import Users from './components/Users.jsx'
import Workouts from './components/Workouts.jsx'
import './App.css'

const sections = [
  { path: '/activities', label: 'Activities' },
  { path: '/leaderboard', label: 'Leaderboard' },
  { path: '/teams', label: 'Teams' },
  { path: '/users', label: 'Users' },
  { path: '/workouts', label: 'Workouts' },
]

function App() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="app-header__inner">
          <NavLink className="brand" to="/activities" aria-label="Octofit Tracker home">
            <img src="/octofitapp-small.png" alt="" width="44" height="44" />
            <span className="brand__name">Octofit <span>Tracker</span></span>
          </NavLink>
          <nav className="primary-nav" aria-label="Main navigation">
            {sections.map(({ path, label }) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
              >
                {label}
              </NavLink>
            ))}
          </nav>
          <span className="connection-status"><span aria-hidden="true" /> API</span>
        </div>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/activities" replace />} />
          <Route path="/activities" element={<Activities />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/teams" element={<Teams />} />
          <Route path="/users" element={<Users />} />
          <Route path="/workouts" element={<Workouts />} />
          <Route path="*" element={<Navigate to="/activities" replace />} />
        </Routes>
      </main>

      <footer className="app-footer">
        <span>Octofit Tracker</span>
        <span>Movement, made measurable.</span>
      </footer>
    </div>
  )
}

export default App
