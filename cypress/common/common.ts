export const SELECTORS = {
  ACCOUNT_CREATION: {
    LOGIN: "[data-test-id='login-button']",
    CREATION: "[data-test-id='creation-button']",
    EMAIL: "input[name='email']",
    PASSWORD: 'input[name="password"]',
    FULL_NAME: 'input[name="fullName"]',
    LOGIN_SUCCESS: "[data-test-id='login-success']",
    DISCONNECT_BUTTON: "[data-test-id='disconnect-button']",
    LOGOUT: "[data-test-id='logout-button']"
  }
}

export const WAITING_TIME = 1000

export const RANDOM_CHARS_LENGTH = 10

export const generateRandomString = (length: number) => {
  let result = ''
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const charactersLength = characters.length
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}
const random_user_email_prefix = generateRandomString(RANDOM_CHARS_LENGTH)
  
export const testUserDetails = {
  email: `testUser+${random_user_email_prefix}@gmail.eu`.toLowerCase(),
  password: 'testUserPassword',
  fullName: 'TestUser'
}
