import React, { Component } from "react";
import {
  View,
  Text,
  ActivityIndicator,
  StyleSheet,
  Picker,
  Button
} from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";
import TestMain from "./TestMain";

const GET_QUESTIONS = gql`
  query Test($id: ID) {
    Test(id: $id) {
      questionses {
        answerSheetses {
          id
          point
          text
        }
        id
        question
      }
      type
      testResult {
        result
        resultDes
        scoreMax
        scoreMin
      }
    }
  }
`;

export default class Questions extends React.Component {
  static navigationOptions = {
    header: null
  };

  render() {
    const id = this.props.navigation.getParam("testiD");
    const questionNum = this.props.navigation.getParam("questionNum");
    return (
      <View style={styles.container}>
        <Query query={GET_QUESTIONS} variables={{ id }}>
          {({ loading, data, error }) =>
            error ? (
              console.log(error)
            ) : loading ? (
              <View style={styles.container}>
                <ActivityIndicator />
              </View>
            ) : (
              <TestMain data={data.Test} questionNum={questionNum} />
            )
          }
        </Query>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    height: "100%"
  },

  loadingQuestions: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
