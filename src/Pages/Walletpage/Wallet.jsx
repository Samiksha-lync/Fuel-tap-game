import React from "react";
import './Wallet.css';

function Wallet() {
    return (
        <div className="wallet-container">
                <div className="headings">
                    <div className="heading-1">
                        Your Fuel Wallet
                    </div>
                    <div className="heading-2">
                        How to deposit and play the game.
                    </div>
                </div>
                <div className="wallet">
                <div className="walletstepscontainer">
                <div className="walletstep-1">
                    <div className="step-1">
                        <div className="step-text">01</div>
                    </div>
                    <div className="step1-text">
                        <div className="title">
                            Auto generate your wallet
                        </div>
                        <div className="info">
                            <div className="info-1">Fuel automatically generates your Fuel</div>
                            <div className="info-2"> Wallet. If you want to change the wallet,</div> <div className="info-3">click "New Wallet"</div>
                        </div>
                    </div>
                </div>
                <div className="walletstep-2">
                    <div className="step-2">
                        <div className="step-text">02</div>
                    </div>
                    <div className="step2-text">
                        <div className="title">
                            Backup your Fuel Wallet
                        </div>
                        <div className="info">
                            <div className="info-1">Copy your secret key and keep it safe, this</div> <div className="info-2">allows you to restore your wallet.</div>
                        </div>
                    </div>
                </div>
                <div className="walletstep-3">
                    <div className="step-3">
                        <div className="step-text">03</div>
                    </div>
                    <div className="step3-text">
                        <div className="title">
                            Deposit your ETH and start
                        </div>
                        <div className="info">
                           <div className="info-1"> Send ETH to your Fuel Wallet to pay the </div> <div className="info-2"> network fee and start tapping.</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="line-1"></div>
            <div className="walletgeneration">
                <div className="heading">
                    <div className="heading-1">
                        Your Fuel Wallet
                    </div>
                    <div className="heading-2">
                        <div className="sub-1">This is the Etherium address of your Fuel wallet. Send $ETH to this address to fund </div> 
                        <div className="sub-2"> your Fuel wallet and start your game.</div>
                    </div>
                </div>
                <div className="box">
                    <div className="upper-section">
                        <div className="item-1">
                            Home
                        </div>
                        <div className="item-2">
                            Account (0x257...1e148)
                        </div>
                        <div className="item-3">
                        
                            <button><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" class="addFaucetIcon" height="1.2rem" width="1.2rem" xmlns="http://www.w3.org/2000/svg"><path d="M12.0049 2C17.5277 2 22.0049 6.47715 22.0049 12C22.0049 17.5228 17.5277 22 12.0049 22C9.57847 22 7.3539 21.1358 5.62216 19.6985L5.37815 19.4892L6.27949 17.5875C7.73229 19.0759 9.76067 20 12.0049 20C16.4232 20 20.0049 16.4183 20.0049 12C20.0049 7.58172 16.4232 4 12.0049 4C7.66997 4 4.14034 7.44784 4.00869 11.7508L4.00488 12H6.50488L3.79854 17.7161C2.66796 16.096 2.00488 14.1254 2.00488 12C2.00488 6.47715 6.48204 2 12.0049 2ZM13.0049 6V8H15.5049V10H10.0049C9.72874 10 9.50488 10.2239 9.50488 10.5C9.50488 10.7455 9.68176 10.9496 9.91501 10.9919L10.0049 11H14.0049C15.3856 11 16.5049 12.1193 16.5049 13.5C16.5049 14.8807 15.3856 16 14.0049 16H13.0049V18H11.0049V16H8.50488V14H14.0049C14.281 14 14.5049 13.7761 14.5049 13.5C14.5049 13.2545 14.328 13.0504 14.0948 13.0081L14.0049 13H10.0049C8.62417 13 7.50488 11.8807 7.50488 10.5C7.50488 9.11929 8.62417 8 10.0049 8H11.0049V6H13.0049Z"></path></svg> Get Funds</button>
                        </div>
                    </div>
                    <div className="line">

                    </div>
                    <div className="lower-section">
                        <div className="stats">
                        <div className="item1">
                            <div className="text">
                                ETH Balance
                            </div>
                            <div className="stats">
                                0 
                            </div>
                        </div>
                        <div className="item2">
                            <div className="text">
                                $Fuel Balance
                            </div>
                            <div className="stats">
                                0
                            </div>
                        </div>
                        <div className="item3">
                            <div className="text">
                                Total Taps
                            </div>
                            <div className="stats">
                                0
                            </div>
                        </div>
                        <div className="item4">
                            <div className="text">
                                Pending Rewards
                            </div>
                            <div className="stats">
                                0
                            </div>
                        </div>
                        </div>
                        <div className="buttons">
                            <div className="send-button">
                                Send
                            </div>
                            <div className="claimreward-button">
                                Claim Rewards
                            </div>
                        </div>
                    </div>
                </div>
                <div className="key-section">
                    <div className="key-text">
                        Your Secret Key:
                    </div>
                    <div className="generated-key">
                    0xe4b0cb9d...5695da76
                    </div>
                    <div className="warning">
                        Don't share your secret key with anyone
                    </div>
                    <div className="wallet-buttons">
                        <div className="new-wallet-button">New Wallet</div>
                        <div className="import-wallet">Import</div>
                    </div>
                </div>
                <div className="import-section">
                    <div className="import-heading">Import Wallet</div>
                    <div className="import-text">
                        Paste your secret key and click the import button.
                    </div>
                    <div className="input-field">
                    <input type="text" id="user-input" className="input-field" />
                    </div>
                    <div className="import-button">
                        Import
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Wallet;
