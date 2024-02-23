import { headersWithAuthorization } from '@/utils'

export async function getSurveyElement(surveyId: number) {
  const origin = import.meta.env.VITE_API_URI
  const requestOptions = {
    method: 'GET',
    headers: headersWithAuthorization
  }
  try {
    const response = await fetch(`${origin}/surveys/${surveyId}`, requestOptions)
    if (!response.ok) {
      console.log(response)
      throw new Error(`Failed to fetch survey element: ${response.statusText}`)
    }

    return await response.json()
  } catch (error) {
    
    alert("vous n'avez pas accès à ce sondage car vous n'êtes pas Premium. Veuillez vous abonner pour y accéder. 🫧")
    throw error
  }
}