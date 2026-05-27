const User = require('../models/User')
const { USER_STATES } = require('../utils/constants')

const createDemoUser = async () => {
    try {
        const existing = await User.findOne({
            where: { email: 'demo@hoteldesk.com' }
        })

        if (existing) {
            console.log('El usuario demo ya existe')
            return
        }

        await User.create({
            name: 'Demo',
            lastName: 'User',
            email: 'demo@hoteldesk.com',
            password: '123456', 
            userStateId: USER_STATES.ACTIVE,
            failedAttempts: 0
        })

        console.log('Usuario demo creado')
    } catch (error) {
        console.error('Error al crear el usuario', error)
    }
}

module.exports = createDemoUser