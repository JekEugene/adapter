import {Pool} from 'pg'

const pg = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'adapter',
    password: 'root',
    port: 5432,
})

export default pg