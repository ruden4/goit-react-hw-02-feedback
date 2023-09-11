import React from "react";

import css from './Feedback.module.css'

export class Feedback extends React.Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };

    handleGoodFeedback = (e) => {
        this.setState((prevState)=>{
            return {
                good: prevState.good + 1,
    }})};
    handleNeutralFeedback = (e) => {
        this.setState((prevState)=>{
            return {
                neutral: prevState.neutral + 1,
    }})};
    handleBadFeedback = (e) => {
        this.setState((prevState)=>{
            return {
                bad: prevState.bad + 1,
    }})};
    countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
    };
    countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    if (totalFeedback === 0) {
        return 0;
    }
    return Math.trunc((this.state.good / totalFeedback) * 100);
    };

    render() {
        return (
            <div className={css.container}>
                <h2 className={css.feedTitle}>Please leave Feedback</h2>
                <ul className={css.feedBtnList}>
                    <li className={css.btnListItem}><button className={css.feedBtn} onClick={this.handleGoodFeedback}>Good</button></li>
                    <li className={css.btnListItem}><button className={css.feedBtn} onClick={this.handleNeutralFeedback}>Neutral</button></li>
                    <li className={css.btnListItem}><button className={css.feedBtn} onClick={this.handleBadFeedback}>Bad</button></li>
                </ul>
                <h2 className={css.feedTitle}>Statistics</h2>
                <ul className={css.feedStatsList}>
                    <li className={css.statName}>Good<span className={css.statValue}>{this.state.good}</span></li>
                    <li className={css.statName}>Neutral<span className={css.statValue}>{this.state.neutral}</span></li>
                    <li className={css.statName}>Bad<span className={css.statValue}>{this.state.bad}</span></li>
                    <li className={css.statName}>Total<span className={css.statValueOther}>{this.countTotalFeedback()}</span></li>
                </ul>
                <h2 className={css.feedTitle}>Positive Feedback<span className={css.statValue}>{this.countPositiveFeedbackPercentage()}%</span></h2>
            </div>
        )
    }
}
