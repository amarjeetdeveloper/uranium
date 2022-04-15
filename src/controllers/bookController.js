const bookModel= require("../models/newBook")
const authorModel = require("../models/newAuthor")
const publisherModel = require("../models/newPublisher")


const createBook= async function (req, res) {
  
  let authorId = req.body.author;
  if (!authorId) {
    return res.send("author id must be present in the request body this detail is required");
    }
  
    let author = await authorModel.findById(authorId);
    if (!author) {
      return res.send("no author present with the given id this detail is required");
    }
    let publisherId = req.body.publisher;

    if (!publisherId) {
        return res.send("publisher id must be present in the request body  this detail is required");
      }

    let publisher = await publisherModel.findById(authorId);
    if (!publisher) {
      return res.send("no publisher present with the given id this detail is required");
    }
    let book = req.body;
    let bookCreated = await bookModel.create(book);
    return res.send({ data: bookCreated });  
}
                       
                            //   solution 4
const getBooksWithAuthorDetails = async function (req, res) {
    let specificAuthor = await bookModel.find({_id:"61951bfa4d9fe0d34da86344"}).populate("author publisher")
    res.send({data: specificAuthor})

}

module.exports.createBook= createBook

module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
