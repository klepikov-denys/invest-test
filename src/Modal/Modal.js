import React, {useState} from 'react'
import './modal.css'
import classNames from 'classnames'

function Modal({displayModal, handleInvest, selectedLoan:{title, available, term_remaining}}){
    const [inputState, setInputState]= useState(1000)
    const names = classNames({
        'Modal-wrapper': true,
        'Display': displayModal
    })
    const handleClick = (event)=>{
        event.preventDefault()
        handleInvest(inputState)
        setInputState(1000)
    }
    const handleChange = (event)=>{
        setInputState(+event.target.value)
    }

    return(
        <div className={names}>
            <div className='Modal-window'>
                <h2>Invest in Loan</h2>
                <p>{title}</p>
                <p className='Modal-text' >Amount available: £{available}</p>
                <p className='Modal-date' >Loan ends in: month</p>
                <form onSubmit={handleClick}>
                    <label className='Input-modal-label'>Investment amount (£)</label>
                    <div className='Modal-footer' >
                        <input className='Input-modal' type='text' name='number' 
                            onChange={handleChange} value={inputState} autoComplete='off' 
                        />
                        <button className='Modal-button'>INVEST</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal 