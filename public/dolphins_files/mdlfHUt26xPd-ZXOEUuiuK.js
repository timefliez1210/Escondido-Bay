;/*FB_PKG_DELIM*/

__d("useGroupsCometLeadersImpressionLogger_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupsCometLeadersImpressionLogger_group",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{args:null,kind:"FragmentSpread",name:"useGroupsCometLeadersEngagementLogger_group"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupsCometGrowthPreferencesFilterInvitesContext",["react"],(function(a,b,c,d,e,f,g){"use strict";d("react");a=d("react").createContext;b={currentCategorizedFilter:null,setCurrentCategorizedFilter:function(){}};c=a(b);g["default"]=c}),98);
__d("GroupsCometGrowthPreferencesMemberOfOtherGroupsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b={selectedGrowthGroups:[],setSelectedGrowthGroups:function(){}};c=a(b);g["default"]=c}),98);
__d("GroupsCometInviteFriendsDialogDispatchContextDispatcher",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(c("emptyFunction"));g["default"]=b}),98);
__d("getBeyondFriendInvitingEnabled",[],(function(a,b,c,d,e,f){"use strict";function a(){return!1}f["default"]=a}),66);
__d("useGroupsCometLeadersImpressionLogger",["CometRelay","react","useGroupsCometLeadersEngagementLogger","useGroupsCometLeadersImpressionLogger_group.graphql"],(function(a,b,c,d,e,f,g){"use strict";var h;e=d("react");var i=e.useEffect,j=e.useRef,k=h!==void 0?h:h=b("useGroupsCometLeadersImpressionLogger_group.graphql");function a(a){var b=a.actionType,e=b===void 0?"impression":b;b=a.contentType;var f=b===void 0?"other":b;b=a.group$key;var g=a.id,h=a.meta,l=a.page;a=a.subtype;var m=a===void 0?"none":a,n=d("CometRelay").useFragment(k,b),o=c("useGroupsCometLeadersEngagementLogger")(n,l),p=j("");i(function(){if(!n)return;var a=[g,n.id,l].join("__");a!==p.current&&(p.current=a,o(babelHelpers["extends"]({action:e,action_subtype:m,content_type:f,extra_metadata:h},g!=null?{content_id:g}:null)))})}g["default"]=a}),98);/*FB_PKG_DELIM*/
__d("XGroupsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/{?view}/{?post_id}/",Object.freeze({autopopup_create_chat_dialog:!1,stories:!1,topics:!1,highlight_location:!1,highlight_sections:!1,highlight_groupapps:!1,highlight_pixel:!1,highlight_mentorship_option:!1,highlight_fundraiser_option:!1,highlight_auto_approval:!1,highlight_page_member:!1,highlight_units_edit_bar:!1,highlight_keyword_alerts:!1,hide_workplace_pagelet:!1,permalink_add_comment_nux_shown:!1,chained_wp:!1,hashtags:!1,member_modal:!1}),new Set(["stories","topics","highlight_location","highlight_sections","highlight_groupapps","highlight_pixel","highlight_mentorship_option","highlight_fundraiser_option","highlight_auto_approval","highlight_page_member","highlight_units_edit_bar","highlight_keyword_alerts","hashtags"]));b=a;g["default"]=b}),98);