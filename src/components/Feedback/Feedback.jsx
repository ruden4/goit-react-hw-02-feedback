import React from "react";
import css from './Feedback.module.css'

export class Feedback extends React.Component {
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleFeedback = e => {
        const feedValue = e.currentTarget.innerText.toLowerCase();
        this.setState((prevState)=>{
            return {
                feedValue: prevState.good + 1,
    }});
        console.log(feedValue);
    };

    render() {
        return (
            <div className={css.container}>
                <h2 className={css.feedTitle}>Please leave Feedback</h2>
                <ul className={css.feedBtnList}>
                    <li className={css.btnListItem}><button className={css.feedBtn} onClick={this.handleFeedback}>Good</button></li>
                    <li className={css.btnListItem}><button className={css.feedBtn} onClick={this.handleFeedback}>Neutral</button></li>
                    <li className={css.btnListItem}><button className={css.feedBtn} onClick={this.handleFeedback}>Bad</button></li>
                </ul>
                <h2 className={css.feedTitle}>Statistics</h2>
                <ul className={css.feedStatsList}>
                    <li className={css.statName}>Good<span className={css.statValue}>{this.state.good}</span></li>
                    <li className={css.statName}>Neutral<span className={css.statValue}>{this.state.neutral}</span></li>
                    <li className={css.statName}>Bad<span className={css.statValue}>{this.state.bad}</span></li>
                </ul>
            </div>
        )
    }
}
