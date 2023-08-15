const { z } = require('zod');

const createAstronautSchema = z.object({
    body: z.object({
        name: z.string({
            required_error: "Name is required"
        }),
        age: z.number({
            required_error: "Age is required",
        }),
        mission: z.string({
            required_error: "Mission is required"
        })
    })
})
    
module.exports = createAstronautSchema;