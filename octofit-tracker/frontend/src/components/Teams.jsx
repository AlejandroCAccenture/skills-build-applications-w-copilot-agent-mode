import CollectionPage from './CollectionPage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/teams`
  : 'http://localhost:8000/api/teams'

const columns = [
  { key: 'name', label: 'Team' },
  { key: 'description', label: 'About' },
  {
    key: 'members',
    label: 'Members',
    render: (team) => Array.isArray(team.members) ? team.members.length : 0,
  },
]

function Teams() {
  return (
    <CollectionPage
      resource="teams"
      endpoint={endpoint}
      title="Teams"
      description="Find the groups bringing consistency and a little competition to every week."
      columns={columns}
    />
  )
}

export default Teams