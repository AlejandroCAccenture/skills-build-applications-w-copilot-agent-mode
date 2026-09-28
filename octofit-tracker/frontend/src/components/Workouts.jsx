import CollectionPage from './CollectionPage.jsx'

const columns = [
  { key: 'name', label: 'Workout' },
  { key: 'type', label: 'Type' },
  { key: 'difficulty', label: 'Difficulty' },
  {
    key: 'durationMinutes',
    label: 'Duration',
    render: (workout) => workout.durationMinutes != null
      ? `${workout.durationMinutes} min`
      : 'Not recorded',
  },
  {
    key: 'exercises',
    label: 'Exercises',
    render: (workout) => Array.isArray(workout.exercises) && workout.exercises.length
      ? workout.exercises.join(', ')
      : 'Not listed',
  },
]

function Workouts() {
  return (
    <CollectionPage
      resource="workouts"
      title="Workouts"
      description="A library of sessions to support your next training block."
      columns={columns}
    />
  )
}

export default Workouts