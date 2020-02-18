import React from 'react'
import LoanElement from './LoanElement'

function LoanList ({currentLoans, handleLoanClick}){
    const loans = currentLoans.map((loan) =>{
        return(
        <LoanElement
            key= {loan.id}
            title={loan.title}
            tranche={loan.tranche}
            available={loan.available}
            annualisedReturn={loan.annualised_return}
            termRemaining={loan.term_remaining}
            ltv={loan.ltv}
            amount={loan.amount}
            id= {loan.id}
            handleLoanClick={handleLoanClick}
            invested={loan.invested}
        />
        )
         
    } )
    return(
        <div>
            {loans}
        </div>
        
    )

}

export default LoanList