<template>
    <div class="container">
      <div class="my-class">My component {{name}} {{title}}</div>
        <input type="text" @input="handleChange" >
        <pv-inputText type="text"/>
        <input type="button" @click="handleClick(3)" value="Click me !">
        <pv-button label="Click me !"  icon="pi pi-check" severity="danger"/>
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
    display: flex;
    gap:10px;
    flex-direction: column;
    align-items: center;
    padding: 10px;
    border: #282828 solid;
}


.containerGrid {
    display: Grid;
    grid-template-columns:1fr 1fr;
    grid-gap:10px;
}
</style>