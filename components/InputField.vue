<template>
    <div class="flex justify-center w-full bg-transparent montserrat-font">
        <div class="flex flex-col w-4/5">
            <label for="input" class="mb-3 text-3xl text-grayish-red">{{labelText}}</label>
            <input id="input" :type="inputType" class="w-full py-3 pl-4 -ml-2 bg-gray-100 rounded-full input-color" :placeholder="placeHolder" >
            <div class="mt-2 text-sm text-lightgrey">{{hint}}</div>
        </div>
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

.hint-color {
    color: #796B6B
}
</style>