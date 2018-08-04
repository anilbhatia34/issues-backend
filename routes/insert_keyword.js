let express = require('express');
let router = express.Router();
let searched_keywords = require('./../model/searched_keywords');

router.post('/',(req,res)=>{
	searched_keywords.insertMany({data:req.body.keyword},(error,data)=>{
			if(error){
				res.json({status:false,message:"Error occured",data:null})
			}
			else if(data==undefined){
				res.json({status:false,message:"No data found",data :null })
			}
			else{				
				console.log("Here in post ",data);
				res.json({status:true,message:"Keyword Inserted",data:data})
			}
		})
}) 

export default router;