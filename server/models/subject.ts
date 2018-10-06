import * as mongoose from 'mongoose';

const subjectSchema = new mongoose.Schema({
  name: String,
  information: String
});

const Subject = mongoose.model('Subject', subjectSchema);

export default Subject;