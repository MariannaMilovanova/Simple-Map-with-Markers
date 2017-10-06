const router = require('express').Router();
const mapRepository = require('../../repositories/map/mapRepository');

router.post('/', (req, res) => {
    mapRepository.addInitialMap()
        .then((data) => { 
            console.log(data);
            return res.status(200).send(data)})
        .catch((err) => res.status(500).send(err));
});

module.exports = router;