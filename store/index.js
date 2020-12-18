export const state = () => ({
    photo: null
})

export const mutations = {
    setPhoto(state, val){
        state.photo = val
        console.log('set photo to', state.photo);
    }
}

export const actions = {}