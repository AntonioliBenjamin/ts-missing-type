import { Router, Request, Response } from 'express';
export const router = Router();


// convert into enum.
enum Role {
    ACTOR = 'actor',
    SPECTATOR = 'spectator'
}

type User = {
    id : string;
    firstname: string;
    lastname: string;
    age: number;
    birthDate: Date;
    favoritesFood: string[];
    role: Role.ACTOR;
    friends: Object[];

}
// build a type for user.
const user: User = {
    id: 'rryrryyryryrr',
    firstname: "hello",
    lastname: "world",
    age: 30,
    birthDate: new Date('1992-11-15'),
    favoritesFood: ['tomato', 'spinach', 'burger', 'pizza'],
    role: Role.ACTOR,
    friends: [
        {
            name: 'benjamin'
        },
        {
            name: 'cedric'
        },
        {
            name: 'chalom'
        },
        {
            name: 'mazen'
        },
    ]
}

// type req and res.
router.get('/', (req: Request, res: Response) => {
    return res.status(200).send(user);
})


export { router as UserRouterĀ };