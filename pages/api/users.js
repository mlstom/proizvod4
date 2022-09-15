import database from "../../database"

export default async function allUsers(req, res) {
    const db = await database()
    const [emails] = await db.execute("SELECT * FROM Mail")
    if(req.method === 'POST'){
       await db.execute(`insert into Mail(email) values ('${req.body.mail}')`)
    }
    res.json(emails)
}