
var Comment = React.createClass({
  render: function() {
    var rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return (
      <div className="comment">
        <h4 className="commentAuthor">
          {this.props.user} 
        </h4>
        <span dangerouslySetInnerHTML={{__html: rawMarkup}} />
      </div>
    );
  }
});