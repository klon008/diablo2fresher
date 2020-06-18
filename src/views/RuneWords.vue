<template> 
	<div class="RuneWords">
		<h1>Runewords</h1>
		<span>Filter by: </span>
		<input type="text" v-model="filter">
		
		<div class="items">
			<div class="items_header">
				<div class="items_header_h">№</div>
				<div class="items_header_h">Runeword</div>
				<div class="items_header_h">Stats</div>
				<div class="items_header_h">Comments</div>
			</div>
			<div v-for="(item, index) in filteredJson" v-bind:key="index">
				<div class="index">{{index+1}}</div>
				<div class="name" 
					v-html="item.name"></div>
				<div class="stats" 
					v-html="item.description"></div>
				<div class="comments" 
					v-html="item.Comments"></div>
			</div>
		</div>
	</div>
</template>


<script>
	import axios from 'axios';
	export default {
		name: 'RuneWords',

		data: function(){
			return {
				qrJson: [],
				filter: '',
			}
		},
		computed:{
			filteredJson: function(){
				return this.qrJson.filter((item)=>{
					if (item.name.toLowerCase().indexOf(this.filter.toLowerCase()) == -1){
						return false;	
					}
					return true;
				});
			}
		},
		methods: {
			checkFilter: function(item){
				if (item.name.indexOf(this.filter) == -1){
					return false;	
				}
				return true;
			}
		},
		mounted(){
		},
		created(){
			let axiosPrefix = '';
			if (process.env.NODE_ENV == 'production') axiosPrefix = '/diablo2fresher';
			axios.get(axiosPrefix+'/json/qr.json')
			.then(response=>{
				if (response && response.data) {
					this.qrJson = response.data;
				}
			});

		}
	}
</script>

<style lang="scss" scoped>
.items_header{
	display: table-header-group;
	&>.items_header_h{
		background: #4D0B0B;
		vertical-align: center;
		text-align: center;
	}
}
.items{
	width: 100%;
	display: table;
	margin-top: 2em;
	margin-bottom: 2em;
	&>div{
		display: table-row;
		&>div{
			text-align: left;
			padding-top: 1em;
			padding-left: 1em;
			padding-right: 1em;
			display: table-cell;
			background: #1A0303;
			border: 1px solid #4D0B0B;
		}
	}
}
</style>