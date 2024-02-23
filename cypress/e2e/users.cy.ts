import { SELECTORS, WAITING_TIME, testUserDetails } from '../common/common'

describe('Test users', () => {
  const email= testUserDetails.email
  const password = testUserDetails.password
  const fullName = testUserDetails.fullName
  it('should create account and then disconnect', () => {
    cy.visit('/login')

    cy.get(SELECTORS.ACCOUNT_CREATION.CREATION).eq(0).click()

    cy.get(SELECTORS.ACCOUNT_CREATION.EMAIL).type(email)
    cy.get(SELECTORS.ACCOUNT_CREATION.PASSWORD).type(password)
    cy.get(SELECTORS.ACCOUNT_CREATION.FULL_NAME).type(fullName)    
    cy.get(SELECTORS.ACCOUNT_CREATION.LOGIN).eq(0).click()
    cy.wait(WAITING_TIME)

    cy.get(SELECTORS.ACCOUNT_CREATION.LOGOUT).should('exist')
  })
})
  