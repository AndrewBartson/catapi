let express = require('express')
let bodyParser = require('body-parser')
let app = express()

let controller = require('./controller')

const PORT = process.env.PORT || 3000

app.use(bodyParser.json())

app.route('/cats')
  .get(controller.getCat)
  .post(controller.createCat)

app.route('/cats/:id')
  .get(controller.getCat)
  .patch(controller.updateCat)
  .delete(controller.deleteCat)

/*
app.get('/cats', controller.getAllCats)
app.get('/cats/:id', controller.getCat)
app.post('/cats', controller.createCat)
app.patch('/cats/:id', controller.updateCat)
app.delete('/cats/:id', controller.deleteCat)
*/
  
app.use((err, req, res, next) => {
  res.json({error: err})
})

app.listen(PORT, () => {
  console.log(`app listening on ${PORT}`)
})
