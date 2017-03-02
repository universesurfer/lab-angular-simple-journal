const express       = require('express');
const router        = express.Router();
const mongoose     = require('mongoose');

const Journal = require('../../models/journal-entry');

router.get('/', (req, res, next) => {
 Journal.find({})
   .exec((err, journalEntries) => {
     if (err) {
       return res.send(err);
     }
     return res.json(journalEntries);
   });
});


router.get('/:id', (req, res) => {
  if(!mongoose.Types.ObjectId.isValid(req.params.id)) {
    return res.status(400).json({ message: 'Specified id is not valid' });
  }

  Journal.findById(req.params.id, (err, journals) => {
      if (err) {
        return res.send(err);
      }

      return res.json(journals);
    });
});

// router.post('/', (req, res) => {
//  const journal = new Journal({
//    date: req.body.date,
//    title: req.body.title,
//    content: req.body.content,
//
//  });
//
//  journal.save((err) => {
//    if (err) {
//      return res.send(err);
//    }
//
//    return res.json({ message: 'New journal entry created!' });
//  });
// });






module.exports = router;
