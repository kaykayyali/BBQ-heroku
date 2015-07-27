var Nametag = React.createClass({

  render: function() {
  	var jumboStyle = {
  		margin: '0px',
  		height: '40px',
  		maxHeight: '80px',
  		minHeight: '60px'
  	}
  	  var monthNames = [
        "January", "February", "March",
        "April", "May", "June", "July",
        "August", "September", "October",
        "November", "December"
    ];
  	var date = new Date()
  	var day = date.getDate();
  	var month = date.getMonth();
  	var year = date.getFullYear();
   
    return (
    	<div className="col-sm-8 col-xs-12">
        	
        	<h4>{monthNames[month]} {day}, {year}</h4> 		
          <h4 className="">{this.props.name}</h4> 
        </div>
        )
    
  }
});
