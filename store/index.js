export const state = () => ({
    photo: null,
    video: null,
    activeEffectIcon: 'lion',
    userSexualOrientations: []
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
    },
    addSexualOrientation(state, item){
        state.userSexualOrientations.push(item)
        console.log('new user SO array', state.userSexualOrientations);
    },
    removeSexualOrientation(state, item){
        const filtered = state.userSexualOrientations.filter(s => s.name !== item)
        state.userSexualOrientations = filtered
        console.log('new user SO array', state.userSexualOrientations);
    }
}

export const actions = {}