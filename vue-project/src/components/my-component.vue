<template>
    <div class="flex flex-column m-1 gap-3 container bg-green-100">
        <div class="flex align-items-center justify-content-center">{{ $t('MyComponent')}} {{name}} {{title}}</div>
        <input class="flex align-items-center justify-content-center" type="text" @input="handleChange" >
        <pv-inputText type="text" class="flex align-items-center justify-content-center"  />

        <img src="gatos" alt="gato">
        <label for="name" >Name:</label>
        <input id="name" type="button" @click="handleClick(3)" value="Click me !" class="flex align-items-center justify-content-center">
        <pv-button :label="$t('ClickMe')"  icon="pi pi-check" severity="danger" class="flex align-items-center justify-content-center"/>
    </div>
</template>


<script>
export default {
    props: ['name'],
    name: "header",
    data() {
        return { title: 'titulo 1' + Math.floor(Math.random())}
    },
    mounted() {
        console.log('-----montando componente')
    },
    updated() {
        console.log('-----actualizando componente')
    },
    unmounted() {
        console.log('-----unmount componente')
    },
    methods: {
        handleClick(numberA) {
            console.log('-----haciendo click',numberA)
            this.title = ' new title'
        },
        handleChange(){
            console.log('-----tipeando')
        }
    }
}
</script>

<style scoped>
.my-class{
    background-color: red;
    margin-top: 10px;
    color: white;
    font-size: large;
    padding: 9px;
}
.container {
    padding: 10px;
    border: #282828 solid;
}
.containerGrid {
    display: Grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
}
</style>