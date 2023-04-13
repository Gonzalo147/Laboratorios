import { createI18n } from 'vue-i18n'

 const i18n = createI18n({
  locale:"es",
  messages :{
    en:{
        "MyComponent":'My Component',
        "ClickMe" :"Click me!"
    },
    es:{
        "MyComponent": "Mi componente",
        "ClickMe" :"¡Haz click!",
        "Code:":"Codigo:",
        "Name:":"Nombre:",
        "Validate":"Validar",
        "Category:":"Categoría",
        "Calendar:":"Calendario:",
        "Quantity:":"Cantidad:",
        "Description:":"Descripción:"
    },
    fr:{
        "MyComponent": "mon composant",
        "ClickMe" :"¡Cliquez sur!"
    }
  }
})


export  default  i18n;