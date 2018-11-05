import axios from 'axios'

// Initial state
const state = {
  searchResult: [],
}

// Getter
const getters = {
  getResult(state) {
    return state.searchResult
  },
}

const actions = {
  getApi(state, searchParams) {
    axios({
        method: 'get',
        url: `https://api.treroad.com/api/v1/trains/routes?departure_station_name=${searchParams.departureStation}&arrival_station_name=${searchParams.arrivalStation}&departure_date_time=${searchParams.searchTime}&transportation=${searchParams.transportation}`
      })
      .then((response) => {
        state.commit('getApiResult', response)
      })
  }
}

// Mutations
const mutations = {
  getApiResult(state, response) {
    state.searchResult = response.data.payload
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}