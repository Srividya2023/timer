// Write your code here
import './index.css'
import {Component} from 'react'

class DigitalTimer extends Component{
    state = {hrs: 25,
            mins: 0, 
            isStarted: false,
            resetBtn: false
    }
    
    changeStartProp = () => {
        const {hrs, mins} = this.state 
        console.log(String(hrs).length)
         
        
        if(mins === 0 ){
            
            this.setState(prevState=>({hrs:prevState.hrs-1, mins: 59, isStarted: true, resetBtn: true}))
        }
        else{
            this.setState({hrs:hrs, mins: mins , isStarted: true, resetBtn: true})
        }
        this.timeID = setInterval(this.tick, 1000)
    }
    tick = () => {
        
        const {hrs, mins} = this.state 
        if(hrs=== 0 && mins ===0){
            this.setState({hrs:hrs, mins:mins, isStarted:false, resetBtn: false})
            clearInterval(this.timeID)
        }
        else if(mins > 0){
            this.setState(prevState => ({hrs: hrs, mins: prevState.mins - 1}))
        }else{
            this.setState(prevState => ({hrs : prevState.hrs -1 , mins: 59}))
        }
        
    }
    changePauseProp = () => {
        const{hrs, mins} = this.state
        
        this.setState({isStarted: false, hrs: hrs, mins:mins, resetBtn: true})
        clearInterval(this.timeID)
        
    }
    resetBtn = ()=> {
        this.setState({hrs: 25, mins: 0, isStarted: false, resetBtn: false})
        clearInterval(this.timeID)
    }
    decreaseNo = () => {
        
        this.setState(prevState=> ({hrs: prevState.hrs-1}))
    }
    increaseNo = () => {
        this.setState(prevState => ({hrs: prevState.hrs+1 }))
    }
    render(){
        const {hrs,  mins, isStarted, resetBtn} = this.state
        
        return(
            
            <div className='bg-container'>
                <h1>
                    Digital Timer
                </h1>
                <div className='large-props'>
                    <div className='hrs-container'>
                        
                        
                        <div className='inner-hrs-container'>
                            {mins < 10 && String(hrs).length < 2 &&
                                <h1 className='hrs-props'>0{hrs}:0{mins} </h1>
                            }
                            {mins >= 10 && String(hrs).length === 2 && 
                                <h1 className='hrs-props'>{hrs}:{mins} </h1>
                            }
                            {mins < 10 && String(hrs).length === 2 && 
                                <h1 className='hrs-props'>{hrs}:0{mins} </h1>
                            }
                            {mins >= 10 && String(hrs).length < 2 && 
                                <h1 className='hrs-props'>0{hrs}:{mins} </h1>
                            }
                            {
                                !isStarted && 
                                    <p className='pause-run-props'>
                                        Paused
                                    </p>
                            }
                            {
                                isStarted && 
                                    <p className='pause-run-props'>
                                        Running
                                    </p>
                            }
                        </div>
                    </div>
                    <div>
                        <div className='btns-flex-props'>
                            {isStarted &&
                        
                            <button onClick={this.changePauseProp} type='button' className='pause-play-btn'>
                                <img src='https://assets.ccbp.in/frontend/react-js/pause-icon-img.png' alt='pause icon' className='pause-play-img' />
                                <p className='margin-right-props'>Pause </p>
                            </button>
                            

                            
                            }
                            {!isStarted &&
                            
                            <button onClick={this.changeStartProp} type='button' className='pause-play-btn'>
                                <img src='https://assets.ccbp.in/frontend/react-js/play-icon-img.png' alt='play icon' className='pause-play-img' />
                                <p className='margin-right-props'>Start </p>
                            </button>
                            
                            
                            }
                            <>
                            <button onClick={this.resetBtn} type='button' className='reset-btn'>
                                <img src='https://assets.ccbp.in/frontend/react-js/reset-icon-img.png' alt='reset icon' className='reset-img' />
                                
                            </button>
                            <p className='reset-props'> Reset</p>
                            </>
                        </div>
                        <p className='timer-limit'>
                            Set Timer limit
                        </p>
                        {
                            !resetBtn &&
                        <div className='increment-decrement-props'>
                            <button onClick={this.decreaseNo} className='plus-minus-btn'>
                                - 
                            </button>
                            
                            <p className='bg-incre-decre'>{hrs}</p>
                            
                            <button onClick={this.increaseNo} className='plus-minus-btn'>
                                +
                            </button>
                        </div>
                        }
                        {
                            resetBtn &&
                        <div className='increment-decrement-props'>
                            <button className='plus-minus-btn'>
                                -
                            </button>
                            <p className='bg-incre-decre'>{hrs}</p>
                            <button className='plus-minus-btn'>
                                +
                            </button>
                        </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}
export default DigitalTimer