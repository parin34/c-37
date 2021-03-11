class Player {
  constructor(){
    this.distance=0;
    this.index=null;
    this.name=null;
  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(){
    var playerIndex = "players/player" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      distance:this.distance
    });
  }
  static getPlayerinfo(){
    var playerinfo=database.ref('players');
    playerinfo.on("value",(data)=>{
      allPlayers=data.val()
    })

    
  }
}
