import { useEffect, useState } from 'react'
import { fetchCollection } from '../api.js'

function CollectionPage({ resource, endpoint, title, description, columns }) {
  const [records, setRecords] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadRecords() {
      try {
        setRecords(await fetchCollection(endpoint, controller.signal))
      } catch (cause) {
        if (!controller.signal.aborted) {
          setRecords([])
          setError(cause instanceof Error ? cause.message : 'Unable to load records.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    loadRecords()
    return () => controller.abort()
  }, [endpoint])

  return (
    <section aria-busy={loading}>
      <header className="page-heading">
        <div>
          <p className="page-kicker">Octofit / {resource}</p>
          <h1 className="page-title">{title}</h1>
          <p className="page-description">{description}</p>
        </div>
        <span className="record-count">
          {records.length} {records.length === 1 ? 'record' : 'records'}
        </span>
      </header>

      <div className="collection-panel">
        {loading ? (
          <div className="collection-message" role="status">
            <span className="loading-indicator" aria-hidden="true" />
            <p>Loading {resource}...</p>
          </div>
        ) : error ? (
          <div className="collection-message collection-message--error" role="alert">
            <h2>Could not load {resource}</h2>
            <p>{error}</p>
          </div>
        ) : records.length === 0 ? (
          <div className="collection-message">
            <h2>No {resource} yet</h2>
            <p>Records will appear here when they are available.</p>
          </div>
        ) : (
          <div className="collection-table-wrap">
            <table className="table table-hover collection-table">
              <thead>
                <tr>
                  {columns.map((column) => (
                    <th key={column.key} scope="col">{column.label}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {records.map((record, index) => (
                  <tr key={record._id ?? record.id ?? `${resource}-${index}`}>
                    {columns.map((column) => (
                      <td key={column.key}>
                        {column.render
                          ? column.render(record, index)
                          : record[column.key] ?? 'Not available'}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  )
}

export default CollectionPage