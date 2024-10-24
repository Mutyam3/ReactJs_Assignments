import React from 'react'

function PostalAddress(props)
{

    console.log(props.st.errors)
     
      function handleAddress(e)
      {
         if(e.target.checked === true)
         {
            props.st.setFieldValue('PersonalDetails.sameAsPresent', true)
            props.st.setFieldValue('PersonalDetails.permanentAddressDetails.permanentState', props.st.values.PersonalDetails.presentAddressDetails.presentState )
            props.st.setFieldValue('PersonalDetails.permanentAddressDetails.permanentDistrict', props.st.values.PersonalDetails.presentAddressDetails.presentDistrict)
            props.st.setFieldValue('PersonalDetails.permanentAddressDetails.permanentAddress', props.st.values.PersonalDetails.presentAddressDetails.presentAddress)
            props.st.setFieldValue('PersonalDetails.permanentAddressDetails.permanentVillage', props.st.values.PersonalDetails.presentAddressDetails.presentVillage)
            props.st.setFieldValue('PersonalDetails.permanentAddressDetails.permanentPincode', props.st.values.PersonalDetails.presentAddressDetails.presentPincode)
         }
      }

    return (
        <section className='smallCompo'>

        <h5>Postal Address Details</h5>

      <div className='addressDiv'>
         <div >

            <table border="2">
               <thead >
                   <th>Present Address</th>
               </thead>
               <tbody>
                    <tr className='smallCompo_Tab'>
                        <td className='smallCompo_Tab'>
                            <label>
                                State/UT  <br/> 
                                <input type="text"  {...props.st.getFieldProps('PersonalDetails.presentAddressDetails.presentState')}
                                className  = {props.st.touched.PersonalDetails?.presentAddressDetails?.presentState && props.st.errors.PersonalDetails?.presentAddressDetails?.presentState && 'ErrorField'}/>
                                
                            </label>

                            <div className='ErrorClass'>
                               <b>{props.st.touched.PersonalDetails?.presentAddressDetails?.presentState && props.st.errors.PersonalDetails?.presentAddressDetails?.presentState && props.st.errors.PersonalDetails.presentAddressDetails.presentState }</b>
                             </div>
                        </td>

                        <td className='smallCompo_Tab'>
                            <label>
                                District  <br/>
                                <input type="text" {...props.st.getFieldProps('PersonalDetails.presentAddressDetails.presentDistrict')}
                                className={props.st.touched.PersonalDetails?.presentAddressDetails?.presentDistrict && props.st.errors.PersonalDetails?.presentAddressDetails?.presentDistrict && 'ErrorField'}/>

                            </label>

                            <div className='ErrorClass'>
                                 <b>{props.st.touched.PersonalDetails?.presentAddressDetails?.presentDistrict && props.st.errors.PersonalDetails?.presentAddressDetails?.presentDistrict && props.st.errors.PersonalDetails.presentAddressDetails.presentDistrict }</b>
                            </div>
                        </td>
                    </tr>
                    <tr className='smallCompo_Tab'>
                        <td colSpan="2" className='smallCompo_Tab'>
                            <label>
                                 Address  <br/>
                               <textarea rows="4" cols = "58" {...props.st.getFieldProps('PersonalDetails.presentAddressDetails.presentAddress')} 
                               className={props.st.touched.PersonalDetails?.presentAddressDetails?.presentAddress && props.st.errors.PersonalDetails?.presentAddressDetails?.presentAddress && 'ErrorField'}>
                                     
                               </textarea>
                            </label>

                            <div className='ErrorClass'>
                                  <b>{props.st.touched.PersonalDetails?.presentAddressDetails?.presentAddress && props.st.errors.PersonalDetails?.presentAddressDetails?.presentAddress && props.st.errors.PersonalDetails.presentAddressDetails.presentAddress }</b>
                             </div>
                        </td>
                        </tr>

                      <tr className='smallCompo_Tab'>
                        <td className='smallCompo_Tab'>
                            <label>
                                Village  <br/>
                                <input type = "text" {...props.st.getFieldProps('PersonalDetails.presentAddressDetails.presentVillage')}
                                className={props.st.touched.PersonalDetails?.presentAddressDetails?.presentVillage && props.st.errors.PersonalDetails?.presentAddressDetails?.presentVillage && 'ErrorField'}/>
                                  
                            </label>

                            <div className='ErrorClass'>
                            <b>{props.st.touched.PersonalDetails?.presentAddressDetails?.presentVillage && props.st.errors.PersonalDetails?.presentAddressDetails?.presentVillage && props.st.errors.PersonalDetails.presentAddressDetails.presentVillage }</b>
                             </div>

                        </td>
                        <td className='smallCompo_Tab'>
                            <label>
                                PinCode  <br/>
                                <input type="text" {...props.st.getFieldProps('PersonalDetails.presentAddressDetails.presentPincode')}
                                className={props.st.touched.PersonalDetails?.presentAddressDetails?.presentPincode && props.st.errors.PersonalDetails?.presentAddressDetails?.presentPincode && 'ErrorField'}/>
                            </label>

                            <div className='ErrorClass'>
                            <b>{props.st.touched.PersonalDetails?.presentAddressDetails?.presentPincode && props.st.errors.PersonalDetails?.presentAddressDetails?.presentPincode && props.st.errors.PersonalDetails.presentAddressDetails.presentPincode }</b>
                             </div>
                        </td>
                    </tr>
               </tbody>
            </table>

         </div>

         <div>

         <table border="2">
               <thead >
                   <th>Permanent Address</th>
               </thead>
               <tbody>
                    <tr className='smallCompo_Tab'>
                        <td className='smallCompo_Tab'>
                            <label>
                                State/UT  <br/> 

                                <input type="text" {...props.st.getFieldProps('PersonalDetails.permanentAddressDetails.permanentState')} 
                                value={props.st.values.PersonalDetails.sameAsPresent ? props.st.values.PersonalDetails.presentAddressDetails.presentState : 
                                props.st.values.PersonalDetails.permanentAddressDetails.permanentState} />
                                
                            </label>
                        </td>

                        <td className='smallCompo_Tab'>
                            <label>
                                District  <br/>

                                <input type="text" {...props.st.getFieldProps('PersonalDetails.permanentAddressDetails.permanentDistrict')}
                                 value={props.st.values.PersonalDetails.sameAsPresent ? props.st.values.PersonalDetails.presentAddressDetails.presentDistrict : 
                                    props.st.values.PersonalDetails.permanentAddressDetails.permanentDistrict} />
                            </label>
                        </td>
                    </tr>
                    <tr className='smallCompo_Tab'>
                        <td colSpan="2" className='smallCompo_Tab'>
                            <label>
                                 Address  <br/>
                               <textarea rows="4" cols = "58" {...props.st.getFieldProps('PersonalDetails.permanentAddressDetails.permanentAddress')}
                               value={props.st.values.PersonalDetails.sameAsPresent ? props.st.values.PersonalDetails.presentAddressDetails.presentAddress : 
                                props.st.values.PersonalDetails.permanentAddressDetails.permanentAddress}>
                                     
                               </textarea>
                            </label>
                        </td>
                        </tr>

                      <tr className='smallCompo_Tab'>
                        <td className='smallCompo_Tab'>
                            <label>
                                Village  <br/>
                                <input type = "text" {...props.st.getFieldProps('PersonalDetails.permanentAddressDetails.permanentVillage')}
                               value={props.st.values.PersonalDetails.sameAsPresent ? props.st.values.PersonalDetails.presentAddressDetails.presentVillage : 
                                props.st.values.PersonalDetails.permanentAddressDetails.permanentVillage}/>
                            </label>
                        </td>
                        <td className='smallCompo_Tab'>
                            <label>
                                PinCode  <br/>
                                <input type="text" {...props.st.getFieldProps('PersonalDetails.permanentAddressDetails.permanentPincode')}
                                value={props.st.values.PersonalDetails.sameAsPresent ? props.st.values.PersonalDetails.presentAddressDetails.presentPincode : 
                                    props.st.values.PersonalDetails.permanentAddressDetails.permanentPincode}/>
                            </label>
                        </td>
                    </tr>
               </tbody>
            </table>

         </div>
    </div>

        <div className='tickBox'>
              <input type="checkbox" onChange = {handleAddress}  name = "PersonalDetails.sameAsPresent"/> Tick if Permanent Address is same as Present Address
        </div>
        
      </section>

    
    
    )
}

export default PostalAddress