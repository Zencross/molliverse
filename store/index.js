import gql from "graphql-tag";

// export const getters = {
//   getPhoneNumber: state => state.phoneNumber
// };

export const state = () => ({
  user: null,
  photo: null,
  userProfileMedia: [
    { index: 0, type: null, url: null },
    { index: 1, type: null, url: null },
    { index: 2, type: null, url: null },
    { index: 3, type: null, url: null },
    { index: 4, type: null, url: null },
    { index: 5, type: null, url: null },
    { index: 6, type: null, url: null },
    { index: 7, type: null, url: null },
    { index: 8, type: null, url: null }
  ],
  currentMediaIndex: 0,
  video: null,
  activeEffectIcon: "lion",
  loadingEffectIcon: "",
  userSexualOrientations: [],
  gender: "",
  showGenderOnProfile: false,
  showSexualOrientationOnProfile: false,
  birthday: "",
  email: "",
  firstName: "",
  showMePreference: [],
  university: "",
  passions: [],
  deepARInstance: null,
  effectList: [
    { id: 0, name: "lion", loading: false },
    { id: 1, name: "aviators", loading: false },
    { id: 2, name: "beard", loading: false },
    { id: 3, name: "dalmatian", loading: false },
    { id: 4, name: "flowers", loading: false },
    { id: 5, name: "koala", loading: false },
    { id: 6, name: "background_segmentation", loading: false },
    { id: 7, name: "teddycigar", loading: false }
  ],
  faceTrackingModelReady: false,
  messageTargetId: null,
  messageTargetName: "",
  messageTargetAvatar: "",
  messageTargetAvatarType: "",
  channels: [],
  messageChannelName: "",
  phoneNumber: "",
  email: ""
});

export const mutations = {
  setUser(state, val) {
    if (val) {
      console.log("setUser val", val);

      //  Extract the media array
      let userMedia = val.media;

      userMedia.sort(function(a, b) {
        return a.index - b.index;
      });

      console.log("media array after sorting", userMedia);

      val.media = userMedia;

      state.user = val;
      console.log("VUEX: set user to", state.user);
    }
  },
  setMessageTargetId(state, val) {
    state.messageTargetId = val;
    console.log("VUEX: set messageTargetId to", state.messageTargetId);
  },
  setMessageTargetName(state, val) {
    state.messageTargetName = val;
    console.log("VUEX: set messageTargetName to", state.messageTargetName);
  },
  setMessageTargetAvatar(state, val) {
    state.messageTargetAvatar = val;
    console.log("VUEX: set messageTargetAvatar to", state.messageTargetAvatar);
  },
  setMessageTargetAvatarType(state, val) {
    state.messageTargetAvatarType = val;
    console.log(
      "VUEX: set messageTargetAvatarType to",
      state.messageTargetAvatarType
    );
  },
  setFaceTrackingModelReady(state, val) {
    state.faceTrackingModelReady = val;
    console.log(
      "VUEX: set faceTrackingModelReady to",
      state.faceTrackingModelReady
    );
  },
  setEffectLoadingTrue(state, index) {
    state.effectList[index].loading = true;
    console.log(
      `VUEX: set effectList[${index}].loading to ${state.effectList[index].loading}`
    );
  },
  setEffectLoadingFalse(state, index) {
    state.effectList[index].loading = false;
    console.log(
      `VUEX: set effectList[${index}].loading to ${state.effectList[index].loading}`
    );
  },
  setDeepARInstance(state, val) {
    state.deepARInstance = val;
    console.log("VUEX: set deepARInstance to", state.deepARInstance);
  },
  setPhoto(state, val) {
    state.photo = val;
    //console.log("VUEX: set photo to", state.photo);
  },
  addPhotoToUserProfileMedia(state, index) {
    console.log("type of index is", typeof index, index);
    if (state.photo) {
      state.userProfileMedia.splice(index, 1, {
        ...state.userProfileMedia[index],
        type: "IMAGE",
        url: state.photo
      });
      console.log("VUEX: new userProfileMedia arr", state.userProfileMedia);
    }
  },
  addVideoToUserProfileMedia(state, index) {
    console.log("type of index is", typeof index, index);
    if (state.video) {
      state.userProfileMedia.splice(index, 1, {
        ...state.userProfileMedia[index],
        type: "VIDEO",
        url: state.video
      });
      // console.log("VUEX: new userProfileMedia arr", state.userProfileMedia);
    }
  },
  setUserProfileMedia(state, val) {
    state.userProfileMedia = val;
    console.log("VUEX: new userProfileMedia arr", state.userProfileMedia);
  },
  updateUserProfileMediaIndex(state) {
    let arr = state.userProfileMedia;
    for (let i = 0; i < 9; i++) {
      arr[i].index = i;
    }
    state.userProfileMedia = arr;
  },
  removeUserProfileMedia(state, val) {},
  resetUserProfileMedia(state) {
    let defaultUserMedia = [
      { index: 0, type: null, url: null },
      { index: 1, type: null, url: null },
      { index: 2, type: null, url: null },
      { index: 3, type: null, url: null },
      { index: 4, type: null, url: null },
      { index: 5, type: null, url: null },
      { index: 6, type: null, url: null },
      { index: 7, type: null, url: null },
      { index: 8, type: null, url: null }
    ];
    state.userProfileMedia = defaultUserMedia;
    console.log("VUEX: new userProfileMedia arr", state.userProfileMedia);
  },
  setCurrentMediaIndex(state, val) {
    state.currentMediaIndex = val;
    console.log("VUEX: set currentMediaIndex to", state.currentMediaIndex);
  },
  setVideo(state, val) {
    state.video = val;
    // console.log("VUEX: set video to", state.video);
  },
  setActiveEffectIcon(state, val) {
    state.activeEffectIcon = val;
    console.log("VUEX: set activeEffectIcon to", state.activeEffectIcon);
  },
  setLoadingEffectIcon(state, val) {
    state.loadingEffectIcon = val;
    console.log("VUEX: set loadingEffectIcon to", state.loadingEffectIcon);
  },
  addSexualOrientation(state, item) {
    state.userSexualOrientations.push(item);
    console.log("VUEX: new user SO array", state.userSexualOrientations);
  },
  removeSexualOrientation(state, item) {
    const filtered = state.userSexualOrientations.filter(s => s.name !== item);
    state.userSexualOrientations = filtered;
    console.log("VUEX: new user SO array", state.userSexualOrientations);
  },
  resetSexualOrientation(state) {
    state.userSexualOrientations = [];
    console.log("VUEX: new user SO array", state.userSexualOrientations);
  },
  setGender(state, val) {
    state.gender = val;
    console.log("VUEX: set gender to", state.gender);
  },
  setShowGenderOnProfile(state, val) {
    state.showGenderOnProfile = val;
    console.log("VUEX: set showGenderOnProfile to", state.showGenderOnProfile);
  },
  setShowSexualOrientationOnProfile(state, val) {
    state.showSexualOrientationOnProfile = val;
    console.log(
      "VUEX: set showSexualOrientationOnProfile to",
      state.showSexualOrientationOnProfile
    );
  },
  setBirthday(state, val) {
    state.birthday = val;
    console.log("VUEX: set birthday to", state.birthday);
  },
  setEmail(state, val) {
    state.email = val;
    console.log("VUEX: set email to", state.email);
  },
  setFirstName(state, val) {
    state.firstName = val;
    console.log("VUEX: set firstName to", state.firstName);
  },
  setShowMePreference(state, val) {
    if (val === "Man") {
      state.showMePreference = ["Man"];
    } else if (val === "Woman") {
      state.showMePreference = ["Woman"];
    } else if (val === "Everyone") state.showMePreference = ["Man", "Woman"];
    console.log("VUEX: set showMePreference to", state.showMePreference);
  },
  resetShowMePreference(state) {
    state.showMePreference = [];
    console.log("VUEX: set showMePreference to", state.showMePreference);
  },
  setUniversity(state, val) {
    state.university = val;
    console.log("VUEX: set university to", state.university);
  },
  addPassion(state, item) {
    state.passions.push(item);
    console.log("VUEX: new user passions array", state.passions);
  },
  removePassion(state, item) {
    const filtered = state.passions.filter(s => s.name !== item);
    state.passions = filtered;
    console.log("VUEX: new user passions array", state.passions);
  },
  resetPassions(state) {
    state.passions = [];
    console.log("VUEX: new user passions array", state.passions);
  },
  setChannels(state, val) {
    state.channels = val;
    console.log("VUEX: set user channels array", state.channels);
  },
  setMessageChannelName(state, val) {
    state.messageChannelName = val;
    console.log("VUEX: set messageChannelName", state.messageChannelName);
  },
  setPhoneNumber(state, val) {
    state.phoneNumber = val;
    console.log("VUEX: set phoneNumber", state.phoneNumber);
  },
  setEmail(state, val) {
    state.email = val;
    console.log("VUEX: set email", state.email);
  }
};

export const actions = {
  async createUserProfile({ dispatch, commit, state }) {
    const userProfileMediaWithURL = await Promise.all(
      state.userProfileMedia.map(async e => {
        console.log("turn", e.index);
        if (!e.url) {
          console.log("The object is NULL, skipping this one", e.url);
          return { ...e };
        } else if (e.url.includes("https://")) {
          console.log("The object already has a URL, skipping this one", e.url);
          return { ...e };
        }
        if (e.type === "IMAGE") {
          console.log("photo detected");
          this.$axios.setHeader("Content-Type", "application/json");
          const result = await this.$axios.$post(
            this.app.$config.imageUploadAPI,
            { image: e.url }
          );
          console.log("upload photo result", result);
          return { ...e, url: result.url };
        } else if (e.type === "VIDEO") {
          console.log("video detected");
          this.$axios.setHeader("Content-Type", "application/json");
          const result = await this.$axios.$post(
            this.app.$config.videoUploadAPI,
            { video: e.url }
          );
          console.log("upload video result", result);
          return { ...e, url: result.url };
        }
      })
    );
    console.log("old userProfileMedia array", state.userProfileMedia);
    console.log(
      "Iteration finished. Here's the new media array with url",
      userProfileMediaWithURL
    );
    commit("setUserProfileMedia", userProfileMediaWithURL);
  },
  async addUser({ dispatch, commit, state }) {
    let dob = new Date(state.birthday);
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);

    let userInput = [
      {
        age: age,
        email: "abc@abc.com",
        gender: state.gender,
        location: {
          longitude: 114.177216,
          latitude: 22.302711
        },
        name: state.firstName,
        nickname: state.firstName,
        passions: state.passions.map(e => {
          return { name: e.name };
        }),
        phoneNumber: "98765432",
        university: state.university,
        media: state.userProfileMedia,
        isGenderPublic: state.showGenderOnProfile,
        isOrientationPublic: state.showSexualOrientationOnProfile,
        orientation: state.userSexualOrientations.map(e => {
          return e.name;
        }),
        showGender: state.showMePreference
      }
    ];

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
                university
                media {
                  index
                  type
                  url
                }
                isGenderPublic
                isOrientationPublic
                orientation
                showGender
              }
            }
          }
        `,
        variables: {
          input: userInput
        }
      });
      console.log("addUser results", results.data.addUser.user[0]);
      commit("setUser", results.data.addUser.user[0]);
    } catch (e) {
      console.error(e);
    }
  },
  async updateUser({ dispatch, commit, state }) {
    let dob = new Date(state.birthday);
    let month_diff = Date.now() - dob.getTime();
    let age_dt = new Date(month_diff);
    let year = age_dt.getUTCFullYear();
    let age = Math.abs(year - 1970);

    let userInput = [
      {
        // age: age,
        // email: "abc@abc.com",
        // gender: state.gender,
        // location: {
        //   longitude: 114.177216,
        //   latitude: 22.302711
        // },
        // name: state.firstName,
        nickname: state.firstName,
        // passions: state.passions.map(e => {
        //   return { name: e.name };
        // }),
        // phoneNumber: "98765432",
        // university: state.university,
        media: state.userProfileMedia
        // isGenderPublic: state.showGenderOnProfile,
        // isOrientationPublic: state.showSexualOrientationOnProfile,
        // orientation: state.userSexualOrientations.map(e => {
        //   return e.name;
        // }),
        // showGender: state.showMePreference
      }
    ];

    //console.log("updateUser Input:", userInput);
    // console.log("before removing __typename", state.userProfileMedia);
    let newArr = state.userProfileMedia.map(e => {
      const { __typename, ...newMediaObject } = e;
      return newMediaObject;
    });
    console.log("state.userProfileMedia after removing __typename", newArr);

    let newArr2 = state.user.media.map(e => {
      const { __typename, ...newMediaObject } = e;
      return newMediaObject;
    });
    console.log("state.user.media after removing __typename", newArr2);

    var isEqual = function(value, other) {
      // Get the value type
      var type = Object.prototype.toString.call(value);

      // If the two objects are not the same type, return false
      if (type !== Object.prototype.toString.call(other)) return false;

      // If items are not an object or array, return false
      if (["[object Array]", "[object Object]"].indexOf(type) < 0) return false;

      // Compare the length of the length of the two items
      var valueLen =
        type === "[object Array]" ? value.length : Object.keys(value).length;
      var otherLen =
        type === "[object Array]" ? other.length : Object.keys(other).length;
      if (valueLen !== otherLen) return false;

      // Compare two items
      var compare = function(item1, item2) {
        // Get the object type
        var itemType = Object.prototype.toString.call(item1);

        // If an object or array, compare recursively
        if (["[object Array]", "[object Object]"].indexOf(itemType) >= 0) {
          if (!isEqual(item1, item2)) return false;
        }

        // Otherwise, do a simple comparison
        else {
          // If the two items are not the same type, return false
          if (itemType !== Object.prototype.toString.call(item2)) return false;

          // Else if it's a function, convert to a string and compare
          // Otherwise, just compare
          if (itemType === "[object Function]") {
            if (item1.toString() !== item2.toString()) return false;
          } else {
            if (item1 !== item2) return false;
          }
        }
      };

      // Compare properties
      if (type === "[object Array]") {
        for (var i = 0; i < valueLen; i++) {
          if (compare(value[i], other[i]) === false) return false;
        }
      } else {
        for (var key in value) {
          if (value.hasOwnProperty(key)) {
            if (compare(value[key], other[key]) === false) return false;
          }
        }
      }

      // If nothing failed, return true
      return true;
    };
    let compareArrResult = isEqual(newArr, newArr2);
    console.log("result: ", compareArrResult);
    if (compareArrResult == true) {
      console.log("skipping the mutation as nothing is new.");
      return;
    } else {
      // Delete media first
      try {
        const results = await this.app.apolloProvider.defaultClient.mutate({
          mutation: gql`
            mutation($patch: UpdateUserInput!) {
              updateUser(input: $patch) {
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
                  university
                  media {
                    index
                    type
                    url
                  }
                  isGenderPublic
                  isOrientationPublic
                  orientation
                  showGender
                }
              }
            }
          `,
          // variables: {
          //   input: userInput
          // }
          variables: {
            patch: {
              filter: { nickname: { eq: state.user.nickname } },
              remove: { media: newArr2 }
            }
          }
        });
        console.log("updateUser results", results.data.updateUser.user[0]);
        commit("setUser", results.data.updateUser.user[0]);
        commit("setUserProfileMedia", state.user.media);
      } catch (e) {
        console.error(e);
      }

      // Set media again
      try {
        const results = await this.app.apolloProvider.defaultClient.mutate({
          mutation: gql`
            mutation($patch: UpdateUserInput!) {
              updateUser(input: $patch) {
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
                  university
                  media {
                    index
                    type
                    url
                  }
                  isGenderPublic
                  isOrientationPublic
                  orientation
                  showGender
                }
              }
            }
          `,
          // variables: {
          //   input: userInput
          // }
          variables: {
            patch: {
              filter: { nickname: { eq: state.user.nickname } },
              set: { media: newArr }
            }
          }
        });
        console.log("updateUser results", results.data.updateUser.user[0]);
        commit("setUser", results.data.updateUser.user[0]);
        commit("setUserProfileMedia", state.user.media);
      } catch (e) {
        console.error(e);
      }
    }
  },
  clearOnboardingFormStates({ dispatch, commit, state }) {
    //  Reset registration form state
    commit("setUser", null);
    commit("setFirstName", "");
    commit("setBirthday", "");
    commit("setGender", "");
    commit("setShowGenderOnProfile", false);
    commit("resetSexualOrientation");
    commit("setShowSexualOrientationOnProfile", false);
    commit("resetShowMePreference");
    commit("setUniversity", "");
    commit("resetPassions");
    commit("resetUserProfileMedia");
  }
  // setPhoneNumber(context, payload) {
  //   context.commit("setPhoneNumber", { payload });
  // }
};

// export const getters = {
//   getPhoneNumber(state) {
//     return state.phoneNumber;
//   }
// };
