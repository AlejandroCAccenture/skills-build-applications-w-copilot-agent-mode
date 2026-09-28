import CollectionPage from './CollectionPage.jsx'

function formatDate(value) {
  if (!value) return 'Not recorded'

  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? String(value)
    : date.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })
}

const columns = [
  {
    key: 'user',
    label: 'Athlete',
    render: (activity) => activity.user?.name || activity.user?.username || 'Unknown athlete',
  },
  { key: 'type', label: 'Activity' },
  {
    key: 'completedAt',
    label: 'Completed',
    render: (activity) => formatDate(activity.completedAt),
  },
  {
    key: 'durationMinutes',
    label: 'Duration',
    render: (activity) => activity.durationMinutes != null
      ? `${activity.durationMinutes} min`
      : 'Not recorded',
  },
  {
    key: 'distanceMiles',
    label: 'Distance',
    render: (activity) => activity.distanceMiles != null
      ? `${activity.distanceMiles} mi`
      : 'Not recorded',
  },
  {
    key: 'points',
    label: 'Points',
    render: (activity) => activity.points ?? 'Not recorded',
  },
]

function Activities() {
  return (
    <CollectionPage
      resource="activities"
      title="Activity log"
      description="Recent movement and training recorded by your community."
      columns={columns}
    />
  )
}

export default Activities