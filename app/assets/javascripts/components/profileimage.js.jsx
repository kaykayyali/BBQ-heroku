var ProfileImage = React.createClass({


  render() {
  	var signInList = {
  		margin: '0px',
  		textAlign: 'center'

  	}
    return (
      
      	<div className="col-sm-4">
        	<a href="http://en.gravatar.com" target="_blank"><img src ={this.props.image} className="img img-circle"/></a>
        </div>
        
    );
  }
});
