var CommentForm = React.createClass({
  handleSubmit: function(e) {
    e.preventDefault();
    var author = "Deprecated"
    var text = React.findDOMNode(this.refs.text).value.trim();
    if (!text) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    
    React.findDOMNode(this.refs.text).value = '';
    return;
  },
  render: function() {
    return (
      <form className="commentForm" onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input type="text" placeholder="Say something..." ref="text" className="form-control"/>
          <input type="submit" value="Post" className='btn btn-primary btn-sm'/>
        </div>
      </form>
    );
  }
});