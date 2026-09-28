const codespaceName = import.meta.env.VITE_CODESPACE_NAME?.trim()

export const apiBaseUrl = codespaceName
  ? `https://${codespaceName}-8000.app.github.dev`
  : 'http://localhost:8000'

export async function fetchCollection(resource, signal) {
  const response = await fetch(`${apiBaseUrl}/api/${resource}/`, { signal })

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