import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    // define your state properties here
    type: null, // personal || business
  }),
  actions: {
    // define your actions here
    setType(newType) {
      this.type = newType;
    },
  },
  getters: {
    // define your getters here
  }
})