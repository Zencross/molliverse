import gql from "graphql-tag";

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
    loadingEffectIcon: '',
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
    deepARInstance: null,
    effectList:[
        {id:0, name:'lion', loading: false},
        {id:1, name:'aviators', loading: false},
        {id:2, name:'beard', loading: false},
        {id:3, name:'dalmatian', loading: false},
        {id:4, name:'flowers', loading: false},
        {id:5, name:'koala', loading: false},
        {id:6, name:'background_segmentation', loading: false},
        {id:7, name:'teddycigar', loading: false}
    ],
    faceTrackingModelReady: false,
    messageTargetId: null,
    messageTargetName: "",
    messageTargetAvatar: ""
})

export const mutations = {
    setMessageTargetId(state, val){
        state.messageTargetId = val
        console.log("VUEX: set messageTargetId to",state.messageTargetId);
    },
    setMessageTargetName(state, val){
        state.messageTargetName = val
        console.log("VUEX: set messageTargetId to",state.messageTargetName);
    },
    setMessageTargetAvatar(state, val){
        state.messageTargetAvatar = val
        console.log("VUEX: set messageTargetId to",state.messageTargetAvatar);
    },
    setFaceTrackingModelReady(state, val){
        state.faceTrackingModelReady = val
        console.log('VUEX: set faceTrackingModelReady to', state.faceTrackingModelReady);
    },
    setEffectLoadingTrue(state, index){
        state.effectList[index].loading = true
        console.log(`VUEX: set effectList[${index}].loading to ${state.effectList[index].loading}`);
    },
    setEffectLoadingFalse(state, index){
        state.effectList[index].loading = false
        console.log(`VUEX: set effectList[${index}].loading to ${state.effectList[index].loading}`);
    },
    setDeepARInstance(state, val){
        state.deepARInstance = val
        console.log('VUEX: set deepARInstance to', state.deepARInstance);
    },
    setPhoto(state, val){
        state.photo = val
        console.log('VUEX: set photo to', state.photo);
    },
    addPhotoToUserProfileMedia(state, index){
        console.log('type of index is', typeof index, index);
        if(state.photo){
            state.userProfileMedia.splice(index, 1, { ...state.userProfileMedia[index], type:"photo", src:state.photo})
            console.log("VUEX: new userProfileMedia arr", state.userProfileMedia);
        }
    },
    addVideoToUserProfileMedia(state, index){
        console.log('type of index is', typeof index, index);
        if(state.video){
            state.userProfileMedia.splice(index, 1, { ...state.userProfileMedia[index], type:"video", src:state.video}),
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
    setLoadingEffectIcon(state, val){
        state.loadingEffectIcon = val
        console.log('VUEX: set loadingEffectIcon to', state.loadingEffectIcon);
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

export const actions = {
    async addUser({ dispatch, commit, state }) {

        let dob = new Date(state.birthday);
        let month_diff = Date.now() - dob.getTime();
        let age_dt = new Date(month_diff);
        let year = age_dt.getUTCFullYear();
        let age = Math.abs(year - 1970);

        let userInput = [{
            age:age,
            email: "abc@abc.com",
            gender: state.gender,
            location: {
                longitude: 114.177216,
                latitude: 22.302711
            },
            name: state.firstName,
            nickname: state.firstName,
            passions: state.passions.map( e =>{ return {name: e.name} }),
            phoneNumber: "98765432",
            university: state.university
        }]

        console.log("addUser Input:", userInput);

        try {
            const results = await this.app.apolloProvider.defaultClient.mutate({
              mutation: gql`
                mutation($input: [AddUserInput!]!) {
                  addUser(input: $input) {
                    user {
                      name
                      nickname
                      age
                      gender
                      location {
                        longitude
                        latitude
                      }
                      passions {
                        name
                      }
                      phoneNumber
                      email
                    }
                  }
                }
              `,
              variables: {
                input: userInput
              }
            });
            console.log("addUser results", results);
          } catch (e) {
            console.error(e);
          }
    }

}