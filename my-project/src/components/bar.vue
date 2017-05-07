<template>
	<div class="bar">
		<h3>This is the bar component</h3>
		<form id="bar_form"><label>Name</label>
			<label>Name</label>	
			<input type="text" id="txtName">
			<button id="btnOk" v-on:click="clickFunction()">OK</button>
		</form>
		
	</div>
</template>
<script>
	export default {
		name: 'bar',
		data () {
			return {
				msg: 'This is the bar component'
			}
		},
		methods: {
		    clickFunction: function (e) {
		      alert(1);
		    }
		  }
	}
</script>
<style scoped>
	.bar{
		background-color: #AFFF33;
		height:800px;
	}
</style>