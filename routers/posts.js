const express = require('express');
const router = express.Router();


// Index
router.get('/', (req, res) => {
  res.send('Restituisce tutti gli elementi')
});

//Show
router.get('/:id', (req, res) => {
  res.send(`Restituisce un singolo elemento con id ${req.params.id}`)
});

//Store
router.post('/', (req, res) => {
  res.send('Crea un nuovo elemento')
});

//Update
router.put('/:id', (req, res) => {
  res.send(`Modifica interamente un elemento con id ${req.params.id}`)
});

//Modify
router.patch('/:id', (req, res) => {
  res.send(`Modifica parzialmente un elemento con id ${req.params.id}`)
});

//Destroy
router.delete('/:id', (req, res) => {
  res.send(`Elimina un elemento con id ${req.params.id}`)
});


module.exports = router;