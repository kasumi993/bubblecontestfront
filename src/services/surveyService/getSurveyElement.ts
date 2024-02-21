export async function getSurveyElement(surveyId: number) {
  const origin = import.meta.env.VITE_API_URI
  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  try {
    const response = await fetch(`${origin}/surveys/${surveyId}`, requestOptions)
    if (!response.ok) {
      throw new Error(`Failed to fetch survey element: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching survey element:', error)
    throw error
  }
}
