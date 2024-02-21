import { headersWithAuthorization } from '@/utils'

export async function putChoosen(options: any) {
  const origin = import.meta.env.VITE_API_URI
  const requestOptions = {
    method: 'PUT',
    headers: headersWithAuthorization,
    body: JSON.stringify(options)
  }
    
  try {
    const response = await fetch(`${origin}/change`, requestOptions)
    if (!response.ok) {
      console.error('response:', response, requestOptions, origin)
      throw new Error(`Failed to fetch surveys: ${response.statusText}`)
    }
    console.log('response:', response, requestOptions, origin)
    return await response.json()
  } catch (error) {
    console.error('Error fetching surveys:', error)
    throw error
  }
}
    