import React, { Component } from 'react';
import './App.css';
import web3 from './web3';
import ballot from './singleissueballot';
import logo from './logo.png';

// ###########################################################################
// THIS CODE IS SLIGHTLY TESTED
// Current status:
// - can vote, correctly processes
// - has different popups depending on what address you put in (and if valid or not)
// - linked to the new Heroku API since I had to remake my account
// - had to deploy a new contract with actual invitees for full testing, now it pulls everything just fine
//
// Updates:
// - need to add option to reset the vote (for testing and showcasing to Alec/Chris), then redeploy
//    * once you redeploy make sure to change the abi and contract locations!
// - should not do the whole conditional coding thing as currently handling it, need components!
// - need to comment out and then add a linter
// ############################################################################

class App extends Component {
  state = {
    chairperson: '',
    isChairperson: false,
    voters: [],
    isVoter: false,
    isAddressSubmitted: false,
    isVoteSuccessful: false,
    voteBalance: '',
    proposalName: '',
    userAddress: '',
    userVote: '',
    waitMessage: '',
    accounts: [],
  };

  async componentDidMount() {
    const chairperson = await ballot.methods.chairperson().call();
    const accounts = await web3.eth.getAccounts();
    const voters = await ballot.methods.getVotersArray().call();
    const proposalStruct = await ballot.methods.proposal().call();
    const proposalName = proposalStruct.name;
    const voteBalance = proposalStruct.voteBalance;
    console.log(voters[0]);
    this.setState({ chairperson, voters, proposalName, voteBalance, accounts });
  }


  onAddressSubmit = (event) => {
    event.preventDefault(); // prevents the instant refresh of the page
    if (this.state.userAddress === this.state.chairperson) {
      this.setState({isChairperson: true, isVoter: false, isAddressSubmitted: true});
    } else if (this.addressInVoterArray()) {
      this.setState({isVoter: true, isChairperson: false, isAddressSubmitted: true});
    } else {
      this.setState({isAddressSubmitted: true});
    }
  }

  onVoteSubmit = async (event) => {
    event.preventDefault();

    this.setState({ waitMessage: "Processing..." });

    try {
      await ballot.methods.vote(Number(this.state.userVote)).send({
        from: this.state.userAddress
      });
    } catch (err) {
      console.log(err);
    }

    this.setState({ waitMessage: "You've successfully voted!", isVoteSuccessful: true });
  }

  addressInVoterArray = () => {
    for (let i = 0; i < this.state.voters.length; i++) {
      if (this.state.userAddress === this.state.voters[i]) {
        return true;
      }
    }
  }

  checkIfChairperson = () => {
    if (this.state.isChairperson) {
      return (
        <div>
          <hr />
          <p>This contract is managed by {this.state.chairperson}</p>
          <p>There are {this.state.voters.length} voters</p>
          <p>The current tally for {this.state.proposalName} is {this.state.voteBalance}</p>
        </div>
      );
    } else {
        if (this.state.isAddressSubmitted && !this.state.isVoter) {
          return (
            <div>
              <hr />
              <p>You are not a valid voter, please enter a valid address</p>
            </div>
          );
        } else {
            return (
              <div></div>
            );
          }
    }
  }

  checkIfVoter = () => {
    if (this.state.isVoter) {
      return (
        <div>
          <hr />
          <form onSubmit={this.onVoteSubmit}>
            <h4>Would you like to place your vote?</h4>
            <div>
              <input
                value={this.state.userVote}
                onChange={ event => this.setState({ userVote: event.target.value })}
              />
              <button>Submit</button>
            </div>
          </form>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }

  getTestAddresses = () => {
    // we're going to that we have one chairperson and two voters at addresses
    // 0-1 in voters

    return (
      <div>
        <hr />
        <p>Chairperson: {this.state.accounts[0]}</p>
        <p>Voter one: {this.state.voters[0]}</p>
        <p>Voter two: {this.state.voters[1]}</p>
      </div>
    );
  }
  render() {
    return (
      <div className="App">
        <div>
          <h1>Single Issue Ballot</h1>

          <form onSubmit={this.onAddressSubmit}>
            <h4>Enter your address</h4>
            <div>
              <input
                value={ this.state.userAddress }
                onChange={ event => this.setState({ userAddress: event.target.value }) }
              />
              <button>Submit</button>
            </div>
          </form>

          <h3>{this.state.waitMessage}</h3>

          {this.checkIfChairperson()}
          {this.checkIfVoter()}
          {this.getTestAddresses()}
          {this.state.isVoteSuccessful ? <p>Current Tally: {this.state.voteBalance}</p> : <p></p>}
          <p>If you need access to the test MetaMask Wallet, text TOB for info</p>
        </div>

        <div>
          <img src={logo} alt={"logo"} />
        </div>
      </div>
    );
  }
}

export default App;
