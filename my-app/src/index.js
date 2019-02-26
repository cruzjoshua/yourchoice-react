import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Grid, Header, Icon, Image, Input, List, Menu , Label } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    return (
        <Menu fluid borderless className="topmenu">
          <Image src='http://jointherepublik.com/wp-content/themes/republik/library/images/rk_logo_sm.jpg'/>
          <Container>
            <Menu.Item position="right">UPCOMING EVENTS</Menu.Item>
            <Menu.Item>PRIVATE EVENTS</Menu.Item>
            <Menu.Item>FAQ</Menu.Item>
            <Menu.Item>CONTACT</Menu.Item>
            <Menu.Item>THE SAFEHOUSE</Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class MiddlePicture extends React.Component {
  render() {
    return (
        <Image src='http://jointherepublik.com/wp-content/uploads/2013/07/front-11.jpg' size='fluid'/>
    )
  }
}

class MiddleContainer extends React.Component {
  render() {
    return (
        <Container>
          <br/>
          <Header as="h3">FEATURED EVENTS</Header><Header as="h5">all events</Header>
          <br/>
          <br/>
          <br/>
        </Container>
    )
  }
}

class MiddlePictureRow extends React.Component {
  render() {
    return (
        <Container>
          <br/>
          <br/>
          <Grid columns={4}>
            <Grid.Column>
              <Image src='http://jointherepublik.com/wp-content/uploads/2018/12/Ninja_Sex_Party_2019-1-615x615.jpg'
                     size='medium'/>
              <List>
                <List.Item>
                  NINJA SEX PARTY: A GREAT LEI
                </List.Item>
                <List.Item>
                  February 20
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Image
                  src='http://jointherepublik.com/wp-content/uploads/2020/01/Atmosphere_Oahu_ig_1600x1600-615x615.jpg'
                  size='medium'/>
              <List>
                <List.Item>
                  ATMOSPHERE
                </List.Item>
                <List.Item>
                  April 6
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Image
                  src='http://jointherepublik.com/wp-content/uploads/2019/02/Screenshot-2019-02-11-20.02.24-615x615.png'
                  size='medium'/>
              <List>
                <List.Item>
                  DESENDENTS
                </List.Item>
                <List.Item>
                  April 19
                </List.Item>
              </List>
            </Grid.Column>
            <Grid.Column>
              <Image
                  src='http://jointherepublik.com/wp-content/uploads/2019/01/SHALLOUTour-Poster-Square-1-1-615x615.jpg'
                  size='medium'/>
              <List>
                <List.Item>
                  SLOW MAGIC & SHALLOU: INTO THE WILD TOUR
                </List.Item>
                <List.Item>
                  May 4
                </List.Item>
              </List>
            </Grid.Column>
          </Grid>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
          <br/>
        </Container>
    )
  }
}

class FooterMenu1 extends React.Component {
  render() {
    return (
        <div className="footer">
          <Container>
            <Grid columns={3}>
              <Grid.Column>
                <br/>
                HOURS & LOCATION
                <hr/>
                <List>
                  <List.Item>1349 Kapiolani Blvd #30</List.Item>
                  <List.Item>Honolulu, HI 96814</List.Item>
                  <List.Item>Tuesday - Saturday 6 - 2am</List.Item>
                  <List.Item>The Republik Box Office</List.Item>
                  <List.Item>Tues-Fri 10a-6p with a $2 service fee per ticket.</List.Item>
                  <List.Item>(808) 941-7469</List.Item>
                </List>
              </Grid.Column>
              <Grid.Column>
                <br/>
                CONNECT WITH US
                <hr/>
                <br/>
                <Icon name="circular mail" size='large'/>
                <Icon name="circular facebook f" size='large'/>
                <Icon name="circular instagram" size='large'/>
                <Icon name="circular twitter" size='large'/>
              </Grid.Column>
              <Grid.Column>
                <br/>
                GET OUR UPDATES
                <hr/>
                <List>
                  <List.Item>Sign up for the latest updates</List.Item>
                  <Input size='small' placeholder='Enter email address'/>
                  <Label size='large' color='black'>SUBSCRIBE</Label>
                </List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
    )
  }
}

class FooterMenu2 extends React.Component {
  render() {
    return (
        <div className="footer2">
          <Container>
            <Grid>
              <Grid.Column>
                <hr/>
                <List>© 2019 The Republik.</List>
              </Grid.Column>
            </Grid>
          </Container>
        </div>
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
