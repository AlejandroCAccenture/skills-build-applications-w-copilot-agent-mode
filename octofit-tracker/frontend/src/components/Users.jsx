import CollectionPage from './CollectionPage.jsx'

const endpoint = import.meta.env.VITE_CODESPACE_NAME
  ? `https://${import.meta.env.VITE_CODESPACE_NAME}-8000.app.github.dev/api/users`
  : 'http://localhost:8000/api/users'

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
      endpoint={endpoint}
      title="Athletes"
      description="People tracking their activity and progress with Octofit."
      columns={columns}
    />
  )
}

export default Users