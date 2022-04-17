const bookModel= require("../models/newBook")
const authorModel = require("../models/newAuthor")
const publisherModel = require("../models/newPublisher")


const createBook= async function (req, res) {
   
             
                              //  solution 3 (a)
    let authorId = req.body.author;

    if (!authorId) {
    return res.send("author id must be present in the request body this detail is required");
    }
  
                              //  solution 3 (b)
    let author = await authorModel.findById(authorId);
    if (!author) {
      return res.send("no author present with the given id this detail is required");
    }
                        
                             //  solution 3 (c)
                             
    let publisherId = req.body.publisher;
    if (!publisherId) {
        return res.send("publisher id must be present in the request body  this detail is required");
      }

                               //  solution 3 (d)
    let publisher = await publisherModel.findById(publisherId);
    if (!publisher) {
      return res.send("no publisher present with the given id this detail is required");
    }
    let book = req.body;
    let bookCreated = await bookModel.create(book);
    res.send({ data: bookCreated });  
}
                       
                            //   solution 4
const getBooksWithAuthorDetails = async function (req, res) {
    let specificAuthor = await bookModel.find({_id:"61951bfa4d9fe0d34da86344"}).populate("author publisher")
    res.send({data: specificAuthor})   
}

                                    //  solution 5 (a)
const updateKey = async function(req,res){
  let update = await bookModel.updateOne({publisher:"61951bfa4d9fe0d34da84523" },{isHardCover:true});
  res.send({data:update})
}

const updatetrue = async function(req,res){
  let update = await bookModel.updateOne({publisher:"61951bfa4d9fe0d34da84526" },{isHardCover:true});
  res.send({data:update})
}


const updatePrice = async function(req,res){
  let price = await bookModel.find({"ratings":{$gt:3}}).updateMany({"price":954})
  res.send({data:price})
}


module.exports.createBook= createBook

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails

module.exports.updateKey = updateKey

module.exports.updatetrue = updatetrue

module.exports.updatePrice = updatePrice