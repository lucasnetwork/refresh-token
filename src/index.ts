import express,{Express} from 'express'
import routes from './routes'

class App{

    app:Express

    constructor(){
        this.app = express()
        this.route()
    }

    route(){
        this.app.use(routes)
    }
}

export default App