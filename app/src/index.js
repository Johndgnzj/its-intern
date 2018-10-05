import React from 'react';
import ReactDOM from 'react-dom';
import {Navbar, Nav, NavItem, Grid, Row, Col} from 'react-bootstrap'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import App from './components/app';
import TaoyuanPKLots from './components/taoyuan_parkinglots';
import Link2 from './components/link2';


class Layout extends React.Component{
	constructor(){
		super();
	}
	
	render(){
		const sidebar={
			left:'0',
			top:'0',
			bottom:'0',
			position:'fixed',
			backgroundColor:'#c8c8c8'
		}
		return (
			<Router>
				<Grid fluid={true}>
					<Row>
						<Col xs={2} style={sidebar}>
							<Nav stacked={true} style={{fontSize:20,fontFamily:'微軟正黑體'}}>
								<h3><a href='/'>Home</a></h3>
								<NavItem><Link to='/Taoyuan_parkingLots'>桃園市停車場</Link></NavItem>
								<NavItem><Link to='/link2'>Link2</Link></NavItem>
							</Nav>
						</Col>
						<Col xs={10} xsOffset={2}>
							<Route exact path='/' component={App}/>
							<Route path='/Taoyuan_parkingLots' component={TaoyuanPKLots}/>
							<Route path='/link2' component={Link2}/>
						</Col>
					</Row>
				</Grid>
			</Router>
		)
	}
}

ReactDOM.render(<Layout/>, document.getElementById('root'));