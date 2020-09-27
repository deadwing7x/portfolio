import React from "react";
import "./App.css";
import Home from "./components/home/home";
import { Spinner, SpinnerSize } from "office-ui-fabric-react/lib/Spinner";
import { IStackProps, Stack } from "office-ui-fabric-react/lib/Stack";
import { BrowserRouter, Route } from "react-router-dom";
import SideNav from "./components/sidenav/sidenav";
import Header from "./components/header";
import Experience from "./components/work-exp/experience";
import Switch from "react-bootstrap/esm/Switch";
import Education from "./components/education/education";
import Skills from "./components/skills/skills";
import { initializeIcons } from "@uifabric/icons";
initializeIcons();

export default class App extends React.Component<{}, { loading: boolean }> {
  rowProps: IStackProps = { horizontal: true, verticalAlign: "center" };

  tokens = {
    spinnerStack: {
      childrenGap: 20,
    },
  };

  constructor(props: any) {
    super(props);
    this.state = { loading: true };
  }

  loadApp() {
    return (
      <div className="container-fluid">
        <Header></Header>
        <div>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-3">
              <SideNav></SideNav>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-9">
              <BrowserRouter>
                <Switch>
                  <div id="home">
                    <Route path="/" exact component={Home} />
                    <Route path="/work-exp" component={Experience} />
                    <Route path="/education" component={Education} />
                    <Route path="/skills" component={Skills} />
                  </div>
                </Switch>
              </BrowserRouter>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 500);

    if (this.state.loading === true) {
      return (
        <div className="spinnerDiv">
          <Stack {...this.rowProps} tokens={this.tokens.spinnerStack}>
            <Spinner
              id="spinner"
              label="I am definitely loading..."
              size={SpinnerSize.large}
            />
          </Stack>
        </div>
      );
    } else {
      return this.loadApp();
    }
  }
}
