export const state = () => ({
    photo: null,
    video: null,
    activeEffectIcon: 'lion'
})

export const mutations = {
    setPhoto(state, val){
        state.photo = val
        console.log('VUEX: set photo to', state.photo);
    },
    setVideo(state, val){
        state.video = val
        console.log('VUEX: set video to', state.video);
    },
    setActiveEffectIcon(state, val){
        state.activeEffectIcon = val
        console.log('VUEX: set activeEffectIcon to', state.activeEffectIcon);
    }
}

export const actions = {}