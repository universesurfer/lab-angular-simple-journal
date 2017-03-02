const mongoose = require ("mongoose");
const Journal = require ("../models/journal-entry");
mongoose.connect('mongodb://localhost/journal-development');



const journals = [

{

  title: "Peter Parker",
  content: "I love spiders"
},

{

  title: "Batman",
  content: "I hate bats"

},

{

  title: "Ironman",
  content: "I love iron"

},

{

  title: "Superman",
  content: "I love su...supers...(?)"
},

{

  title: "Flash",
  content: "I love speed"

},

{

  title: "Antman",
  content: "I love ants"
},

{

  title: "The Incredible Hulk",
  content: "You wouldn't like me when I'm angry"

},

{

  title: "Black Widow",
  content: "I love mother Russia"

},

{

  title: "Thor",
  content: "My hammer iz my lyfe, bruhh"

},

{

  title: "Codeman",
  content: "I love code"

},

];


Journal.create(journals, (err, docs)=>{
 if (err) { throw err };
   docs.forEach( (journals) => {
     console.log(journals.title);
   });
   mongoose.connection.close();
});
