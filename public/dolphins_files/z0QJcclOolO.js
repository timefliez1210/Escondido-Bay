;/*FB_PKG_DELIM*/

__d("useGroupRoomComposerInitialRoomData_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupRoomComposerInitialRoomData_group",selections:[{alias:null,args:null,concreteType:"Group",kind:"LinkedField",name:"if_viewer_can_create_private_group_video_room",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"default_group_room_type",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"default_video_room_name",storageKey:null}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("useGroupRoomComposerPushRoomPage_group.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useGroupRoomComposerPushRoomPage_group",selections:[{kind:"RequiredField",field:{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},action:"THROW",path:"id"},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"group_comet_composer_room_preview_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"useGroupRoomComposerPushRoomPage_group",fragmentName:"GroupsCometComposerRoomPreview_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"GroupsCometComposerRoomPreview",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"useGroupRoomComposerPushRoomPage_group",fragmentName:"GroupsCometComposerRoomEventPreview_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"GroupsCometComposerRoomEventPreview",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"useGroupRoomComposerPushRoomPage_group",fragmentName:"GroupsCometComposerRoomGroupHashtagPreview_group",fragmentPropName:"group",kind:"ModuleImport"}],type:"GroupsCometComposerRoomGroupHashtagPreview",abstractKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"useGroupRoomComposerInitialRoomData_group"}],type:"Group",abstractKey:null};e.exports=a}),null);
__d("ComposerPollAttachmentAreaResource",["JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a=c("JSResourceForInteraction")("ComposerPollAttachmentArea.react").__setRef("ComposerPollAttachmentAreaResource");b=a;g["default"]=b}),98);
__d("GroupsComposerEditorStateValidator",["LexicalText","getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.editorState;a=a.lexicalEditor;if(a!=null){a=a.getEditorState().read(d("LexicalText").$isRootTextContentEmptyCurry(a.isComposing(),!0));return!a}else if(b!=null)return c("getPlainTextFromDeferredDraftEditorState_DEPRECATED_DO_NOT_USE")(b).length>0;return!1}g.hasText=a}),98);
__d("cometPollComposerValidate",["fbt","GroupsComposerEditorStateValidator"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){var b=a.editorState,c=a.lexicalEditor;a=a.poll;if(a==null)return null;a=a.items.map(function(a){return a.text.trim()});a=a.filter(function(a){return a!==""});var e=new Set(a);if(a.length>e.size)return h._("__JHASH__z1J2MST8Qpf__JHASH__");return!d("GroupsComposerEditorStateValidator").hasText({editorState:b,lexicalEditor:c})?h._("__JHASH__Q7nrnS0luaG__JHASH__"):null}g["default"]=a}),98);
__d("composerRoomReducer",["composerAttachmentAreaReducer"],(function(a,b,c,d,e,f,g){"use strict";function a(a,b){var c;switch(b.type){case"INITIALIZE_GROUP_ROOM":return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{allows_anonymous:b.allows_anonymous,funnel_session_id:b.funnel_session_id,group_room_type:(c=b.group_room_type)!=null?c:"open",is_group_room:!0,room_emoji:b.room_emoji,room_name:b.room_name,start_date:b.start_date})});case"UPDATE_GROUP_ROOM_TYPE":c=b.group_room_type;return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{group_room_type:c})});case"UPDATE_LINK_INFO":c=b.link_hash;var e=b.link_id,f=b.link_url;return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{link_hash:c,link_id:e,link_url:f})});case"UPDATE_ROOM_NAME":c=b.room_name;return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{room_name:c})});case"UPDATE_ROOM_NAME_AND_EMOJI":e=b.room_emoji;f=b.room_name;return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{room_emoji:e,room_name:f})});case"UPDATE_ROOM_VISIBILITY":c=b.allows_anonymous;return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{allows_anonymous:c})});case"UPDATE_START_DATE":e=b.start_date;return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{start_date:e})});case"ATTACH_FEED_ROOM":return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{allows_anonymous:b.allows_anonymous,is_feed_room:!0,link_id:b.link_id,room_emoji:b.room_emoji,room_name:b.room_name,start_date:b.start_date})});case"ATTACH_FEED_ROOM_BY_HASH":return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{is_feed_room:!0,link_hash:b.link_hash})});case"REMOVE_ATTACHMENT_TYPE":return d("composerAttachmentAreaReducer").removeActiveAttachmentViewStateData(a,b,{attachmentType:"VIDEO_MEETUP",field:"room"});case"UPDATE_GROUP_HASHTAG":f=b.group_hashtag_id;c=b.group_hashtag_name;return babelHelpers["extends"]({},a,{room:babelHelpers["extends"]({},a.room,{group_hashtag_id:f,group_hashtag_name:c})});default:return a}}g["default"]=a}),98);
__d("useGroupRoomComposerInitialRoomData",["CometRelay","GroupRoomType","getJSEnumSafe","recoverableViolation","useGroupRoomComposerInitialRoomData_group.graphql","useServerTime","uuid"],(function(a,b,c,d,e,f,g){"use strict";var h;function a(a){var e;a=d("CometRelay").useFragment(h!==void 0?h:h=b("useGroupRoomComposerInitialRoomData_group.graphql"),a);var f=c("useServerTime")();e=(e=c("getJSEnumSafe")(c("GroupRoomType"),(e=a.if_viewer_can_create_private_group_video_room)==null?void 0:e.default_group_room_type))!=null?e:"open";return{allows_anonymous:!1,funnel_session_id:c("uuid")().toString(),group_room_type:e,room_emoji:"\ud83d\udc4b",room_name:i(a.default_video_room_name),start_date:f}}function i(a){if(a==null){c("recoverableViolation")("default group room name is missing","groups_comet");return""}else return a}g["default"]=a}),98);
__d("useGroupRoomLoggingDataForComposer",["cometUniqueID","react","useCurrentRoute"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useState;function a(a){var b=c("useCurrentRoute")(),d=h(c("cometUniqueID")()),e=d[0],f=d[1];return[{room_container_id:a,room_type:"group",session_ids:{composer_session_id:"composer_"+e},source:(b==null?void 0:(d=b.entityKeyConfig)==null?void 0:(a=d.section)==null?void 0:a.value)==="joinable_video_chat"?"group_rooms_tab":"group_discussion_tab_composer",surface:"group"},function(){return f(c("cometUniqueID")())}]}g["default"]=a}),98);
__d("useGroupRoomComposerPushRoomPage",["fbt","CometComposerAttachmentPluginTypes","CometComposerPushPageContext","CometComposerViewStateContext","CometRelay","VideoChatLogging","VideoChatLoggingDataContext","composerRoomReducer","react","useCometComposerPushPage","useComposerViewStateDispatcher","useComposerViewStateReducer","useGroupRoomComposerInitialRoomData","useGroupRoomComposerPushRoomPage_group.graphql","useGroupRoomLoggingDataForComposer"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext;function a(a){var e=d("CometRelay").useFragment(i!==void 0?i:i=b("useGroupRoomComposerPushRoomPage_group.graphql"),a);c("useComposerViewStateReducer")(c("composerRoomReducer"));a=k(c("CometComposerViewStateContext"));var f=a.room;a=c("useGroupRoomLoggingDataForComposer")(e.id);var g=a[0],l=a[1];a=d("VideoChatLogging").useVideoChatLogging();var m=a.logRoomCreateTap,n=c("useComposerViewStateDispatcher")(),o=c("useCometComposerPushPage")(),p=c("useGroupRoomComposerInitialRoomData")(e);return function(){f==null&&n(babelHelpers["extends"]({},p,{type:"INITIALIZE_GROUP_ROOM"})),o(h._("__JHASH___SXB1xsWbOB__JHASH__"),function(a){var b=a.onReturn;return j.jsx(c("CometComposerPushPageContext").Provider,{value:o,children:j.jsx(c("VideoChatLoggingDataContext").Provider,{value:g,children:j.jsx(d("CometRelay").MatchContainer,{match:e.group_comet_composer_room_preview_renderer,props:{group:e.group_comet_composer_room_preview_renderer,onReturn:function(){b(),m(babelHelpers["extends"]({},g,{button_type:"create"})),n({attachmentType:c("CometComposerAttachmentPluginTypes").VIDEO_MEETUP,type:"ACTIVATE_ATTACHMENT_TYPE"}),l()}}})})})})}}g["default"]=a}),98);
__d("groupsCometComposerAnonymousPostFbts",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";a=h._("__JHASH__KOMjuaHOHbM__JHASH__");b=h._("__JHASH__rwYSCCmtbJA__JHASH__");c=h._("__JHASH__90K6vzHUYc0__JHASH__");g.POST_ANONYMOUSLY_PLACEHOLDER_TEXT=a;g.POST_WITHOUT_NAME_CTA_LABEL=b;g.SEE_ADMINS_AND_MODERATOR_ACTIVITY_LABEL=c}),98);
__d("filterNullsObjectMap",[],(function(a,b,c,d,e,f){"use strict";function a(a){var b={};for(a of Object.entries(a)){var c=a[0],d=a[1];d!=null&&(b[c]=d)}return b}f["default"]=a}),66);