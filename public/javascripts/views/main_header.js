var HeaderView = Backbone.View.extend({
  el: App.$el.get(0),
  template: App.templates.main_header,
  events: {
    'focus #search': 'openSearchBar',
    'click #search span.cancel': 'closeSearchBar',
    'input #search': 'openSearchResults',
    'click a': 'preventNavigate',
    'click a.logo': 'navigateHome',
  },
  preventNavigate: function (e) {
    e.preventDefault();
  },

  navigateHome: function (e) {
    router.navigate('/');
  },

  navigateOnEscape: function (e) {
    var escapeCode = e.which === 27;
    var $resultsPopUp = $('#search_results');
    if (escapeCode && $resultsPopUp.is(':visible')) {
      this.closeSearchBar();
    }
  },

  openSearchBar: function (e) {
    this.$el.find('#search').addClass('selected');
  },

  closeSearchBar: function (e) {
    var $search = this.$el.find('#search');
    var $resultsPopUp = $search.next();
    $search.removeClass('selected');
    $search.find('input').val('').blur();
    if ($resultsPopUp.is(':visible')) $resultsPopUp.hide();
    this.trigger('close_search');
  },

  openSearchResults: function (e) {
    var input = $(e.target).val().trim();
    var $resultsPopUp = $(e.target).closest('div').next();
    var searchResults;

    if (input) {
      searchResults = App.currentBoard.get('lists').search(input);
      $resultsPopUp.show();
      if (searchResults.length > 0) {
        $resultsPopUp.find('div.no_results').hide();
        $resultsPopUp.find('div.results').show();
        this.searchView = new SearchView({ collection: searchResults });
        this.listenToOnce(this.searchView, 'close_search_bar', this.closeSearchBar);
      } else {
        $resultsPopUp.find('div.no_results').show();
        $resultsPopUp.find('div.results').hide();
      }
    }
  },

  render: function () {
    this.$el.html(this.template(this.model.toJSON()));
  },

  onDrop: function (el, target, source, sibling) {
    var id = $(el).closest('.outer_list_wrapper').attr('data-list-id');
    var position = $(el).index();
    App.trigger('update_list_position', id, position);
  },

  initialize: function () {
    this.render();

    var drake = dragula([document.getElementById('board')], {
      invalid: function (el, target, source, sibling) {
        return el.id === 'create_list' || el.classList.contains('card') || el.classList.contains('list_actions');
      },

      accepts: function (el, target, source, sibling) {
        return sibling !== null;
      },
    });

    drake.on('drop', this.onDrop);

    $(document).on('keyup', this.navigateOnEscape.bind(this));
  },
});
