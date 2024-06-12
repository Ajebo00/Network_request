const express = require('express');
const router = express.Router()
const Subscriber = require('../models/subscriber');

// Getting all
router.get('/', async (req, res) => {
    try {
        const subscribers = await Subscriber.find()
        res.json(subscribers)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
})
// Getting one
router.get('/', (req, res) => {
    res.json()
})
// Creating one
router.post('/', async (req, res) => {
    const subscriber = new Subscriber({
        name: req.body.subscriber,
        subscribedToChannel: req.body.subscriberToChannel
    })
    try {
        const newSubscriber = await subscriber.save()
        res.status(201).json(newSubscriber)
    } catch (error) {
        res.status(400).json({ message: error.message})
    }
})

// Updating one
router.patch('/', (req, res) => {

})

// Deleting one
router.delete('/', getSubscriber, async (req, res) => {
    try {
        await res.subscriber.deleteOne()
        res.json({ message: 'Deleted subscriber' })
    } catch (error) {
        res.status(500).json({ message: error.message})
    }

})

async function getSubscriber(req, res, next){
    let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id)
        if (subscriber == null) {
            return res.status(404).json({ Message: 'Cannot find subscriber'})
        }
    } catch (error) {
        return res.status(500).json({ message: error.message})
    }

    res.subscriber = subscriber
    next()
}

module.exports = router