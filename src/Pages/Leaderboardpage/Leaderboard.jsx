import React from "react";
import './Leaderboard.css';

function Leaderboard(){
    return(
        <div className="leaderboard-container">
            <div className="heading-container">
                <div className="text">
                    <div className="head">Total Taps</div>
                    <div className="taps-count">
                    1,205,751
                </div>
                </div>
                
            </div>
            <div className="leaderboard-bottomsection">
                <div className="heading">
                    Leaderboard
                </div>
                <div className="leaderboard-table">
                <div className="leaderboard-table-row">
                <div className="leaderboard-table-row-left"></div>
                <div className="leaderboard-table-row-middle">Wallet Address</div>
                <div className="leaderboard-table-row-right">Taps</div>
                </div>
                <div className="leaderboard-table-row-list">
                <table>
        <tbody>
            <tr>
                <td>1</td>
            </tr>
            <tr>
                <td>2</td>
            </tr>
            <tr>
                <td>3</td>
            </tr>
            <tr>
                <td>4</td>
            </tr>
            <tr>
                <td>5</td>
            </tr>
            <tr>
                <td>6</td>
            </tr>
            <tr>
                <td>7</td>
            </tr>
            <tr>
                <td>8</td>
            </tr>
            <tr>
                <td>9</td>
            </tr>
            <tr>
                <td>10</td>
            </tr>
        </tbody>
    </table>
                </div>
                <div className="leaderboard-table-footer">
                    <article>
                        Page {" "} 1 {" "}
                        <span>of 11</span>
                    </article>
                    <div className="leaderboard-table-footer-right">
                        <button className="page-btn">Previous</button>
                        <button className="page-btn">Next</button>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard