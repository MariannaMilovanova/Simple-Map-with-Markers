const router = require('express').Router();
const mapRepository = require('../../repositories/map/mapRepository');

router.get('/', (req, res) => {
    mapRepository.getMaps().then((maps) => {
        res.status(200).send(maps)})
    .catch((err) => res.status(500).send(err));
});

router.get('/markers', (req, res) => {
    mapRepository.getMarkers.then((maps) => {
        res.status(200).send(maps);
    }).catch((err) => {
        res.status(500).send(err);
    });
});

router.post('/:id/markers', (request, response, next) => {
    mapRepository.saveMarkers(request.params.id, request.body)
        .then((result) => response.status(200).send(result))
        .catch((error) => {
            response.status(400);
            next(error);
        });
});

module.exports = router;