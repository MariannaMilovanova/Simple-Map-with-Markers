require('../../db/dbConnect');
const Repository = require('../generalRepository');
const SimpleMap = require('../../schemas/map/mapSchema');


class MapRepository extends Repository {
    constructor() {
        super();
        this.model = SimpleMap;
    }

    getMaps() {
        return this.model.find();
    }

    addInitialMap() {
        return new this.model({}).save();
    }

    // addMarkersToMap(markers) {
    //     return this.model.findByIdAndUpdate(
    //         baseId,
    //         {'$push': {tables: tableId}},
    //         {'new': true}
    //     );
    // }
}

module.exports = new MapRepository();