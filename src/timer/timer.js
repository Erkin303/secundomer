
import './main.css';
import Vaqt from './timer2'





import React, { Component } from 'react';

export default class componentName extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-6 offset-3">
                            <p className=' text-light text-center mt-3 nm'>Timer</p>
                            <div>

                                <div className='text-center timer'>

                                    <Vaqt />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
        );
    }
}

