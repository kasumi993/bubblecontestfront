import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import HomeComponent from '../HomeComponent.vue'

describe('HomeComponent', () => {
  it('renders properly', () => {
    const wrapper = mount(HomeComponent, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
