
const createCtrl = (app, tagService) => {
    
    
    const factory = {};


    factory.getTagByName = async (req, res, next) => {
        try {
          const tag = await tagService.getTag(req.params.name);
          res.status(200).json(tag);
        } catch (err) {
          res.status(500).json({ error: err });
        }
    };

    factory.getTagsByList = async (req, res, next) => {
        try {
          const tags = await tagService.getTags(req.body.tags);
          const filterOutNull = tags.filter((tag) => tag.data.length > 0);

          res.status(200).json(filterOutNull);
        } catch (err) {
          res.status(500).json({ error: err });
        }
    };

    factory.getAccessToken = async (req, res, next) => {
      try {
        const token = await tagService.oauth();
        res.status(200).json(token);
      } catch (err) {
        res.status(500).json({ error: err });
      }
    };

    return factory;
};

module.exports = createCtrl;