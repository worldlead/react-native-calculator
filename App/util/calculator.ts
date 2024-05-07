export interface CalculatorState {
  currentValue: string,
  operator: string | null
  previousValue: string | null
}

export const initialState: CalculatorState = {
  currentValue: "0",
  operator: null,
  previousValue: null
}

export const handleNumber = (value: string | number, state: CalculatorState) => {
  if (state.currentValue === "0") {
    return { ...state, currentValue: `${value}`}
  }

  return {
    ...state,
    currentValue: `${state.currentValue}${value}`
  }
}

export const handleEqual = (state: CalculatorState) => {
  const { currentValue, previousValue, operator } = state

  const current = parseFloat(currentValue)
  const previous = parseFloat(previousValue as string)
  const resetState = {
    operator: null,
    previousValue: null
  }

  if (operator === "/") {
    return {
      currentValue: `${previous / current}`,
     ...resetState
    }
  }
  if (operator === "*") {
    return {
      currentValue: `${previous * current}`,
     ...resetState
    }
  }
  if (operator === "+") {
    return {
      currentValue: `${previous + current}`,
     ...resetState
    }
  }
  if (operator === "-") {
    return {
      currentValue: `${previous - current}`,
     ...resetState
    }
  }
  
  return state
}

const calculator = (type: string, state: CalculatorState, value?: string | number, ) => {
  switch (type) {
    case "number":
      return handleNumber(value!, state)
    case "operator":
      return {
        operator: value as string,
        previousValue: state.currentValue,
        currentValue: "0"
      }
    case "equal":
      return handleEqual(state)
    case "clear":
      return initialState
    case "posneg":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * -1}`
      }
    case "percentage":
      return {
        ...state,
        currentValue: `${parseFloat(state.currentValue) * 0.01}`
      }
    default:
      return state
  }
}

export default calculator

