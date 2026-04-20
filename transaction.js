
const mongoose=require("mongoose");

async function transfer(){
 const session=await mongoose.startSession();
 session.startTransaction();
 try{
  console.log("Transaction success");
  await session.commitTransaction();
 }catch(e){
  await session.abortTransaction();
 }
 session.endSession();
}
