const express = require('express');
const router = express.Router();


let movie = ["morbius", "perfect world", "seven stars", "iron man"]

router.get('/movie', function (req, res) {
  
  res.send(movie)
});

router.get('/movies/:indexNumber', function (req, res) {
    const movies = ["morbius", "perfect world", "seven stars", "iron man"]
    let i = req.params.indexNumber
    if(i<movies.length){
        res.send(movies[i])
    }
    else{
        res.send('use valid index')
    }
  });

//   router.get('/films', function(req,res){
//       const film = [ {
//         "id": 1,
//         "nam": "The Shining"
//        }, {
//         "id": 2,
//         "nam": "Incendies"
//        }, {
//         "id": 3,
//         "nam": "Rang de Basanti"
//        }, {
//         "id": 4,
//         "nam": "Finding Nemo"
//        }]

//        res.send(film)
       
//   });

  router.get('/film/:filmId', function(req,res){

    const film = [ {
        "id": 1,
        "nam": "The Shining"
       }, {
        "id": 2,
        "nam": "Incendies"
       }, {
        "id": 3,
        "nam": "Rang de Basanti"
       }, {
        "id": 4,
        "nam": "Finding Nemo"
       }]

       let i =req.params.filmId;
     if(i<film.length){
         res.send(film[i])
     }
     else{
         res.send('not a valid input')
     }
      
  })

module.exports = router;

// adding this comment for no reason
