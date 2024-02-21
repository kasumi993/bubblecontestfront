export async function getSurveys() {
  const origin = import.meta.env.VITE_API_URI
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch(`${origin}/surveys`, requestOptions)
    if (!response.ok) {
      throw new Error(`Failed to fetch surveys: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching surveys:', error)
    throw error
  }
}
