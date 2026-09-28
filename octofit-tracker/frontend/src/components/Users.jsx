import CollectionPage from './CollectionPage.jsx'

const columns = [
  {
    key: 'name',
    label: 'Athlete',
    render: (user) => user.name || user.username || 'Unnamed athlete',
  },
  { key: 'username', label: 'Username' },
  { key: 'email', label: 'Email' },
]

function Users() {
  return (
    <CollectionPage
      resource="users"
      title="Athletes"
      description="People tracking their activity and progress with Octofit."
      columns={columns}
    />
  )
}

export default Users