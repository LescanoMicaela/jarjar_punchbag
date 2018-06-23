var vue = new Vue({
	el:'#vue-app',
	data:{
		message: "Punch him",
		health: 100,
		firstPunch: false,
		nearlyDead: false,
		ended: false,
		punch: false
	},
	methods:{
		punchHim: function(){
			var audio = new Audio('/audio/jarjar.mp3');
			audio.pause();
			this.health -= 10;
			console.log(this.health)
			audio.play();
			this.onPunch();
			this.gameOver();
			this.changeHealthColor();
			
		},
		gameOver: function(){
		if (this.health <= 0 ){
		this.nearlyDead = false;
		this.ended = true;
		this.message = "You killed him"
	
	}
	},
		restart: function(){
			this.health = 100;
			this.ended = false;
			this.message= "Punch him"
		},
		onPunch: function(){
			this.punch = true;
			var self = this;
			setTimeout(function(){
				self.punch = false;
				
		}, 1000
					   )
		},
		changeHealthColor: function(){
		
			if (this.health <= 90 && this.health > 60){
				this.firstPunch = true;
				this.message = "That's all you got?"
			} else if ( this.health < 60 && this.health > 0 ){
				this.firstPunch = false;
				this.nearlyDead = true;
				this.message = "Finish him"
				
			}
		}
		
	},
	computed:{
		
	}
	
})