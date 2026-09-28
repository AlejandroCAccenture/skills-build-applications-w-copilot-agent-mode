import CollectionPage from './CollectionPage.jsx'

const columns = [
  {
    key: 'rank',
    label: 'Rank',
    render: (entry, index) => `#${entry.rank ?? index + 1}`,
  },
  {
    key: 'user',
    label: 'Athlete',
    render: (entry) => entry.user?.name || entry.user?.username || 'Unknown athlete',
  },
  {
    key: 'team',
    label: 'Team',
    render: (entry) => entry.team?.name || 'Unassigned',
  },
  {
    key: 'points',
    label: 'Points',
    render: (entry) => entry.points ?? 0,
  },
]

function Leaderboard() {
  return (
    <CollectionPage
      resource="leaderboard"
      title="Leaderboard"
      description="See how athletes and teams are progressing on points."
      columns={columns}
    />
  )
}

export default Leaderboard