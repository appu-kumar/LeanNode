
import {appendFileSync} from 'fs'

export const logger = (data) =>{
    appendFileSync('logger.txt',data,'utf-8');
}

