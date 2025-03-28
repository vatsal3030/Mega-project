const asyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.resolve().catch(requestHandler(req, res, next)).catch(
            next(err)
        )
    }
}

export { asyncHandler }

// -------------USING TRY CATCH --------------

// this is mix of two parts
// 1st  : (fn)=>{ ()=> {} }
// const asyncHandler=(fn)=>async(req,res,next)=>{
//     try {
//         await fn(req,res,next)
//     } catch (error) {
//         res.status(error.code || 500).json({
//             success:true,
//             message:error.message
//         })
//     }
// }




