export const headersWithAuthorization = {
  'Content-Type': 'application/json',
  Autorization: `${localStorage.getItem('id_token')}`
}

export const headersWithoutAuthorization = {
  'Content-Type': 'application/json'
}