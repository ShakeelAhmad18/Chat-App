const mongoose =require('mongoose')

const conservationSchema=mongoose.Schema(
    {
        participants:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'User'
            }
        ],
        messages:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:'Message'
            }
        ]
    },
    {
        timestamps:true
    }
)

const Conservation=mongoose.model('Conservation',conservationSchema)
module.exports=Conservation;