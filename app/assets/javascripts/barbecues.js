// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

(function main () {
isJoining = false


  $('[data-hook~=delete-bbq]').on('click', function(event) {
  
    var bbqID = event.target.id
    console.log( bbqID)
    var request = $.ajax({
          url: '/users/removeBBQ/' + bbqID ,
          type: 'DELETE',
           success: function(){ $('li[data-hook~=' + bbqID + ']').remove()}
      })


  })

  $('[data-hook~=submit-item]').on('click',function (event){
    var bbqID = $('[data-hook~=submit-item]').prop('id')
    var itemAdded = $('[data-hook~=item-input]').prop('value')
    var jPackage = {
                id: bbqID,
                itemName: itemAdded
             }
    console.log(jPackage)
    
    var request = $.post('/api/barbecues/' + bbqID + '/addItem', jPackage);

    request.done(function(){
      $('[data-hook~=items-list]').append('<li>'+$('[data-hook~=item-input]').prop('value')+'</li>');
      $('[data-hook~=item-input]').prop('value', '')
    })

  })

  $('[data-hook~=join-bbq]').on('click', function (event) {
    if (isJoining) {
      return
    }

    isJoining = true
    var $button = $(event.target)
    var bbqId = $button.closest('[data-bbq]').data('bbq')

    var request = $.post('/api/barbecues/' + bbqId + '/join')

    request.fail(function () {
      alert('Couldn’t join the barbecue. Try again later.')
      isJoining = false
    })

    request.done(function () {
      $button.fadeOut()
      isJoining = false
    })
  })

  if ($('[data-hook~=controller-barbecues][data-hook~=action-show]').length) {
    var $bbqContainer = $('[data-hook=bbq-info]')
    var bbqId = $bbqContainer.data('bbq')
    var request = $.get('/api/barbecues/' + bbqId)

    request.fail(function () {
      var htmlParts = [
        '<div class="alert alert-danger" role="alert">',
        '  There was a problem retrieving the BBQ info. Try again later.',
        '</div>'
      ]
      $bbqContainer.append(htmlParts.join('\n'))
    })

    request.done(function (bbq) {
      var bbqMoment = moment(bbq.date)
      var htmlParts = [
        '<h2>' + bbq.title + '</h2>',
        '<dl>',
        '  <dt>Date:</dt>',
        '  <dd>' + bbqMoment.format('MMMM, D YYYY [at] h:mm a') + '</dd>',
        '  <dt>Venue:</dt>',
        '  <dd>' + bbq.venue + '</dd>',
        '</dl>'
      ]
      $bbqContainer.append(htmlParts.join('\n'))
    })
  }
})()
