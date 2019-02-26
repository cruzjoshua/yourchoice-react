import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Dropdown, Grid, Icon, Image, Input, Label, List, Menu , Header } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
 /*       <Menu borderless className="topmenu">
          <Container>
            <Image src='http://jointherepublik.com/wp-content/themes/republik/library/images/rk_logo_sm.jpg'/>
            <Menu.Item right fitted>UPCOMING EVENTS</Menu.Item>
            <Menu.Item fitted>PRIVATE EVENTS</Menu.Item>
            <Menu.Item fitted>FAQ</Menu.Item>
            <Menu.Item fitted>CONTACT</Menu.Item>
            <Menu.Item fitted>THE SAFEHOUSE</Menu.Item>
            <Menu.Item fitted><Icon name="search"/></Menu.Item>
            <Menu.Item fitted><Icon name="user"/></Menu.Item>
          </Container>
        </Menu>*/ <Header as="h1">TopMenu</Header>
    )
  }
}

class MiddlePicture extends React.Component {
  render() {
    return (
//        <Image src='http://jointherepublik.com/wp-content/themes/republik/library/images/rk_logo_sm.jpg' size='fluid'/>
        <Header as="h1">MiddlePicture</Header>
    )
  }
}

class MiddleContainer extends React.Component {
  render() {
    return (
        /*<Menu borderless className="middlemenu">
          <Grid centered container>
            <Dropdown item text="MEN">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="WOMEN">
              <Dropdown.Menu>
                <Dropdown.Item>TANK TOPS</Dropdown.Item>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="KIDS">
              <Dropdown.Menu>
                <Dropdown.Item>SHIRTS</Dropdown.Item>
                <Dropdown.Item>ONESIES</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="BRANDS">
              <Dropdown.Menu>
                <Dropdown.Item>ALOHA SURF PROJECT</Dropdown.Item>
                <Dropdown.Item>FARMERS MARKET HAWAII</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown item text="SALE" icon="none">
            </Dropdown>
          </Grid>
        </Menu>*/ <Header as="h1">MiddleContainer</Header>
    )
  }
}

class MiddlePictureRow extends React.Component {
  render() {
    return (
        //<Image src='https://i.imgur.com/WbWJiXZ.jpg' size='fluid'/>
        <Header as="h1">MiddlePictureRow</Header>
    )
  }
}

class FooterMenu1 extends React.Component {
  render() {
    return (
 /*       <div className="footer-background">
          <Container>
            <Grid columns={3}>
              <Grid.Column>
                <br/>
                NAVIGATION
                <hr/>
                <List>
                  <List.Item>About us</List.Item>
                  <List.Item>Videos</List.Item>
                  <List.Item>Store Locations</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <br/>
                MAIN MENU
                <hr/>
                <List>
                  <List.Item>Men</List.Item>
                  <List.Item>Women</List.Item>
                  <List.Item>Kids</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <br/>
                CONNECT
                <hr/>
                <List>
                  <List.Item>Sign up for the latest updates</List.Item>
                  <Input placeholder='Enter Email Address'/>
                  <Label color='black'>Join</Label>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>*/<Header as="h1">FooterMenu1</Header>
    )
  }
}

class FooterMenu2 extends React.Component {
  render() {
    return (
//        <Image src='https://i.imgur.com/WbWJiXZ.jpg' size='fluid'/>
        <Header as="h1">FooterMenu2</Header>
    )
  }
}

class YourChoice extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <MiddlePicture/>
          <MiddleContainer/>
          <MiddlePictureRow/>
          <FooterMenu1/>
          <FooterMenu2/>
        </div>
    );
  }
}

ReactDOM.render(<YourChoice/>, document.getElementById('root'));
