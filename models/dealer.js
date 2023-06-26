import { Schema, model, models } from 'mongoose';

const DealerSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },

  fullName: {
    type: String,
    required: [true, 'First and last names are required.'],
  },

  address: {
    type: String,
    required: [true, 'Contact address is required.'],
  },

  whatsAppNumber: {
    type: Number,
    required: [true, 'WhatsApp number is required.'],
  },
  
  bio: {
    type: String,
    required: [true, 'Brief business profile is required.'],
  }
});

const Dealer = models.Dealer || model('Dealer', DealerSchema);

export default Dealer;