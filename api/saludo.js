let {StatusCodes:SC}=require("http-status-codes")
require('module-alias/register')

let mock =require("@mock")
let axiosPlaceholder= require("@mock/remote")
let Sentry= require("@logs")


module.exports= async function handler(req,res) {
   
//let{apellido,name}= req.body;

if (req.method=="GET"){
    try{ 
        let url= "/users"
        let {data}= await axiosPlaceholder.get(url)
        res.status(SC.OK).json({data, mock})
        Sentry.captureMessage("serverless ok")
        
    }catch(err){
        Sentry.captureException(err)
        res.status(SC.NOT_FOUND).json({err})
        
    }
}
else{
    Sentry.captureMessage("msg de serverless METHOD NOT ALLOWED");
    res.status(SC.METHOD_NOT_ALLOWED).json({data: req.method})
}



}
