import mongoose from "mongoose";
import {playerSchema} from '../models/playerModel'

const Player = mongoose.model('Player', playerSchema);

export const addNewplayer = async (req, res) => {
    try {
      const newPlayer = new Player(req.body);
      const savedPlayer = await newPlayer.save();
      res.status(201).json(savedPlayer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  export const getPlayer = async (req, res) => {
    try {
      const existingPlayer = await Player.find({});
      res.status(201).json(existingPlayer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

    
  export const getPlayerWithId = async (req, res) => {
    try {
      const existingPlayer = await Player.findById(req.params.PlayerId);
      res.status(201).json(existingPlayer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

  export const updatePlayer = async (req, res) => {
    try {
      const existingPlayer = await Player.findOneAndUpdate({_id:req.params.PlayerId}, req.body , {new: true});
      res.status(201).json(existingPlayer);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  export const deletePlayer = async (req, res) => {
    try {
      const existingPlayer = await Player.remove(req.params.PlayerId);
      res.status(201).json(existingPlayer);
    } catch (error) {
      res.status(500).json({ error: 'Player has been successfully Removed' });
    }
  };
  