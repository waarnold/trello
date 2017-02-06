this["JST"] = this["JST"] || {};

this["JST"]["board_header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='pop_over'><div><h3>Rename Board</h3><a class='cancel' href='#'></a></div><form id='rename_form' action='#' method='POST'><label for='board_name'>Name</label><input id='board_name' type='text' value='"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'><input type='submit' value='Rename'></form></div><a class='board_name' href='#'><h1>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h1></a><a class='show_menu'><span>...</span><span>Show Menu</span></a><div id='menu'><div class='menu_header'><h3>Menu</h3><a class='cancel' href='#'></a></div><div id='activities_wrapper'></div></div>";
},"useData":true});

this["JST"]["card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class='card_wrapper'><div class='card_labels'>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><span class='card_name'>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span><div class='badges'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depths[1] != null ? depths[1].formatted_date : depths[1]),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<span class='"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " label'></span>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class='subscribed_badge'><span class='badge_icon'></span></div>";
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<div class='due_date_badge "
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.complete : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.program(9, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "'><span class='badge_icon'></span><span class='badge_text'>"
    + container.escapeExpression(container.lambda((depths[1] != null ? depths[1].formatted_date : depths[1]), depth0))
    + "</span></div>";
},"7":function(container,depth0,helpers,partials,data) {
    return " complete ";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.past_due : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"10":function(container,depth0,helpers,partials,data) {
    return " past_due ";
},"12":function(container,depth0,helpers,partials,data) {
    return "<div class='description_badge'><span class='badge_icon'></span></div>";
},"14":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class='comments_badge'><span class='badge_icon'></span><span class='badge_text'>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.model : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true,"useDepths":true});

this["JST"]["comments"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li data-comment-id='"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "'><div class='avatar'><img src='https://www.gravatar.com/avatar/3242edc934b08b9e540717c01b2ef89c?s=30' alt='avatar'></div><div><span class='user_name'>William Arnold</span><div><div class='comment'><p>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p></div><div id='edit_comment'><textarea placeholder=\""
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "\"></textarea><div class='edit_controls'><input class='button' type='submit' value='Save'><a id=\"close_edit_comment_link\" class='cancel'><span></span></a></div></div></div></div><p class='comment_details'>"
    + ((stack1 = (helpers.timeDiff || (depth0 && depth0.timeDiff) || alias2).call(alias1,(depth0 != null ? depth0.timestamp : depth0),{"name":"timeDiff","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + " - <a id=\"edit_comment_link\" href='#'>Edit</a> - <a id=\"delete_comment_link\" href='#'>Delete</a></p></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id='add_comment'><div class='section_header'><span></span><h3>Add Comment</h3></div><div><div class='avatar'><img src='https://www.gravatar.com/avatar/3242edc934b08b9e540717c01b2ef89c?s=30' alt='avatar'></div><form><textarea id='new_comment' placeholder='Write a comment...'></textarea><input type='submit' value='Send' disabled></form></div></div><div id='activity'><div class='section_header'><span></span><h3>Activity</h3></div><div id='comments_list'><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></div></div>";
},"useData":true});

this["JST"]["copy_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.withListName || (depth0 != null ? depth0.withListName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"withListName","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currentListName || (depth0 != null ? depth0.currentListName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currentListName","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.listNames : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<option "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].withListName : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentListName : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>";
},"7":function(container,depth0,helpers,partials,data) {
    return "selected";
},"9":function(container,depth0,helpers,partials,data) {
    return "(current)";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.listNames : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<option "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentListName : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentListName : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.maxPos || (depth0 != null ? depth0.maxPos : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"maxPos","hash":{},"data":data}) : helper)));
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currentPos || (depth0 != null ? depth0.currentPos : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currentPos","hash":{},"data":data}) : helper)));
},"18":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<option"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,(depths[1] != null ? depths[1].maxPos : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</option>";
},"20":function(container,depth0,helpers,partials,data) {
    return " selected";
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<option"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentPos : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentPos : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class='popover_header'><h3>Copy Card</h3><a class='cancel' href='#'></a></div><div class='body'><form><label>Name<textarea name='name'>"
    + container.escapeExpression(((helper = (helper = helpers.cardName || (depth0 != null ? depth0.cardName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"cardName","hash":{},"data":data}) : helper)))
    + "</textarea></label><label>Copy to...</label><div class='button-link-container'><div class='button-link'><span class='label'>List</span><span class='value'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.withListName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</span><select name='select_new_list'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.withListName : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<select></div><div class='button-link'><span class='label'>Position</span><span class='value'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.maxPos : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.program(16, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</span><select name='select_new_position'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.maxPos : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(22, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<select></div></div><input type='submit' value='Create Card'></form></div>";
},"useData":true,"useDepths":true});

this["JST"]["copy_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='popover_header'><a class='back' href='#'></a><h3>Copy List</h3><a class='cancel' href='#'></a></div><div class='body'><form action='/boards/"
    + alias4(((helper = (helper = helpers.boardID || (depth0 != null ? depth0.boardID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"boardID","hash":{},"data":data}) : helper)))
    + "/lists/new' method='POST'><label>Name<textarea name='name'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea></label><input type='submit' value='Copy List'></form></div>";
},"useData":true});

this["JST"]["create_list"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<form action='/boards/"
    + container.escapeExpression(((helper = (helper = helpers.boardID || (depth0 != null ? depth0.boardID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"boardID","hash":{},"data":data}) : helper)))
    + "/lists/new' method='POST'><input type='text' placeholder='Add a list...'><div><input id='create_list' class='button' type='submit' value='Save'><a class='cancel' href='#'></a></div></form>";
},"useData":true});

this["JST"]["due_date"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='popover_header'><h3>Change Due Date</h3><a class='cancel' href='#'></a></div><div class='body'><form><div class='date_container'><div class='button-link'><span class='label'>Month</span><span class='value'>"
    + alias4(((helper = (helper = helpers.month || (depth0 != null ? depth0.month : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"month","hash":{},"data":data}) : helper)))
    + "</span><select name='month'><option value='01'>1</option><option value='02'>2</option><option value='03'>3</option><option value='04'>4</option><option value='05'>5</option><option value='06'>6</option><option value='07'>7</option><option value='08'>8</option><option value='09'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option></select></div><div class='button-link'><span class='label'>Day</span><span class='value'>"
    + alias4(((helper = (helper = helpers.day || (depth0 != null ? depth0.day : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"day","hash":{},"data":data}) : helper)))
    + "</span><select name='day'><option value='01'>1</option><option value='02'>2</option><option value='03'>3</option><option value='04'>4</option><option value='05'>5</option><option value='06'>6</option><option value='07'>7</option><option value='08'>8</option><option value='09'>9</option><option value='10'>10</option><option value='11'>11</option><option value='12'>12</option><option value='13'>13</option><option value='14'>14</option><option value='15'>15</option><option value='16'>16</option><option value='17'>17</option><option value='18'>18</option><option value='19'>19</option><option value='20'>20</option><option value='21'>21</option><option value='22'>22</option><option value='23'>23</option><option value='24'>24</option><option value='25'>25</option><option value='26'>26</option><option value='27'>27</option><option value='28'>28</option><option value='29'>29</option><option value='30'>30</option><option value='31'>31</option></select></div><div class='button-link'><span class='label'>Year</span><span class='value'>"
    + alias4(((helper = (helper = helpers.year || (depth0 != null ? depth0.year : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"year","hash":{},"data":data}) : helper)))
    + "</span><select name='year'><option value='2015'>2015</option><option value='2016'>2016</option><option value='2017'>2017</option><option value='2018'>2018</option><option value='2019'>2019</option><option value='2020'>2020</option><option value='2021'>2021</option><option value='2022'>2022</option><option value='2023'>2023</option><option value='2024'>2024</option><option value='2025'>2025</option></select></div></div><div class='buttons_container'><input type='submit' value='Save'><button class='negate' type='button'>Remove</button></div></form></div>";
},"useData":true});

this["JST"]["list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return " subscribed ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class='list_wrapper'><div class='list'><div class='header'><textarea class='editable_name'>"
    + container.escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</textarea><div class='subscribed_list "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "'><span></span></div><span class='list_menu'>...</span></div><ul class='sortable_cards'></ul><a class='open_composer' href='#'>Add a card...</a><div class='composer'><textarea></textarea><div class='controls'><div><input class='button' type='submit' value='Add'><a class='cancel' href='#'><span></span></a></div></div></div></div><div class='list_actions'><div class='main_actions'><div class='popover_header'><a class='cancel close_all' href='#'></a><h3>List Actions</h3></div><ul class='pop_over_list'><li><a href='#' class='list_actions_add'>Add Card...</a></li><li><a href='#' class='list_actions_copy'>Copy List...</a></li><li><a href='#' class='list_actions_move'>Move List...</a></li><li><a href='#' class='list_actions_subscribe'>Subscribe</a></li></ul><hr><ul class='pop_over_list'><li><a href='#' class='list_actions_move_cards'>Move All Cards in This List...</a></li><li><a href='#' class='list_actions_archive_cards'>Archive All Cards in This List...</a></li></ul><hr><ul class='pop_over_list'><li><a href='#' class='list_actions_archive'>Archive This List</a></li></ul></div><div class='secondary_actions'></div></div></div>";
},"useData":true});

this["JST"]["main_header"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div id='surface'><div id='header'><a class='logo' href='/'></a><div id='boards'><a href='#'><span></span><span>Boards</span></a></div><div id='search'><input type='text'><span class='search_icon'></span><span class='cancel'></span></div><div id='search_results'><div class='no_results'>We couldn't find any cards that matched your search</div><div class='results'></div></div><div id='user'><a class='add' href='#'><span></span></a><a class='member' href='#'><span class='avatar'><img src='"
    + alias4(((helper = (helper = helpers.avatar || (depth0 != null ? depth0.avatar : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"avatar","hash":{},"data":data}) : helper)))
    + "' alt=\""
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "'s avatar\"></span><span class='name'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</span></a><a class='info' href='#'><span></span></a><a class='notifications' href='#'><span></span></a></div></div><div id='content'><div id='board_wrapper'><div id='board_main'><div id='board_header'></div><div id='board_canvas'><div id='board'></div></div></div></div></div></div>";
},"useData":true});

this["JST"]["menu"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<li><div class='avatar'><img src='https://www.gravatar.com/avatar/3242edc934b08b9e540717c01b2ef89c?s=30' alt='avatar'></div><div class='comment_container'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.activity : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.program(7, data, 0),"data":data})) != null ? stack1 : "")
    + "<p class='comment_details'>"
    + ((stack1 = (helpers.timeDiff || (depth0 && depth0.timeDiff) || helpers.helperMissing).call(alias1,(depth0 != null ? depth0.timestamp : depth0),{"name":"timeDiff","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</p></div></li>";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.activity : depth0),"move",{"name":"ifCond","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,(depth0 != null ? depth0.activity : depth0),"copy",{"name":"ifCond","hash":{},"fn":container.program(5, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"3":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='comment_header'><span><span class='user_name'>William Arnold</span> moved <a href='/lists/"
    + alias4(((helper = (helper = helpers.listID || (depth0 != null ? depth0.listID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listID","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias4(((helper = (helper = helpers.cardID || (depth0 != null ? depth0.cardID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardID","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.card || (depth0 != null ? depth0.card : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card","hash":{},"data":data}) : helper)))
    + "</a> from "
    + alias4(((helper = (helper = helpers.oldList || (depth0 != null ? depth0.oldList : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"oldList","hash":{},"data":data}) : helper)))
    + " to "
    + alias4(((helper = (helper = helpers.list || (depth0 != null ? depth0.list : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"list","hash":{},"data":data}) : helper)))
    + "<span></div>";
},"5":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='comment_header'><span><span class='user_name'>William Arnold</span> copied <a href='/lists/"
    + alias4(((helper = (helper = helpers.listID || (depth0 != null ? depth0.listID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listID","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias4(((helper = (helper = helpers.cardID || (depth0 != null ? depth0.cardID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardID","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.card || (depth0 != null ? depth0.card : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card","hash":{},"data":data}) : helper)))
    + "</a> from <a href='/lists/"
    + alias4(((helper = (helper = helpers.oldListID || (depth0 != null ? depth0.oldListID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"oldListID","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias4(((helper = (helper = helpers.oldCardID || (depth0 != null ? depth0.oldCardID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"oldCardID","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.oldCard || (depth0 != null ? depth0.oldCard : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"oldCard","hash":{},"data":data}) : helper)))
    + "</a> in list "
    + alias4(((helper = (helper = helpers.list || (depth0 != null ? depth0.list : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"list","hash":{},"data":data}) : helper)))
    + "<span></div>";
},"7":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class='comment_header'><span><span class='user_name'>William Arnold</span> on <a href='/lists/"
    + alias4(((helper = (helper = helpers.listID || (depth0 != null ? depth0.listID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listID","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias4(((helper = (helper = helpers.cardID || (depth0 != null ? depth0.cardID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"cardID","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.card || (depth0 != null ? depth0.card : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"card","hash":{},"data":data}) : helper)))
    + "</a><span></div><div class='comment'><p>"
    + alias4(((helper = (helper = helpers.text || (depth0 != null ? depth0.text : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"text","hash":{},"data":data}) : helper)))
    + "</p></div>";
},"9":function(container,depth0,helpers,partials,data) {
    return "";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

this["JST"]["move_card"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.withListName || (depth0 != null ? depth0.withListName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"withListName","hash":{},"data":data}) : helper)));
},"3":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currentListName || (depth0 != null ? depth0.currentListName : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currentListName","hash":{},"data":data}) : helper)));
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.listNames : depth0),{"name":"each","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"6":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<option "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].withListName : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentListName : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>";
},"7":function(container,depth0,helpers,partials,data) {
    return "selected";
},"9":function(container,depth0,helpers,partials,data) {
    return "(current)";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.listNames : depth0),{"name":"each","hash":{},"fn":container.program(12, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"12":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<option "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentListName : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(7, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentListName : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>";
},"14":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.maxPos || (depth0 != null ? depth0.maxPos : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"maxPos","hash":{},"data":data}) : helper)));
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return container.escapeExpression(((helper = (helper = helpers.currentPos || (depth0 != null ? depth0.currentPos : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"currentPos","hash":{},"data":data}) : helper)));
},"18":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(19, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"19":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return "<option"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || helpers.helperMissing).call(depth0 != null ? depth0 : {},depth0,(depths[1] != null ? depths[1].maxPos : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</option>";
},"20":function(container,depth0,helpers,partials,data) {
    return " selected";
},"22":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.positions : depth0),{"name":"each","hash":{},"fn":container.program(23, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"23":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<option"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentPos : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depths[1] != null ? depths[1].currentPos : depths[1]),{"name":"ifCond","hash":{},"fn":container.program(9, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div class='popover_header'><h3>Move Card</h3><a class='cancel' href='#'></a></div><div class='body'><form><div class='button-link-container'><div class='button-link'><span class='label'>List</span><span class='value'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.withListName : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.program(3, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</span><select name='select_new_list'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.withListName : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<select></div><div class='button-link'><span class='label'>Position</span><span class='value'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.maxPos : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.program(16, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</span><select name='select_new_position'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.maxPos : depth0),{"name":"if","hash":{},"fn":container.program(18, data, 0, blockParams, depths),"inverse":container.program(22, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "<select></div></div><input type='submit' value='Move'></form></div>";
},"useData":true,"useDepths":true});

this["JST"]["move_cards"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<li><a href='#'"
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depth0 != null ? depth0.name : depth0),{"name":"ifCond","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ">"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias2).call(alias1,depth0,(depth0 != null ? depth0.name : depth0),{"name":"ifCond","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</a></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return " disabled";
},"4":function(container,depth0,helpers,partials,data) {
    return " (current)";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class='popover_header'><a class='back' href='#'></a><h3>Move All Cards in List</h3><a class='cancel' href='#'></a></div><div class='body'><form action='/boards/"
    + container.escapeExpression(((helper = (helper = helpers.boardID || (depth0 != null ? depth0.boardID : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"boardID","hash":{},"data":data}) : helper)))
    + "/' method='POST'><ul class='pop_over_list'>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.names : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul></form></div>";
},"useData":true});

this["JST"]["move_list"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "<option>"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + "</option>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class='popover_header'><a class='back' href='#'></a><h3>Move List</h3><a class='cancel' href='#'></a></div><div class='body'><form><div class='button-link'><span class='label'>Position</span><span class='value'>"
    + container.escapeExpression(((helper = (helper = helpers.currentPosition || (depth0 != null ? depth0.currentPosition : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"currentPosition","hash":{},"data":data}) : helper)))
    + "</span><select name='select_new_position'>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.possiblePositions : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<select></div><input type='submit' value='move'></form></div>";
},"useData":true});

this["JST"]["search"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<li><div class='wrapper'><a href='/lists/"
    + alias4(((helper = (helper = helpers.listID || (depth0 != null ? depth0.listID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listID","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "'><div class='fade'><div class='card_labels'>"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div><div class='card_name'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</div><div class='badges'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.subscribed : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(11, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div></div></a></div><div class='search_details'><span class='name'><a href='/lists/"
    + alias4(((helper = (helper = helpers.listID || (depth0 != null ? depth0.listID : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listID","hash":{},"data":data}) : helper)))
    + "/cards/"
    + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
    + "'>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</a></span><span>in <strong>"
    + alias4(((helper = (helper = helpers.listName || (depth0 != null ? depth0.listName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"listName","hash":{},"data":data}) : helper)))
    + "</strong></span></div></li>";
},"2":function(container,depth0,helpers,partials,data) {
    return "<span class='"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " label'></span>";
},"4":function(container,depth0,helpers,partials,data) {
    return "<div class='subscribed_badge'><span class='badge_icon'></span></div>";
},"6":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div class='due_date_badge "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.complete : depth0),{"name":"if","hash":{},"fn":container.program(7, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "'><span class='badge_icon'></span><span class='badge_text'>"
    + container.escapeExpression(((helper = (helper = helpers.due_date || (depth0 != null ? depth0.due_date : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"due_date","hash":{},"data":data}) : helper)))
    + "</span></div>";
},"7":function(container,depth0,helpers,partials,data) {
    return " complete ";
},"9":function(container,depth0,helpers,partials,data) {
    return "<div class='description_badge'><span class='badge_icon'></span></div>";
},"11":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class='comments_badge'><span class='badge_icon'></span><span class='badge_text'>"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.comments : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span></div>";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<h4>Cards</h4><ul>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</ul>";
},"useData":true});

this["JST"]["window"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {};

  return "<div id='window_main'><div id='edit_description'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.labels : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.due_date : depth0),{"name":"if","hash":{},"fn":container.program(5, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div class='description'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.description : depth0),{"name":"if","hash":{},"fn":container.program(16, data, 0, blockParams, depths),"inverse":container.program(18, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</div><div id='editing'><textarea>"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
    + "</textarea><div id='edit_controls'><input class='button' type='submit' value='Save'><a class='cancel'><span></span></a></div></div></div>";
},"2":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div id='edit_labels'><h4>Labels</h4><div>"
    + ((stack1 = helpers.each.call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.labels : depth0),{"name":"each","hash":{},"fn":container.program(3, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<a href='#' class='add_label'><span></span></a></div></div>";
},"3":function(container,depth0,helpers,partials,data) {
    return "<span class='"
    + container.escapeExpression(container.lambda(depth0, depth0))
    + " edit_label'></span>";
},"5":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, alias1=depth0 != null ? depth0 : {};

  return "<div id='edit_due_date'><h4>Due Date</h4><span class='due_date "
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.complete : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0, blockParams, depths),"inverse":container.program(8, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "'><span class='complete_box'><span class='complete_icon'></span></span><span class='due_date_text'>"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.complete : depth0),{"name":"if","hash":{},"fn":container.program(11, data, 0, blockParams, depths),"inverse":container.program(13, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "")
    + "</span></span></div>";
},"6":function(container,depth0,helpers,partials,data) {
    return "complete";
},"8":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.past_due : depth0),{"name":"if","hash":{},"fn":container.program(9, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"9":function(container,depth0,helpers,partials,data) {
    return "past_due";
},"11":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return container.escapeExpression(container.lambda((depths[1] != null ? depths[1].formatted_date : depths[1]), depth0));
},"13":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1;

  return ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.past_due : depth0),{"name":"if","hash":{},"fn":container.program(14, data, 0, blockParams, depths),"inverse":container.program(11, data, 0, blockParams, depths),"data":data})) != null ? stack1 : "");
},"14":function(container,depth0,helpers,partials,data,blockParams,depths) {
    return container.escapeExpression(container.lambda((depths[1] != null ? depths[1].formatted_date : depths[1]), depth0))
    + " (past_due)";
},"16":function(container,depth0,helpers,partials,data) {
    var helper;

  return "<h3>Description</h3><a class='after edit' href='#'>Edit</a><p id='description'>"
    + container.escapeExpression(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"description","hash":{},"data":data}) : helper)))
    + "</p>";
},"18":function(container,depth0,helpers,partials,data) {
    return "<a class='before edit' href='#'>Edit the description...<span></span></a>";
},"20":function(container,depth0,helpers,partials,data) {
    return "<span class='subscribe_checkbox'><span></span></span>";
},"22":function(container,depth0,helpers,partials,data) {
    var stack1, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing;

  return "<div id='labels_popover'><div class='popover_header'><a class='cancel' href='#'></a><h3>Labels</h3></div><ul><li id='green' "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"green",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><span class='green_label'><span class='select_icon'></span></span></li><li id='yellow' "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"yellow",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><span class='yellow_label'><span class='select_icon'></span></span></li><li id='orange' "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"orange",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><span class='orange_label'><span class='select_icon'></span></span></li><li id='red' "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"red",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><span class='red_label'><span class='select_icon'></span></span></li><li id='purple' "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"purple",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><span class='purple_label'><span class='select_icon'></span></span></li><li id='blue' "
    + ((stack1 = (helpers.ifIn || (depth0 && depth0.ifIn) || alias2).call(alias1,"blue",(depth0 != null ? depth0.labels : depth0),{"name":"ifIn","hash":{},"fn":container.program(23, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "><span class='blue_label'><span class='select_icon'></span></span></li></ul></div>";
},"23":function(container,depth0,helpers,partials,data) {
    return " class='selected' ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams,depths) {
    var stack1, helper, alias1=container.escapeExpression, alias2=depth0 != null ? depth0 : {};

  return "<div id='window'><a id='close_window' class='cancel' href='#'></a><div id='archive_banner'><span></span><p>This card is archived.</p></div><div id='window_header'><span></span><textarea>"
    + alias1(container.lambda(((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.name : stack1), depth0))
    + "</textarea><p>in list <a href='#'>"
    + alias1(((helper = (helper = helpers.list || (depth0 != null ? depth0.list : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(alias2,{"name":"list","hash":{},"data":data}) : helper)))
    + "</a></p></div>"
    + ((stack1 = helpers["with"].call(alias2,(depth0 != null ? depth0.model : depth0),{"name":"with","hash":{},"fn":container.program(1, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div id='comments_wrap'></div></div><div id='window_sidebar'><h3>Add</h3><ul><li id='label_link'><span></span><a href='#'>Labels</a></li><li id='due_date_link'><span></span><a href='#'>Due date</a></li></ul><h3>Actions</h3><ul><li id='move_link'><span></span><a href='#'>Move</a></li><li id='copy_link'><span></span><a href='#'>Copy</a></li><li id='subscribe_link'><span></span><a href='#'>Subscribe</a>"
    + ((stack1 = helpers["if"].call(alias2,((stack1 = (depth0 != null ? depth0.model : depth0)) != null ? stack1.subscribed : stack1),{"name":"if","hash":{},"fn":container.program(20, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</li><li id='archive_link'><span></span><a href='#'>Archive</a></li></ul></div></div>"
    + ((stack1 = helpers["with"].call(alias2,(depth0 != null ? depth0.model : depth0),{"name":"with","hash":{},"fn":container.program(22, data, 0, blockParams, depths),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "<div id='card_actions'></div>";
},"useData":true,"useDepths":true});