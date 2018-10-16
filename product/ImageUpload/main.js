var app = new Vue({
	el: '#app',
	data: {
		preview: ""
	},
	methods: {
		change: function(e){
			console.log(e.target.files);
			var file = e.target.files[0];
			console.log(file);
			if(file && file.type.match(/^image\/(png|jpeg)$/)){
				this.preview = window.URL.createObjectURL(file);
				console.log(app.preview);
			}
		}
	}
});
