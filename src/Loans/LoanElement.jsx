import React from 'react'
import './loanElement.css'

function LoanElement({title, tranche, available, annualisedReturn, termRemaining, ltv, amount, id, handleLoanClick, invested}){
    const clickHandler=()=>{ handleLoanClick(id) }

    return(
        <div className='Loan-element-wrapper'>
            <h2 className='Element-title'>{title}</h2>
            <div className='Element-main-wrapper'>
                <p>
                    <strong>Tranche:</strong> {tranche} <br />
                    <strong>Available:</strong> {available} <br />  
                    <strong>Annual Return:</strong> {annualisedReturn} <br />
                </p>
                <p>
                    <strong>Term Remaining:</strong> {termRemaining} <br />
                    <strong>LTV:</strong> {ltv} <br />  
                    <strong>Amount:</strong> {amount} <br /> 
                </p>
                <div className='Element-button-wrapper'>
                    <p className={invested?'Element-invested Display':'Element-invested'}>Invested</p>
                    <button className='Element-button' onClick={clickHandler}>INVEST</button>
                </div>
            </div>
        </div>
    )
}

export default LoanElement