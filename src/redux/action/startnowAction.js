
export const Detailquizs = "detail-quiz"

export const detailquiz = (data) => {

    // console.log('data là:', data)

    return {
        type: Detailquizs,
        payload: data,
    }
}