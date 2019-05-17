class BaseController {
   constructor(options) {
      if (!options || !options.Model) throw new Error('Must Pass Options');
      this.Model = options.Model;

      this.create = this.create.bind(this);
      this.getAll = this.getAll.bind(this);
      this.getById = this.getById.bind(this);
      this.remove = this.remove.bind(this);
      this.update = this.update.bind(this);
   }

   async create(req, res) {
      let body = req.body;
      let model = await this.Model.create(body);
      return res.status(200).json({
         model: model
      });
   }

   async getAll(req, res) {
      let models = await this.Model.find({});
      return res.status(200).send(models);
   }

   async getById(req, res, next) {
      if (!req.params || !req.params.id) {
         let error = new Error('Id Required');
         error.httpStatusCode = 400;
         return next(err);
      }
      let modelId = req.params.id;
      let model = await this.Model.findById(modelId);
      return res.status(200).send(model);
   }

   async remove(req, res, next) {
      if (!req.params || !req.params.id) {
         let error = new Error('Id Required');
         error.httpStatusCode = 400;
         return next(err);
      }
      let filter = { _id: req.params.id };
      await this.Model.findOneAndDelete(filter);
      res.status(204).end();
   }

   async update(req, res, next) {
      if (!req.params || !req.params.id) {
         let error = new Error('Id Required');
         error.httpStatusCode = 400;
         return next(err);
      }
      let body = req.body;
      let filter = { _id: req.params.id };
      let update = { $set: body };
      let options = { new: true };
      let model = await this.Model.findOneAndUpdate(filter, update, options);
      res.send(model);
   }
}

module.exports = BaseController;
