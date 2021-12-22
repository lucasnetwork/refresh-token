import express,{Express} from 'express'
import database from './database'
import routes from './routes'

database()

class App{

    app:Express

    constructor(){
        this.app = express()
        this.midllewares()
        this.route()
    }

    midllewares() {
        this.app.use(express.json());
      }

    route(){
        this.app.use(routes)
    }
}

export default App