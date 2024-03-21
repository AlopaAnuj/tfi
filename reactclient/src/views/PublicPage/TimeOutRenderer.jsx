import React from 'react';
import PropTypes from 'prop-types';


 class TimeOutRenderer extends React.Component {

    state = {isTimedOut: false}
    componentDidMount(){
        const timeoutCB = this.props.timeOutCallBack? this.props.timeOutCallBack: this.timeOutDone;
        this.props.userTimer(this.props.timeOutInMillis, timeoutCB);
    }
     timeOutDone = () => {
         this.setState({isTimedOut:true});         
         localStorage.clear();
     };
     
     componentWillUnmount() {
        
         this.props.userTimer.stopTimer();
     }
     handleClose = () => {
        
        this.setState({ isTimedOut:false })
     }
     
    render(){
           return ( 
               <div>
               {(this.state.isTimedOut) && (
                <>
                {this.props.history.push('/timeout')}
               </>
               )}
               </div>
           );
    }
} 

TimeOutRenderer.propTypes = {
    timeOutInMillis: PropTypes.number,
    userTimer:PropTypes.func.isRequired,
    timeOutCallBack:PropTypes.func,
    history:PropTypes.object.isRequired
}

TimeOutRenderer.defaultProps = {
    timeOutInMillis: 5*1000,
}


export default TimeOutRenderer;