import CollectionPage from './CollectionPage.jsx'

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
      title="Teams"
      description="Find the groups bringing consistency and a little competition to every week."
      columns={columns}
    />
  )
}

export default Teams