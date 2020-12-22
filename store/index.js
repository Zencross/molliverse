export const state = () => ({
    photo: null,
    video: null
})

export const mutations = {
    setPhoto(state, val){
        state.photo = val
        console.log('set photo to', state.photo);
    },
    setVideo(state, val){
        state.video = val
        console.log('set video to', state.video);
    }
}

export const actions = {}