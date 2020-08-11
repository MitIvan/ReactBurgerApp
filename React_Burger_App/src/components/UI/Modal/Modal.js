import React, {Component} from 'react'

import classes from './Modal.css'
import Aux from '../../../hoc/Auxiliary/Auxiliary'
import Backdrop from '../Backdrop/Backdrop'

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.show !== this.props.show || nextProps.children !== this.props.children){
            return true;
        } else {
            return false
        }
    }

    componentDidUpdate() {
        console.log('[Modal] did update');
    }

    render () {
        return (
            <Aux>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div 
                    className ={classes.Modal}
                    style={{
                        transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: this.props.show ? '1': '0'
                    }}>
                    {this.props.children}
                </div>
            </Aux>
        );
    }
} 

export default Modal

//{this.props.children} tuka ide ordersumary

//(nextProps.show !== this.props.show || nextProps.children !== this.props.children) proveruvame dali props i children se smeneti za da se prikaze i spinerot