import React from 'react'

function Degree()
{
    return(
        <div className='smallCompo'>
        <h5>Degree/Bachelors</h5>
        <section className='educateDiv'>


       <label>
           Group <br/>
           <select>
               <option disabled selected>Select</option>
               <option value="Bsc">Bsc</option>
               <option value="BTech">BTech</option>
               
           </select>
       </label>

       <label>
           Discipline <br/>
          <input type="text"/> 
       </label>


       <label>
           State<br/>
           <select>
               <option disabled selected>Select</option>
               <option value="Telangana">Telangana</option>
               <option value="AndhraPradesh">AndhraPradesh</option>
               <option value="Assam">Assam</option>
               <option value="TamilNadu">TamilNadu</option>
           </select>
       </label>

       <label>
            Board <br/>
           <input type="text"/>
       </label>

       <label>
           Date of Passing <br/>
           <input type="date"/>
       </label>

       <label>
           Roll No <br/>
           <input type="text"/>
       </label>

       

       </section>
   </div>
    )
}

export default Degree
