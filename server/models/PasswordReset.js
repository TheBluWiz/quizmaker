const { Schema, model } = require('mongoose');

const resetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  resetLink: {
    type: String,
    required: true,
    unique: true
  }
});


const PasswordReset = model('PasswordReset', resetSchema);

module.exports = PasswordReset;

