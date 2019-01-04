const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = mongoose.Schema(
  {
    title: {
      //required: true,
      type: String,
      unique: 1,
      maxlength: 100
    },
    languages: [
      {
        language_name: {
          type: String,
          //required: true,
          unique: 1,
          maxlength: 30
        },
        // audio: { type: Boolean, required: true },
        // text: { type: Boolean, required: true }
        audio: { type: Boolean },
        text: { type: Boolean }
      }
    ],
    release_date: {
      //required: true,
      type: String,
      maxlength: 100
    },
    developer: {
      //required: true,
      type: String,
      maxlength: 100
    },
    publisher: {
      //required: true,
      type: String,
      maxlength: 100
    },
    //genres: [{ type: Schema.Types.ObjectId, ref: 'genres', required: true }],
    genres: [{ type: Schema.Types.ObjectId, ref: 'genres' }],
    prices: {
      //basePrice: { type: Number, required: true },
      //discount: { type: Number, default: null }
      basePrice: { type: Number },
      discount: { type: Number, default: null }
    },
    images: {
      //background: { type: String, required: true },
      //mobile: { type: String, required: true },
      background: { type: String },
      mobile: { type: String },
      logo: { type: String },
      card: { type: String }
    },
    //total_size: { type: Number, required: true, maxlength: 100 },
    total_size: { type: Number, maxlength: 100 },
    description: {
      //lead: { type: String, required: true },
      lead: { type: String },
      full: { type: String },
      whats_cool_about_it: { type: String }
    },
    screenshots: [
      {
        formatted_images: [
          {
            formatter_name: { type: String },
            //image_url: { type: String, required: true }
            image_url: { type: String }
          }
        ]
      }
    ],
    videos: [
      {
        video_url: { type: String },
        thumbnail_url: { type: String },
        provider: { type: String, default: 'youtube' }
      }
    ],
    system_requirements: [
      {
        //system: { type: String, required: true },
        //processor: { type: String, required: true },
        //memory: { type: String, required: true },
        //graphics: { type: String, required: true },
        //directX: { type: String },
        //storage: { type: String, required: true }
        system: { type: String },
        processor: { type: String },
        memory: { type: String },
        graphics: { type: String },
        directX: { type: String },
        storage: { type: String }
      }
    ]
  },
  { timestamps: true }
);

const Game = mongoose.model('Game', gameSchema);

module.exports = { Game };
