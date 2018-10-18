var app = new Vue({
	el: "#get-git-Repositories",
	data: {
		list: [],
		current: "",
		topics: [
			{value: "vue", name: "vue.js"},
			{value: "jQuery", name: "jQuery"},
			{value: "php", name: "php"},
			{value: "python", name: "python"} //任意で言語を増やす
		]
	},
	watch: {
		current: function(val){
			axios.get("https://api.github.com/search/repositories",{
				params: {q: "topic:" + val}
			}).then(function(response){
				this.list = response.data.items;
			}.bind(this));
		}
	}
});
