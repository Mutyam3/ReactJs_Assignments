import React from 'react'
import { useAddMatchMutation, useLazyGetMatchByIdQuery, useUpdateMatchMutation } from '../../../services/cricketApi'
import { addBattingPlayers, addBowlingPlayers } from './ScoringSlice'
import { useDispatch } from 'react-redux'


function Toss({matchData, id})
{
    // console.log('matchData toss:: ', matchData)
    const [addTossFn]   =   useUpdateMatchMutation()
    const dispatch = useDispatch()
    const [matchDataCallFn] = useLazyGetMatchByIdQuery()
    
 
    const [TossDetails, setTossDetails] = React.useState(
           
            {
                tossWon : '',
                tossId : null,
                tossStatus : false,
                decidedTo : '' ,
                decidedToId : null,
                decidedToStatus : false
            }
           
    )

    function handleToss(t,i)
    {
           setTossDetails({...TossDetails, tossWon: t, tossId : i, tossStatus : true})
           
    }

    function handleDecidedTo(d,i)
    {
           setTossDetails({...TossDetails, decidedTo : d, decidedToId : i, decidedToStatus : true }) 
    }

 

    function handleScoring()
    {
          var temp = {...matchData}
          temp = {...temp, tossDetails : {...TossDetails}}
          console.log(temp)
          addTossFn({id:id, match : temp}).then(()=>{
                     matchDataCallFn(id) 
          }
          )
    }


    return (
        <section className='border border-light w-75 ' >
             

              <h5 className='m-4'>Who won the Toss ?</h5>


              <div className='d-flex justify-content-evenly'>
                  
                      <div className={TossDetails.tossStatus && TossDetails.tossId == 1 ? 'clickedToss' : 'unClickedToss'} onClick = {()=>{handleToss(matchData.teamAName, 1)}} >
                          <img src= {matchData.teamALogo} width = '200px' height='150px'/>
                      </div>
                      <div className={TossDetails.tossStatus && TossDetails.tossId == 2  ? 'clickedToss' : 'unClickedToss'} onClick = {()=>{handleToss(matchData.teamBName, 2)}} >
                           <img src= {matchData.teamBLogo} width = '200px' height='150px'/>
                      </div>
                  
              </div>

              <h5 className='m-4'>Decided to ?</h5>

              <div className='d-flex p-4 justify-content-evenly'>
                       <div className='border border-light rounded-3 w-25 text-center p-3' style={TossDetails.decidedToStatus  && TossDetails.decidedToId == 3  ? {backgroundColor:'gold',color:'black'} : {}} onClick={()=>{handleDecidedTo('bat', 3)}} >Bat</div>
                       <div className='border border-light rounded-3 w-25 text-center p-3' style={TossDetails.decidedToStatus &&  TossDetails.decidedToId == 4 ? {backgroundColor:'gold',color:'black'} : {}} onClick={()=>{handleDecidedTo('bowl', 4)}} >Bowl</div>
              </div>

              <div className='text-center m-3'> 
                       <button onClick = {handleScoring} className='m-2 p-2 rounded-3 bg-primary text-light border border-0 '>Give Scoring</button>
              </div>

        </section>
    )
}


export default Toss