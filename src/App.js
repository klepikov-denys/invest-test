import React from 'react';
import './App.css';
import LoanList from './Loans/LoanList'
import * as currentLoans from './current-loans.json'
import Modal from './Modal/Modal'

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      currentLoans: currentLoans.loans,
      investAvail: '238,456',
      modalIsOpen: false,
      selectedLoan: {},
    }
    this.handleLoanClick = this.handleLoanClick.bind(this)
    this.handleModalInvest = this.handleModalInvest.bind(this)
    this.restAfterInvestment = this.restAfterInvestment.bind(this)
  }

  handleLoanClick(id){
      const selectedLoan = this.state.currentLoans.find(loan =>loan.id === id)
      this.setState({
        modalIsOpen: true,
        selectedLoan,
      })
  }

  restAfterInvestment(invested, initialValue){
    let rest = String(initialValue.split(',').join('') - invested).split('')
    rest.splice(-3, 0, ',')
    return rest.join('')
  }

  handleModalInvest(invested){
    this.setState({
      modalIsOpen: false,
      investAvail: this.restAfterInvestment(invested, this.state.investAvail),
      currentLoans: this.state.currentLoans.concat().map((loan)=> {
        if(loan.id === this.state.selectedLoan.id){
          loan.invested = true
          loan.available = this.restAfterInvestment(invested, loan.available)
          return loan
        }
        return loan
      })
    })
  }

  render(){
  return (
    <div className='App'>
      <div className='App-body'>
        <Modal displayModal={this.state.modalIsOpen} handleInvest={this.handleModalInvest} selectedLoan={this.state.selectedLoan} />
        <header>
          <h1>Current Loans</h1>
        </header>
        <main>
          <LoanList currentLoans={this.state.currentLoans} handleLoanClick={this.handleLoanClick} />
        </main>
        <footer>
          <p>
            Total amount available for investments:
            <strong>£{this.state.investAvail}</strong>
          </p>
        </footer>
      </div>
    </div>
    );
  }
}

export default App;
