import {string, z} from 'zod'

export const schoolDTO = z.object({
    name:z.string().min(1,`name is required `),
    address:z.string().min(1,`address is required`),
    latitude:z.number().min(-90).max(90),
    longitude:z.number().min(-180).max(180)
})

export type schooldto = z.infer<typeof schoolDTO>