var Box = React.createClass({

  render() {
  	var imageurl = Gravtastic(this.props.email)
    var panelStyle = {
      borderRadius: "30px",
      backgroundColor: 'rgba(0,0,0,.2)',
      border: "none",
      color: ""
    }
    var positionBox = {
      height: '120px',
      width: '370px'

    }
    return (
    <div className="react-box pull-right" style={positionBox}>
   		<div className="panel panel-default" style={panelStyle}>
	  		<div className="panel-body">
          <div className="container-fluid">
  	  			<ProfileImage image={imageurl}/>
            <Nametag name={this.props.email}/>
          </div>
	 		  </div>
		  </div>
    </div>)
  }
});
 