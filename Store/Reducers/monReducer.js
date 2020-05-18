// Store/Reducers/favoriteReducer.js

const initialState = { lesReunions: [] }

function monReducer(state = initialState, action) {
  let nextState
  switch (action.type) {
    case 'MON_REDUCER':
      const renunionIndex = state.lesReunions.findIndex(item => item.id === action.value.id)
      if (renunionIndex !== -1) {
        // Le film est déjà dans les favoris, on le supprime de la liste
        nextState = {
          ...state,
          lesReunions: state.lesReunions.filter( (item, index) => index !== renunionIndex)
        }
      }
      else {
        // Le film n'est pas dans les films favoris, on l'ajoute à la liste
        nextState = {
          ...state,
          lesReunions: [...state.lesReunions, action.value]
        }
      }
      return nextState || state
  default:
    return state
  }
}

export default monReducer