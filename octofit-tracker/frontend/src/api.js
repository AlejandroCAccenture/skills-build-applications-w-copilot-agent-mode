export async function fetchCollection(endpoint, signal) {
  const response = await fetch(endpoint, { signal })

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`)
  }

  const payload = await response.json()

  if (Array.isArray(payload)) {
    return payload
  }

  for (const key of ['results', 'data', 'items']) {
    if (Array.isArray(payload?.[key])) {
      return payload[key]
    }
  }

  return []
}