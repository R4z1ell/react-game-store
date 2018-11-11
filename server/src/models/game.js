const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const gameSchema = mongoose.Schema(
  {
    title: {
      required: true,
      type: String,
      unique: 1,
      maxlength: 100
    },
    languages: {
      cz: { type: String, default: 'Czech' },
      de: { type: String, default: 'Dutch' },
      en: { type: String, default: 'English' },
      es: { type: String, default: 'Spanish' },
      fr: { type: String, default: 'French' },
      it: { type: String, default: 'Italian' },
      pl: { type: String, default: 'Polish' },
      ru: { type: String, default: 'Russian' }
    },
    release_date: {
      required: true,
      type: String,
      maxlength: 100
    },
    developer: {
      required: true,
      type: String,
      maxlength: 100
    },
    publisher: {
      required: true,
      type: String,
      maxlength: 100
    },
    genres: [{ type: Schema.Types.ObjectId, ref: 'genres', required: true }],
    prices: {
      basePrice: { type: Number, required: true },
      discount: { type: String, default: null }
    },
    images: {
      background: { type: String, required: true },
      mobile: { type: String, required: true },
      logo: { type: String },
      card: { type: String }
    },
    total_size: { type: Number, required: true, maxlength: 100 },
    description: {
      lead: { type: String, required: true },
      full: { type: String },
      whats_cool_about_it: { type: String }
    },
    screenshots: [
      {
        formatted_images: [
          {
            formatter_name: { type: String },
            image_url: { type: String, required: true }
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
        system: { type: String, required: true },
        processor: { type: String, required: true },
        memory: { type: String, required: true },
        graphics: { type: String, required: true },
        directX: { type: String },
        storage: { type: String, required: true }
      }
    ]
  },
  { timestamps: true }
);

const Game = mongoose.model('Game', gameSchema);

module.exports = { Game };
