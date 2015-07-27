var ProfileImage = React.createClass({


  render() {
  	var imgWidth = {
  		width: '100%'

  	}
    return (
      
      	<div className="col-sm-4 col-xs-12">
        	<a href="http://en.gravatar.com" target="_blank"><img src={this.props.image} className="img img-circle" style={imgWidth}/></a>
        </div>
        
    );
  }
});
