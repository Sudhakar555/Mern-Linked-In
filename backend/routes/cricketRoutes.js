import { addNewplayer, deletePlayer, getPlayer, getPlayerWithId, updatePlayer } from '../controllers/playerControllers'

const routes = (app) => {
    app.route('/players')
    // Get End Point
        .get(getPlayer)
   
    // Post End Point
        .post(addNewplayer);

    app.route('/player/:PlayerId')
     // get Specific Player
     .get(getPlayerWithId)
    // update Player
     .put(updatePlayer)
     //Delete a player
     .delete(deletePlayer)
}

export default routes;