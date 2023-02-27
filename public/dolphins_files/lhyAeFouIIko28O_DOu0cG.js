;/*FB_PKG_DELIM*/

__d("GroupsCometActionMemberRequestsMenuItem_group$normalization.graphql",[],(function(a,b,c,d,e,f){"use strict";a={kind:"SplitOperation",metadata:{},name:"GroupsCometActionMemberRequestsMenuItem_group$normalization",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null}]};e.exports=a}),null);
__d("GroupsCometActionMemberRequestsMenuItem_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"GroupsCometActionMemberRequestsMenuItem_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("GroupAdminActionsTypedLoggerLite",["generateLiteTypedLogger"],(function(a,b,c,d,e,f){"use strict";e.exports=b("generateLiteTypedLogger")("logger:GroupAdminActionsLoggerConfig")}),null);
__d("useGroupAdminActionsEventLogger",["GroupAdminActionsTypedLoggerLite","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.event,d=a.groupID,e=a.source;return h(function(){c("GroupAdminActionsTypedLoggerLite").log({event:b,group_id:d,source:e})},[b,d,e])}g["default"]=a}),98);
__d("GroupCometInsightsTimeUtils",["fbt","CometLocalDate"],(function(a,b,c,d,e,f,g,h){"use strict";var i=1e3*60*60*24;a=7*i;b=28*i;d=60*i;e="TWENTY_EIGHT_DAYS";var j=function(a){return Math.floor(a/1e3)};f=function(a){return a*1e3};var k=function(a){a=new Date(a.getTime());a.setHours(0,0,0,0);return a},l=function(a){a=new Date(a.getTime());a.setHours(23,59,59,999);return a},m=function(){return l(c("CometLocalDate").fromDate(new Date()).getWithDaysAdded(-1).getJSDate())},n=function(){return l(c("CometLocalDate").fromDate(new Date()).getWithDaysAdded(-2).getJSDate())},o=function(){return l(new Date())},p=[h._("__JHASH__pZQ3a54nTot__JHASH__"),h._("__JHASH__Aw4IPSgrp-N__JHASH__"),h._("__JHASH__lz0EYwonShb__JHASH__"),h._("__JHASH__U5ZH4MvSHJg__JHASH__"),h._("__JHASH__T5T7lpBd9DN__JHASH__"),h._("__JHASH__KklzMmrhf5P__JHASH__"),h._("__JHASH__XPlPbhYYEns__JHASH__")],q=Object.freeze({SEVEN_DAYS:{duration:a,label:h._("__JHASH__9VTy9fXQ5b5__JHASH__")},SIXTY_DAYS:{duration:d,label:h._("__JHASH__LyH3R69Myfq__JHASH__")},TWENTY_EIGHT_DAYS:{duration:b,label:h._("__JHASH__SHlDzvIo8bU__JHASH__")}}),r=function(a,b){b===void 0&&(b=m());return new Date(b.getTime()-q[a].duration+i)},s=function(a,b){return[j(a.getTime()-i),j(b.getTime())]};a=function(a,b,c,d){c===void 0&&(c=!1);d===void 0&&(d=!0);if(!d&&b.getTime()===n().getTime()||!c&&b.getTime()===m().getTime()||c&&o().getTime()===b.getTime()){d=b.getTime()-a.getTime();if(d===q.SEVEN_DAYS.duration-i)return"SEVEN_DAYS";if(d===q.TWENTY_EIGHT_DAYS.duration-i)return"TWENTY_EIGHT_DAYS";if(d===q.SIXTY_DAYS.duration-i)return"SIXTY_DAYS"}return"CUSTOM"};d=function(a,b,c){a=a!=null?new Date(+a):r(c!=null?c:"TWENTY_EIGHT_DAYS");c=b!=null?new Date(+b):m();b=s(a,c);var d=b[0];b=b[1];return{endDate:c,endTime:b,startDate:a,startTime:d}};b=function(a,b){return a?o():b?m():n()};h=Object.freeze({DAYS_OF_WEEK_TEXT:p,DEFAULT_TIME_RANGE:e,ONE_DAY:i,PresetTimeRanges:q,getBeginningOfDay:k,getDefaultEndTimeState:b,getEndOfDay:l,getEndOfDayBeforeYesterday:n,getEndOfToday:o,getEndOfYesterday:m,getInsightsQueryDefaultsFromRouteParams:d,getNormalizedInsightsQueryTimeRange:s,getPresetTimeRangeStartDate:r,getTimeRangeKey:a,toMilliSeconds:f,toSeconds:j});g["default"]=h}),98);
__d("XCometGroupMemberRequestsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/member-requests/",Object.freeze({hide_admin_approved_members:!1,joined_fb_recently:!1,previously_removed_members:!1,suggested:!1}),void 0);b=a;g["default"]=b}),98);
__d("GroupsCometActionMemberRequestsMenuItem.react",["fbt","ix","CometMenuItem.react","CometRelay","GroupsCometActionMemberRequestsMenuItem_group.graphql","XCometGroupMemberRequestsControllerRouteBuilder","fbicon","react","useCometRouterDispatcher"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j,k=d("react");function a(a){a=a.group;a=d("CometRelay").useFragment(j!==void 0?j:j=b("GroupsCometActionMemberRequestsMenuItem_group.graphql"),a);var e=a.id,f=c("useCometRouterDispatcher")();return k.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("502674"),20),onClick:function(){var a=c("XCometGroupMemberRequestsControllerRouteBuilder").buildUri({idorvanity:e});f!=null&&f.go(a.toString(),{})},primaryText:h._("__JHASH__PRd7E1ys-7r__JHASH__")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useGroupsCometAdminToolsSection",["useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=c("useCurrentRoute")();return(a=a==null?void 0:(a=a.rootView)==null?void 0:(a=a.props)==null?void 0:a.section)!=null?a:null}g["default"]=a}),98);
__d("ForumInsightsAudienceType",[],(function(a,b,c,d,e,f){a=Object.freeze({EVERYONE:"everyone",MEMBER:"member",NON_MEMBER:"non_member"});f["default"]=a}),66);
__d("XCometGroupPendingPostsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/groups/{idorvanity}/pending_posts/",Object.freeze({has_selection:!1,is_notif_background:!1}),void 0);b=a;g["default"]=b}),98);
__d("GroupsCometCommunityChatsRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6627037814001690"}),null);/*FB_PKG_DELIM*/
__d("GroupsCometPendingPostsFeedGlimmer.react",["CometFeedStoryGlimmer.react","react"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){return h.jsxs("div",{className:"xw7yly9",children:[h.jsx(c("CometFeedStoryGlimmer.react"),{}),h.jsx(c("CometFeedStoryGlimmer.react"),{})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("GroupsCometPendingPostsMultiSelectContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a({dispatch:c("emptyFunction"),state:{available:new Set(),selected:new Set()}});g["default"]=b}),98);
__d("GroupsCometPendingPostsPostCardFeedUnitStrategyContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext({allowMultiSelectCheckbox:!1,isForBulkApproval:!1});g["default"]=b}),98);
__d("GroupCometPendingPostsTombstoneCleanerContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react").createContext;b=a({addDirtyStory:c("emptyFunction"),clear:c("emptyFunction"),dirtyStories:{current:new Set()},groupID:null,removeDirtyStory:c("emptyFunction"),setGroupID:c("emptyFunction")});g["default"]=b}),98);
__d("GroupsCometPendingPostStandaloneActionsMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="9085934878087028"}),null);