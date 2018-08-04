let express = require('express');
let router = express.Router();
let searched_keywords = require('./../model/searched_keywords');

router.get('/',(req,res)=>{
	searched_keywords.find((error,data)=>{
			if(error){
				res.json({status:false,message:"Error occured",data:null})
			}
			else if(data==undefined){
				res.json({status:false,message:"No data found",data :null })
			}
			else{
				console.log("Here in get ",data);
				res.json({status:true,message:"Keyword found",data:data})
			}
		})
})
export default router;