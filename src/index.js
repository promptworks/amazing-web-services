import React from 'react'
import render from 'react-dom'
import Vue from 'vue/dist/vue'

import App from './app'

const reactRoot = document.getElementById('react-root')
const vueRoot = document.getElementById('vue-root')

if (reactRoot !== null) {
  console.log('Lets do React!')
  render(<App/>, reactRoot)

} else if (vueRoot !== null) {
  console.log('Lets do Vue!')
  new Vue(App)

} else {
  console.log('Lets do nothing :(')
}
