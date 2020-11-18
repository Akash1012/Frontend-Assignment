export const productfilter = (data) => {
    return {
        type: 'FILTER',
        payload: data
    }
}

export const productfilterAsPerPrice = (data) => {
    console.log("productfilterAsPerPrice", data)
    return {
        type: data,
        payload: data
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}