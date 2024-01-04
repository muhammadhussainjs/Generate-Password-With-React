import React, { useEffect, useState } from 'react'

export const App = () => {
  let [password , setPassword] = useState('Hussain')
  let [length , setLength] = useState('')
  let [number , setNumber] = useState(false)
  let [symbol , setSymbol] = useState(false)
  let [lower , setLower] = useState(false)
  let [upper , setUpper] = useState(false)

  
function Change(){
   if (!number && !symbol && !lower && !upper) {
    setUpper('enabled');
    
    return;
  }
  let password = ''
  let str = ''
  if(number){
    str += "0123456789"
  }
  if(upper){
    
    str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  if(lower){
  
    str += "abcdefghijklmnopqrstuvwxyz"
  }
  if(symbol){
    str += "#@!/<>$%^*()_+-"
  }
  for (let index = 0; index < length; index++) {
    let randomnumber = Math.floor(Math.random() * str.length)
    let char =str.charAt(randomnumber)
    password += char
    setPassword(password);
    
    
  }


}
useEffect(()=>{
  Change()
} , [length])



  return (
    <>
    <h1 className='text-2xl text-center font-[3rem] mt-4'>Password Changing</h1>
   <h2 >{password}</h2>

    <div>
      
      <label htmlFor="length">{length}</label> 
      <input type="range" id='length' min={6} max={24} onChange={(e)=>setLength(e.target.value)} /><br/>
    <div className='flex gap-2'>
      <label htmlFor="number">Number</label>
    <input type="checkbox" id='number'  checked={number} onChange={(e)=>setNumber(e.target.checked)} />
    <br/>
    </div>
    <div className='flex gap-2'>
      <label htmlFor="symbol">Symbol</label>
    <input type="checkbox" id='symbol'  checked={symbol} onChange={(e)=>setSymbol(e.target.checked)}  />
    <br/>
    </div>
    <div className='flex gap-2'>
      <label htmlFor="upper">Uppercase</label>
    <input type="checkbox" id='upper'  checked={upper} onChange={(e)=>setUpper(e.target.checked)}  />
    <br/>
    </div>
    <div className='flex gap-2'>
      <label htmlFor="lower">Lowercase </label>
    <input type="checkbox" id='symbol'  checked={lower}  onChange={(e)=>setLower(e.target.checked)}  />
    </div>

   
    </div>
</>




  )
}

export default App