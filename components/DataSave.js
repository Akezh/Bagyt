import React from "react";
import { View, Text, AsyncStorage, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_BY_SUBJECT = gql`
  {
    allMajors {
      id
      name
      index
      description
      subject
    }

    allUniversities {
      id
      name
      address
      city
      description
      email
      phone
      webSite
      majorPoints {
        id
        kazPoint
        kazSelPoint
        rusPoint
        rusSelPoint
        majorName
        major {
          id
          subject
        }
      }
    }
    allMajorPoints {
      id
      kazPoint
      kazSelPoint
      major {
        id
        subject
      }
      majorIndex
      rusPoint
      rusSelPoint
      university {
        id
      }
    }
  }
`;

export default class DataSave extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Query query={GET_BY_SUBJECT}>
          {({ loading, data, error }) =>
            error ? (
              <Text>Плохой Интернет</Text>
            ) : loading ? (
              <ActivityIndicator />
            ) : (
              <ModeProvider
                data={data}
                setTimer={() => this.props.setTimer()}
              />
            )
          }
        </Query>

        <Check />
      </React.Fragment>
    );
  }
}
