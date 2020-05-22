import { Router, Request, Response } from "express";

const router = Router();

router.get("/", (req: Request, res: Response) => {
    res.send(`
        <div>
            <h1>Hi There!</h1>
        </div>
    `);
});

router
    .route("/login")
    .get((req: Request, res: Response) => {
        res.send(`
            <form method="POST"
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `);
    })
    .post((req: Request, res: Response) => {
        const { email, password } = req.body;
        res.send(`${email}  ${password}`);
    });

export { router };
