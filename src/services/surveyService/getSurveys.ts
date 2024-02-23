import { headersWithAuthorization } from '@/utils'

export async function getSurveys() {
  const origin = import.meta.env.VITE_API_URI
  const requestOptions = {
    method: 'GET',
    headers: headersWithAuthorization
  }
  try {
    const response = await fetch(`${origin}/surveys`, requestOptions)
    console.log('response:', response, requestOptions, origin)
    if (!response.ok) {
      throw new Error(`Failed to fetch surveys: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching surveys:', error)
    throw error
  }
}