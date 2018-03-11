const koa = require('koa')
const path = require('path')
const PORT = process.env.PORT || 5000
const Router = require("koa-router")
const router = new Router()
const app = new koa()
router.get('/',ctx=>{
  ctx.body = 'hello world!'
})

router.get('/:id',ctx=>{
  
  ctx.body = checkTime(ctx.params.id)
})
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
function checkTime(time){
  var date = new Date(isNaN(time)?time:Number(time))
  if(isNaN(date.valueOf())){
    return {
      unix: null,
    natural: null
    }
  }
  return {
    unix: date.getTime(),
    natural: `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }
}
app.use(router.routes())
app.listen(8080)