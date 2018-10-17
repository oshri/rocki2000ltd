const createCtrl = (app) => {
    const factory = {};

    factory.get = (req, res, next) => {

        res.status(200).json(
            {
                links: [
                    'אודות',
                    'שירותים'
                ]
            }
        );

    };

    return factory;
};

module.exports = createCtrl;