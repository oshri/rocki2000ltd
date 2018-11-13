const errors = require('../utils/errors');
const winston = require('winston');

class Base {
	constructor(model) {
		this.model = model;
	}

	async getBy(query) {
		const entityes = await this.model.find(query).exec();
		winston.log(
			'info',
			`get by ${this.modle} ${JSON.stringify(entityes)}`
		);
		return entityes;
	}

	async getAll() {
		return await this.getBy({});
	}

	async create(data) {
		const exists = await this.model.findById(data.id).exec();
		if (exists) {
			throw new errors.ConflictError(`page '${data.id}' already exists`);
		}

		winston.log('info', `creating new page ${JSON.stringify(data)}`);

		const entity = new this.model(data);
		return entity.save().then(_entity => _entity);
	}

	async get(dataId) {
		const entity = await this.model.findById(dataId).exec();
		if (!entity) {
			throw new errors.NotFoundError(
				`${this.model} '${pageId}' doesn't exist`
			);
		}

		winston.log('info', `get ${this.model} by id: ${dataId}`);
		return entity;
	}


	async update(id, data) {
		const update = await this.model
			.findOneAndUpdate({ _id: id }, { $set: data })
			.exec().then(d => {
				return d;
			});
		if (!update) {
			throw new errors.NotFoundError(
				`${this.model} '${id}' dosent exist`
			);
		}

		winston.log('info', `Update ${this.model} by id: ${id}, ${data}`);
		return update;
    }
    
    async delete(id) {
        return await this.model.deleteOne({_id: id}).exec();
    }
}

module.exports = Base;
