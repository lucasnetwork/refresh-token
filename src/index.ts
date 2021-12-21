import express,{Express} from 'express'

class App{

    app:Express

    constructor(){
        this.app = express()
    }
}

export default App