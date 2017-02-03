var CommentsView = Backbone.View.extend({
  template: App.templates.comments,
  tagName: 'div',
  attributes: {
    id: 'comments_wrapper',
  },
  events: {
    //Events on Comment Model
    'click .edit_controls input[type="submit"]': 'updateComment',

    //Events on Comment Collection
    'click form input[type="submit"]': 'createComment',
    'click a#delete_comment_link': 'destroyComment',

    //View Events
    'click a#edit_comment_link': 'toggleUpdateComment',
    'click #close_edit_comment_link': 'toggleUpdateComment',
    'input #new_comment': 'enableSubmitButton',
  },

  //Events on Comment Model
  updateComment: function (e) {
    e.preventDefault();
    var $e = $(e.target);
    var newComment = $e.parent().prev('textarea').val();
    var id = $e.closest('li').attr('data-comment-id');
    var model = this.collection.get(id);

    model.trigger('update_comment', newComment);
    this.collection.card.trigger('change');
    this.toggleUpdateComment(e);
  },

  //Events on Comment Collection
  createComment: function (e) {
    e.preventDefault();
    var $textarea = $(e.target).prev('textarea');
    var comment = $textarea.val();
    $textarea.val('');
    this.collection.trigger('create_comment', comment);
    this.collection.card.trigger('change');
  },

  destroyComment: function (e) {
    e.preventDefault();
    var id = $(e.target).closest('li').attr('data-comment-id');
    this.collection.trigger('destroy_comment', id);
    this.collection.card.trigger('change');
  },

  //View Events
  toggleUpdateComment: function (e) {
    e.preventDefault();
    var $currentComment = $(e.target).closest('li');
    $currentComment.find('#edit_comment').toggle();
    $currentComment.find('p.comment_details').toggle();
    $currentComment.find('div.comment').toggle();
    $currentComment.find('textarea').val('');
  },

  enableSubmitButton: function (e) {
    var input = $(e.target).val().trim();
    var $submit = $(e.target).next('input');

    if (input) {
      $submit.prop('disabled', false);
    } else {
      $submit.prop('disabled', true);
    }
  },

  render: function () {
    this.$el.html(this.template(this.collection.toJSON()));
    App.$el.find('#comments_wrap').html(this.$el);
    this.delegateEvents();
  },

  initialize: function () {
    this.render();
    this.listenTo(this.collection, 'change add remove', this.render);
  },
});
