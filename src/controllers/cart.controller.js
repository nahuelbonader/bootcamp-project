const cartService = require('../services/cart.service');
const { generateUuid } = require('../utils/uuid.utils');

//1 CREAR CARRO (POST)
//2 ELIMINAR CARRO (DELETE)
//3 COMPRAR CARRO CON PRODUCTOS (PUT)
//4 GET CARRO CON PRODUCTOS (GET)
//5 AGREGAR PRODUCTO A UN CARRO DE USUARIO (POST)
//6 ELIMINAR PRODUCOTO DE UN CARRO DE USUARIO (DELETE)



class cartController {
    //CREAR CARRO
    static async create(req, res) {
        const callId = generateUuid();

        console.log('Call %s %s id: %s', req.method, req.url, callId);
        console.log('body: ', req.body);

        const { email, userName, firstName, lastName } = req.body;
        const { id } = req.params;

        if (
            (email && typeof email !== 'string') ||
            (userName && typeof userName !== 'string') ||
            (firstName && typeof firstName !== 'string') ||
            (lastName && typeof lastName !== 'string')
        ) {
            console.log(
                'Call id: %s error:%s',
                callId,
                'Required parameter is missing or wrong type'
            );
            return res.status(400).send();
        }

        try {
            console.log('Call id: %s response: success', callId);
            await cartService.update(id, email, userName, firstName, lastName);

            return res.status(200).send();
        } catch (error) {
            console.log('Call id: %s error:%s', callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }

    static async delete(req, res) {
        const callId = generateUuid();

        console.log('Call %s %s id: %s', req.method, req.url, callId);

        const { id } = req.params;

        try {
            console.log('Call id: %s response: success', callId);
            await cartService.delete(id);

            return res.status(200).send();
        } catch (error) {
            console.log('Call id: %s error:%s', callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }


    static async update(req, res) {
        const callId = generateUuid();

        console.log('Call %s %s id: %s', req.method, req.url, callId);
        console.log('body: ', req.body);

        const { email, userName, firstName, lastName } = req.body;
        const { id } = req.params;

        if (
            (email && typeof email !== 'string') ||
            (userName && typeof userName !== 'string') ||
            (firstName && typeof firstName !== 'string') ||
            (lastName && typeof lastName !== 'string')
        ) {
            console.log(
                'Call id: %s error:%s',
                callId,
                'Required parameter is missing or wrong type'
            );
            return res.status(400).send();
        }

        try {
            console.log('Call id: %s response: success', callId);
            await cartService.update(id, email, userName, firstName, lastName);

            return res.status(200).send();
        } catch (error) {
            console.log('Call id: %s error:%s', callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }

    static async getCartProducts(req, res) {
        const callId = generateUuid();

        console.log('Call %s %s id: %s', req.method, req.url, callId);

        const { id } = req.params;

        try {
            const result = await cartService.get(id);
            return res.status(200).send(result);
        } catch (error) {
            console.log('Call id: %s error:%s', callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }

    static async addProduct(req, res) {
        const callId = generateUuid();

        console.log('Call %s %s id: %s', req.method, req.url, callId);

        const { id } = req.params;

        try {
            const result = await cartService.get(id);
            return res.status(200).send(result);
        } catch (error) {
            console.log('Call id: %s error:%s', callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }

    static async removeProduct(req, res) {
        const callId = generateUuid();

        console.log('Call %s %s id: %s', req.method, req.url, callId);

        const { id } = req.params;

        try {
            const result = await cartService.get(id);
            return res.status(200).send(result);
        } catch (error) {
            console.log('Call id: %s error:%s', callId, JSON.stringify(error));
            const status = error.status;

            if (status === undefined) return res.status(500).send();

            return res.status(status).send(error);
        }
    }
}

module.exports = cartController;
