export const state = () => ({
    photo: null,
    userProfileMedia:[
        { id:0, type:"", src:null },
        { id:1, type:"", src:null },
        { id:2, type:"", src:null },
        { id:3, type:"", src:null },
        { id:4, type:"", src:null },
        { id:5, type:"", src:null },
        { id:6, type:"", src:null },
        { id:7, type:"", src:null },
        { id:8, type:"", src:null },
    ],
    currentMediaIndex:0,
    video: null,
    activeEffectIcon: 'lion',
    userSexualOrientations: [],
    gender: "",
    showGenderOnProfile: false,
    showSexualOrientationOnProfile: false,
    birthday: "",
    email: "",
    firstName: "",
    showMePreference: "",
    university: "",
    passions:[],
    deepARInstance: null
})

export const mutations = {
    setDeepARInstance(state, val){
        state.deepARInstance = val
        console.log('VUEX: set deepARInstance to', state.deepARInstance);
    },
    setPhoto(state, val){
        state.photo = val
        console.log('VUEX: set photo to', state.photo);
    },
    addUserProfileMedia(state, index){
        console.log('type of index is', typeof index, index);
        if(state.photo){
            state.userProfileMedia.splice(index, 1, {id:index, type:"photo", src:state.photo})
            console.log("VUEX: new userProfileMedia arr", state.userProfileMedia);
        }else if(state.video){
            state.userProfileMedia.splice(index, 1, {id:index, type:"video", src:state.video}),
            console.log("VUEX: new userProfileMedia arr", state.userProfileMedia);
        }
    },
    setUserProfileMedia(state, val){
        state.userProfileMedia = val
    },
    removeUserProfileMedia(state, val){

    },
    setCurrentMediaIndex(state, val){
        state.currentMediaIndex = val
        console.log("VUEX: set currentMediaIndex to", state.currentMediaIndex);
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
        console.log('VUEX: new user SO array', state.userSexualOrientations);
    },
    removeSexualOrientation(state, item){
        const filtered = state.userSexualOrientations.filter(s => s.name !== item)
        state.userSexualOrientations = filtered
        console.log('VUEX: new user SO array', state.userSexualOrientations);
    },
    setGender(state, val){
        state.gender = val
        console.log('VUEX: set gender to', state.gender);
    },
    setShowGenderOnProfile(state, val){
        state.showGenderOnProfile = val
        console.log('VUEX: set showGenderOnProfile to', state.showGenderOnProfile);
    },
    setShowSexualOrientationOnProfile(state, val){
        state.showSexualOrientationOnProfile = val
        console.log('VUEX: set showSexualOrientationOnProfile to', state.showSexualOrientationOnProfile);
    },
    setBirthday(state, val){
        state.birthday = val
        console.log('VUEX: set birthday to', state.birthday);
    },
    setEmail(state, val){
        state.email = val
        console.log('VUEX: set email to', state.email);
    },
    setFirstName(state, val){
        state.firstName = val
        console.log('VUEX: set firstName to', state.firstName);
    },
    setShowMePreference(state, val){
        state.showMePreference = val
        console.log('VUEX: set showMePreference to', state.showMePreference);
    },
    setUniversity(state, val){
        state.university = val
        console.log('VUEX: set university to', state.university);
    },
    addPassion(state, item){
        state.passions.push(item)
        console.log('VUEX: new user passions array', state.passions);
    },
    removePassion(state, item){
        const filtered = state.passions.filter(s => s.name !== item)
        state.passions = filtered
        console.log('VUEX: new user passions array', state.passions);
    },
}

export const actions = {}