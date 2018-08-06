import React from "react";
import { View, Text, ActivityIndicator } from "react-native";
import { Query } from "react-apollo";
import gql from "graphql-tag";

const GET_BY_SUBJECT = gql`
  {
    allMajors {
      id
      name
      index
      description
      object
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
      photo
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
    allTests {
      id
      name
      photo
      stars
      questionNum
    }
  }
`;
export const ModeContext = React.createContext("light");

export default class Mode extends React.Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <Query query={GET_BY_SUBJECT}>
        {({ loading, data, error }) =>
          loading ? (
            <ActivityIndicator />
          ) : (
            <ModeProvider data={data} setTimer={() => this.props.setTimer()} />
          )
        }
      </Query>
    );
  }
}

class ModeProvider extends React.Component {
  saveGlobal = data => {
    global.data = {
      ...data,
      allUniversities: data.allUniversities.map(university => ({
        ...university,
        isFav: false
      }))
    };
    console.log("saved");

    this.props.setTimer();
  };

  render() {
    this.saveGlobal(this.props.data);

    return <Text />;
  }
}
