const express = require('express')
const router = express.Router()

const moviesAPICtrl = require('../../controllers/api/movies')

router.get('/', moviesAPICtrl.index)
router.get('/:id', moviesAPICtrl.show)
router.post('/', moviesAPICtrl.create)
router.put('/:id', moviesAPICtrl.update)
router.delete('/:id', moviesAPICtrl.delete)

module.exports = router