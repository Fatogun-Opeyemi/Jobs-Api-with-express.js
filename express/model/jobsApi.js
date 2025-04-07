import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
  title: String,
  type: String,
  description: String,
  location: String,
  salary: String,
  company: {
    name: String,
    description: String,
    contactEmail: String,
    contactPhone: String,
  },
}, {
  timestamps: true,
});

const Jobs = mongoose.model('Jobs', jobSchema);

export default Jobs;