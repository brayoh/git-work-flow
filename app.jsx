var React = require('react');
var ReactDOM = require('react-dom');
//var $ = require('jQuery');
var results = [];
var Card = React.createClass({
  getInitialState: function(){
    return {};
  },
  componentDidMount: function(){
    var url = "https://mighty-shore-6745.herokuapp.com/api/getEvents?filter=";
    $.get( url+ this.props.filter, function(data){
          this.setState(data);
    }.bind(this));
  },
  componentWillUnmount: function(){
    console.log("unmounted");
  },
  render: function(){
   
   var Event = (this.state[0] !== undefined) ?  this.state[0] : "";
        return (
          <div>
            <h3>Event Name { Event['e_name'] }</h3>
            <img src={Event.e_picture} width="300" />
          </div>
        );
  }
});

var HelloWorld = React.createClass({
    getInitialState: function(){
      return {logins: ['brayoh','jackson']};
    },
  	render: function () {
      var cards = this.state.logins.map(function(login){
          return (<Card key={login} login={login} />);
      });
    	return (
    		<div className="repos">
    			<h2>All Events</h2>
            	<Card filter="valid" />
    		</div>
    	);
  	}
});

ReactDOM.render(<HelloWorld />, document.querySelector('#request'));
