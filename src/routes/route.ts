import liverouter from './live.routes'
import {Express, Router } from "express";
import uploadrouter from './upload.routes';
 
const router=Router()

router.use('/live',liverouter)
router.use('/uploadroute',uploadrouter) 

//api/insta/v1/uploadroute/uploads
//api/insta/v1/uploadroute/:i


export default router