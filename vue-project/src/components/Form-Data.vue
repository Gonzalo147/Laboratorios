<template>
    <div class="container">
        <label>{{ $t('Code::') }} {{name}}</label>
        <pv-inputMask id="basic" v-model="value" mask="99-999999" placeholder="99-999999"/>
        <pv-button :label="$t('Validate')"  icon="pi pi-check"/>
    </div>
    <div class="container">
        <label>{{ $t('Name:') }} {{name}}</label>
        <pv-inputText type="text" placeholder="Product Name"/>
    </div>
    <div class="container">
        <label>{{ $t('Category:') }} {{name}}</label>
        <pv-multiSelect v-model="selectedCategory" :options="category" optionLabel="Category" placeholder="Select Category"
    :maxSelectedLabels="3" class="w-full md:w-20rem"/>
    </div>
    <div class="container">
        <label>{{ $t('Calendar:') }} {{name}}</label>
        <pv-calendar v-model="date"/>
    </div>
    <div class="container">
        <label>{{ $t('Quantity:') }} {{name}}</label>
        <pv-inputNumber v-model="value1" inputId="withoutgrouping" :useGrouping="false" />
    </div>
    <div class="container">
        <label>{{ $t('Description:') }} {{name}}</label>
        <pv-textArea v-model="textArea" rows="5" cols="30" />
    </div>
    <div class="container-g">
    </div>
</template>

<script>
export default {
    props: ['name'],
    name: "form-data",
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
.container {
    display: flex;
    gap:10px;
    align-items: center;
    padding: 20px;
    border: #282828 solid;
}
</style>