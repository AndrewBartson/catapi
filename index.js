let express = require('express')
let bodyParser = require('body-parser')
let app = express()

let model = require('./model')
console.log(model)
// equivalent to let model = require('./model/index')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

// Read routes
app.get('/cats', (req, res) => {
  let cats = model.getAllCats()
  res.json({data: cats})
})

app.get('/cats/:id', (req, res) => {
  let id = Number(req.params.id)
  let cat = model.getCat(id)
  res.json({data: cat})
})

// Create route
app.post('/cats', (req, res) => {
  let newCat = model.createCat(req.body)
  res.json({data: newCat})
})

// update route
app.patch('/cats/:id', (req, res) => {
  debugger
  let updatedCat = model.updateCat(req.params.id, req.body)
  res.json({data: updatedCat})
})

// destroy route
app.delete('/cats/:id', (req, res) => {
  let deletedCat = model.deleteCat(req.params.id)
  res.json({data: deletedCat})
})

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})
