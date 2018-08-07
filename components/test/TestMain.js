import React, { Component } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Picker, Button } from 'react-native';
import Question from './Question';
import TestAnswer from './TestAnswer';

export default class Questions extends React.Component {
	state = {
		questions: this.props.data.questionses,
		questionNum: this.props.questionNum - 1,
		current: 0,
		Progress_Value: 0,
		score: 0,
		type: this.props.data.type,
		completed: false,
		ansArr: [],
	};

	submitAnswer = answer => {
		const question = this.state.questions[this.state.current];
		let score = this.state.score;
		if (this.state.type === 'letter') {
			let a = 0,
				h = 0;
			objects = [...this.state.ansArr, answer];
			objects.forEach(item => {
				h = 0;
				objects.forEach(item2 => {
					item2 === item && h++;
				});
				if (a <= h) {
					(score = item), (a = h);
				}
			});
		} else {
			score += answer;
		}
		this.setState({
			current: this.state.current + 1,
			score: score,
			completed: this.state.current === this.state.questionNum ? true : false,
			ansArr: [...this.state.ansArr, answer],
			Progress_Value: this.state.Progress_Value + 1 / this.state.questionNum,
		});
	};

	render() {
		return (
			<View style={styles.container}>
				{!!this.state.questions.length > 0 &&
					this.state.completed === false && (
						<Question
							onSelect={answer => {
								this.submitAnswer(answer);
							}}
							question={this.state.questions[this.state.current]}
							current={this.state.current}
							progress={this.state.Progress_Value}
						/>
					)}
				{this.state.completed && (
					<TestAnswer
						answer={this.props.data.testResult}
						score={this.state.score}
						navigateToList={() => this.props.navigateToList()}
					/>
				)}}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		height: '100%',
	},

	loadingQuestions: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
	},
});
