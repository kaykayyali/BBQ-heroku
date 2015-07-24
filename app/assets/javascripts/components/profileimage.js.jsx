var ProfileImage = React.createClass({


  render() {
  	var signInList = {
  		margin: '0px',
  		textAlign: 'center'

  	}
    return (
      
      	<div className="col-sm-4">
        	<img src ={this.props.image} className="img img-circle"/>
        </div>
        
    );
  }
});
