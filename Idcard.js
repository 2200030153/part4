import Arshi from './images/Arshi.jpeg'
import React from 'react'

export default function Idcard()
{
    return(
        <div>
        
<form >
<table align="center">
<tr>
<td align="center" style={{color:"red"}}><h1>KONERU LAKSMAIAH EDUCATION FOUNDATION</h1></td>
</tr>
<tr>
<td align="center" style={{color:"green"}}><h2>IDENTITY CARD</h2></td>
</tr>
<tr>
<td  align="center"><img src={Arshi} style={{width:"200px", height:"200px"}} alt=""/ ></td>
</tr>
<tr>
<td align="center" style={{color:"orange"}}><h3>STUDENT ID	:2200030153</h3></td>
</tr>
<tr>
<td align="center" style={{color:"blue"}}><h4>Thota.Arshitha</h4></td>
</tr>
<tr>
<td align="center" style={{color:"blue"}}><h5>Branch:CSE-H</h5></td>
</tr>
</table>
</form>
            
        </div>
    )
}