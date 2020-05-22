import { Router, Request, Response } from "express";

interface RequestWithBody extends Request {
    body: { [key: string]: string | undefined };
}

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
    .post((req: RequestWithBody, res: Response) => {
        const { email, password } = req.body;

        if (
            email &&
            password &&
            email === "hi@hi.com" &&
            password === "password"
        ) {
            req.session = { loggedIn: true };
            res.redirect("/");
        } else {
            res.send("Invalid email or password");
        }
    });

export { router };
