const express= require('express');
const router= express();
const studentModel= require('../model/studentRecord')
const studentData= require('../InitialData')

router.get('/api/student', async (req, res)=>{
    try{

        // const data= await studentModel.create(studentData);
        const data= await studentModel.find();
        
        return res.status(200).json({
            status: "success",
            message: data
        })

    }catch(e){
        return res.status(400).json({
            status: "failed",
            message: e
        })
    }
})

router.get('/api/student/:id', async (req, res)=>{
    try{

        // const data= await studentModel.create(studentData);
        const data= await studentModel.find({_id: req.params.id});
        // console.log(data) empty array
        if(data.length===0){
            return res.status(404).json({
                status: "failed",
                message: "No data"
            })
        }

        return res.status(200).json({
            status: "success",
            message: data
        })

    }catch(e){
        return res.status(400).json({
            status: "failed",
            message: e.message
        })
    }
})

router.post('/api/student', async (req, res)=>{
    try{

        // const data= await studentModel.create(studentData);
        const data= await studentModel.create({
            name: req.body.name,
            currentClass: req.body.currentClass,
            division: req.body.division
        });
        
        return res.status(200).json({
            status: "success",
            result: data
        })

    }catch(e){
        return res.status(400).json({
            status: "failed",
            message: e
        })
    }
})

router.put('/api/student/:id', async (req, res)=>{
    try{

        // const data= await studentModel.create(studentData);
        const data= await studentModel.findOneAndUpdate({_id: req.params.id}, req.body);
        if(!data){
            return res.status(404).json({
                status: "failed",
                message: "No data"
            })
        }
        return res.status(200).json({
            status: "success",
            result: data
        })

    }catch(e){
        return res.status(400).json({
            status: "failed",
            message: e
        })
    }
})

router.delete('/api/student/:id', async (req, res)=>{
    try{
        // console.log(req.params.id)
        // const data= await studentModel.create(studentData);
        const data= await studentModel.findOneAndDelete({_id: req.params.id});
        if(!data){
            return res.status(404).json({
                status: "failed",
                message: "No data"
            })
        }
        return res.status(200).json({
            status: "success",
            result: data
        })

    }catch(e){
        return res.status(400).json({
            status: "failed",
            message: e
        })
    }
})

module.exports= router;