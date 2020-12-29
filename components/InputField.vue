<template>
    <div class="flex flex-col items-center justify-start w-full bg-transparent montserrat-font">
        <label for="input" class="w-4/5 mb-3 text-4xl label-color">{{labelText}}</label>
        <input id="input" :type="inputType" class="w-4/5 py-3 pl-4 -ml-4 bg-gray-100 rounded-full input-color" :placeholder="placeHolder" >
        <div>{{hint}}</div>
    </div>
</template>

<script>
export default {
    props:{
        labelText:{
            type: String,
            default: 'Label Text'
        },
        placeHolder:{
            type: String,
            default: 'PlaceHolder'
        },
        hint:{
            type: String,
            default: 'hint'
        },
        inputType:{
            type: String,
            default: 'text'
        },
        textArea:{
            type: Boolean,
            default: false
        }
    }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');

.montserrat-font{
    font-family: 'Montserrat', sans-serif;
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: red;
  opacity: 1; /* Firefox */
  padding: 15px;
}

:-ms-input-placeholder { /* Internet Explorer 10-11 */
  color: red;
}

::-ms-input-placeholder { /* Microsoft Edge */
  color: red;
}

.label-color {
    color: #796B6B
}

.input-color {
    background-color: #EEF0FC;
}
</style>