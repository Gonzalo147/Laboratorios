<template>
    <nav class="navbar">
	<a href="#" class="logo"> LOGO </a>
	<input type="checkbox" id="toggler">
	<label for="toggler"><i class="ri-menu-line"></i></label>
	<div class="menu">
		<ul class="list">
			<li><a href="#">Home</a></li>
			<li><a href="#">About Us</a></li>
			<li><a href="#">Services</a></li>
            <li><a href="#">Sign up</a></li>
		</ul>
	</div>
</nav>
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
.navbar{
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	justify-content: space-between;
	background-color: #252525;
	padding: 15px
}

.navbar a{
	text-decoration: none;
	color: inherit
}

.logo{
	margin-right: 50px;
}


.list{
	list-style: none;
	display: flex;
	gap: 25px;
}

#toggler,
.navbar label{
	display: none;
}

@media screen and 
(max-width: 600px){
	.menu{
		width: 100%;
		max-height: 0;
		overflow: hidden;
	}
	.list{
		flex-direction: column;
		align-items: center;
		padding: 20px;
	}
	.navbar label{
		display: inline-flex;
		align-items: center;
		padding: 20px;
	}
	#toggler:checked ~ .menu{
		max-height: 100%;
	}
}
</style>
