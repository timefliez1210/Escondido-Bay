;/*FB_PKG_DELIM*/

__d("StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="8763985503642972"}),null);
__d("StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql",["StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"ArchivedStoryCardDeleteResponsePayload",kind:"LinkedField",name:"archived_story_card_delete",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"deleted_archived_story_card_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_story_ids",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"original_story_cache_ids",storageKey:null},{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{alias:null,args:null,concreteType:"StoriesData",kind:"LinkedField",name:"stories_data",plural:!1,selections:[c,{alias:null,args:null,concreteType:"StoryHistoryContainer",kind:"LinkedField",name:"story_archive",plural:!1,selections:[c,{alias:null,args:null,concreteType:"StoryHistoryContainerToArchivedCardsConnection",kind:"LinkedField",name:"archived_cards",plural:!1,selections:[{alias:null,args:null,concreteType:"StoryHistoryContainerToArchivedCardsEdge",kind:"LinkedField",name:"edges",plural:!0,selections:[{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"node",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",selections:c},params:{id:b("StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation_facebookRelayOperation"),metadata:{},name:"StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4116176868485633"}),null);
__d("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql",["StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a={defaultValue:!1,kind:"LocalArgument",name:"enable_profile_story_consumption"},c={defaultValue:null,kind:"LocalArgument",name:"input"},d={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};d=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"StoriesDeleteResponsePayload",kind:"LinkedField",name:"stories_delete",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"deleted_story_thread_ids",storageKey:null},{condition:"enable_profile_story_consumption",kind:"Condition",passingValue:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"buckets",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},d,{alias:null,args:null,kind:"ScalarField",name:"is_bucket_seen_by_viewer",storageKey:null},{alias:null,args:null,concreteType:"Story",kind:"LinkedField",name:"first_story_to_show",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"cache_id",storageKey:null}],storageKey:null}],storageKey:null}]}],storageKey:null}];return{fragment:{argumentDefinitions:[a,c],kind:"Fragment",metadata:null,name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",selections:d,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:[c,a],kind:"Operation",name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",selections:d},params:{id:b("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation_facebookRelayOperation"),metadata:{},name:"StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesMuteStoryOptionMenuItem_StoriesMuteMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4973510209383776"}),null);
__d("StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql",["StoriesMuteStoryOptionMenuItem_StoriesMuteMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"UserCameraPostStoryUnfollowResponsePayload",kind:"LinkedField",name:"user_camera_post_story_unfollow",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",selections:c},params:{id:b("StoriesMuteStoryOptionMenuItem_StoriesMuteMutation_facebookRelayOperation"),metadata:{},name:"StoriesMuteStoryOptionMenuItem_StoriesMuteMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesReportOptionMenuItem_report.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesReportOptionMenuItem_report",selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},{alias:null,args:[{kind:"Literal",name:"frx_entry_point",value:"CHEVRON_BUTTON"},{kind:"Literal",name:"negative_feedback_location",value:"story"}],kind:"ScalarField",name:"frx_entrypoint_label",storageKey:'frx_entrypoint_label(frx_entry_point:"CHEVRON_BUTTON",negative_feedback_location:"story")'}],type:"Story",abstractKey:null};e.exports=a}),null);
__d("StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5867781023251802"}),null);
__d("StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation.graphql",["StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"StoryCardIsStoryCommentingEnabledUpdateResponsePayload",kind:"LinkedField",name:"story_card_is_story_commenting_enabled_update",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"is_story_commenting_enabled",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation",selections:c},params:{id:b("StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation_facebookRelayOperation"),metadata:{},name:"StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesUnfollowPageOptionMenuItem_unfollowPageMutation_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="4949170961836933"}),null);
__d("StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql",["StoriesUnfollowPageOptionMenuItem_unfollowPageMutation_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"input"}],c=[{alias:null,args:[{kind:"Variable",name:"data",variableName:"input"}],concreteType:"PageUnlikeResponsePayload",kind:"LinkedField",name:"page_unlike",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"client_mutation_id",storageKey:null}],storageKey:null}];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",selections:c,type:"Mutation",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",selections:c},params:{id:b("StoriesUnfollowPageOptionMenuItem_unfollowPageMutation_facebookRelayOperation"),metadata:{},name:"StoriesUnfollowPageOptionMenuItem_unfollowPageMutation",operationKind:"mutation",text:null}}}();e.exports=a}),null);
__d("StoriesRecoverWarningScreenButton_data.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesRecoverWarningScreenButton_data",selections:[{alias:null,args:null,kind:"ScalarField",name:"content_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"render_type",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"top_objectionable_category",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"inform_session_id",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"use_feed_simplification_design",storageKey:null}],type:"OverlayWarningScreenViewModel",abstractKey:null};e.exports=a}),null);
__d("StoriesSuspenseCardOptionMenu_card.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesSuspenseCardOptionMenu_card",selections:[a,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"via",plural:!1,selections:[a],storageKey:null},{alias:null,args:null,concreteType:"StoryCardStoryInfo",kind:"LinkedField",name:"story_card_info",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"story_card_type",storageKey:null}],storageKey:null},{alias:null,args:null,concreteType:"StoryAttachment",kind:"LinkedField",name:"attachments",plural:!0,selections:[{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"media",plural:!1,selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null}],storageKey:null}],storageKey:null},{args:null,kind:"FragmentSpread",name:"StoriesReportOptionMenuItem_report"}],type:"Story",abstractKey:null}}();e.exports=a}),null);
__d("StoriesSuspenseCardOptionMenu_owner.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},b={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null};return{argumentDefinitions:[],kind:"Fragment",metadata:null,name:"StoriesSuspenseCardOptionMenu_owner",selections:[{alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},{kind:"InlineFragment",selections:[a],type:"Node",abstractKey:"__isNode"},{kind:"InlineFragment",selections:[b],type:"User",abstractKey:null},{kind:"InlineFragment",selections:[a,b],type:"Group",abstractKey:null},{kind:"InlineFragment",selections:[b,{alias:null,args:null,kind:"ScalarField",name:"viewer_profile_permissions",storageKey:null}],type:"Page",abstractKey:null},{kind:"InlineFragment",selections:[b,{alias:null,args:null,kind:"ScalarField",name:"is_viewer_host",storageKey:null}],type:"Event",abstractKey:null}],type:"CameraPostBucketOwnerUnion",abstractKey:"__isCameraPostBucketOwnerUnion"}}();e.exports=a}),null);
__d("StoriesArchiveBucketDataContext",["emptyFunction","react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b={archiveBucketData:{lowerBoundTime:"",nextDay:"",previousDay:"",storyArchiveID:"story_archive_ID",upperBoundTime:""},initialBucketID:"",setArchiveBucketData:c("emptyFunction")};e=a.createContext(b);g["default"]=e}),98);
__d("StoriesArchiveConstants",[],(function(a,b,c,d,e,f){"use strict";a={CONNECTION_NAME:"StoriesArchiveContentPaneRoot_archived_cards"};b={INITIAL_NEXTDAY:"initial_next_day",INITIAL_PREVIOUSDAY:"initial_previous_day"};f.ARCHIVE=a;f.BucketData=b}),66);
__d("StoriesDeleteCardDialogBox",["fbt","react","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react").useRef;function a(a){var b=a.mediaType,d=a.onDeleteConfirmClick,e=a.onHideConfirmationDialog,f=a.onOpenConfirmationDialog,g=a.storyOptionType;i(null);var j=c("useCometConfirmationDialog")(),k=function(){var a;switch(((a=b)!=null?a:"").toUpperCase()){case"PHOTO":return h._("__JHASH__L2_wSxUnG2t__JHASH__");case"VIDEO":return h._("__JHASH__qFrpFkyacl8__JHASH__");default:return h._("__JHASH__Tkm1iaHNdIh__JHASH__")}},l=function(){var a;switch(((a=b)!=null?a:"").toUpperCase()){case"PHOTO":return h._("__JHASH__BY5DT1_5pXB__JHASH__");case"VIDEO":return h._("__JHASH__0abv05OQkrS__JHASH__");default:return h._("__JHASH__cnWXzqpUQEv__JHASH__")}};a=function(){var a;switch(((a=b)!=null?a:"").toUpperCase()){case"PHOTO":return h._("__JHASH__DUSQNHSjkpB__JHASH__");case"VIDEO":return h._("__JHASH__mvEEzEbEu_n__JHASH__");default:return h._("__JHASH__YuqFYVgOtAM__JHASH__")}};var m=function(){j({body:k(),confirm:h._("__JHASH__lbbK_pYtDxY__JHASH__"),title:l()},d,function(){e&&e()}),f(g)};return{handleDeleteClick:m,primaryText:a()}}g["default"]=a}),98);
__d("StoriesArchiveDeleteCardOptionMenuItem.react",["CometMenuItem.react","CometRelay","StoriesArchiveBucketDataContext","StoriesArchiveCardStoreForBlue","StoriesArchiveConstants","StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql","StoriesDeleteCardDialogBox","StoriesEnums","StoriesLoggerContext","StoriesSuspenseContuxActionsContext","cr:3703","react","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext,k=h!==void 0?h:h=b("StoriesArchiveDeleteCardOptionMenuItem_StoriesArchiveDeleteMutation.graphql");function a(a){var e=d("CometRelay").useRelayEnvironment(),f=j(c("StoriesSuspenseContuxActionsContext")),g=f.handleCardDeletion;f=j(c("StoriesLoggerContext"));var h=f.logger,l=a.cardID;f=a.mediaType;var m=a.onHideConfirmationDialog;a=a.onOpenConfirmationDialog;var n=j(c("StoriesArchiveBucketDataContext"));n=n.archiveBucketData;var o=n.lowerBoundTime,p=n.storyArchiveID,q=n.upperBoundTime;n=function(){h.deleteLog();m();var a=function(a){a["delete"](l);a=a.get(p);if(a==null)return;a=d("relay-runtime").ConnectionHandler.getConnection(a,d("StoriesArchiveConstants").ARCHIVE.CONNECTION_NAME,{after_time:o,before_time:q,orderby:["local_creation_time_asc"]});if(a==null)return;d("relay-runtime").ConnectionHandler.deleteNode(a,l);var b=a.getLinkedRecords("edges")||[];a.setValue(b.length,"count")},b=function(b){a(b)};d("CometRelay").commitMutation(e,{mutation:k,optimisticUpdater:b,updater:b,variables:{input:{archived_story_card_id:l}}});c("StoriesArchiveCardStoreForBlue").DeletedStoryList.add(l);g()};f=c("StoriesDeleteCardDialogBox")({mediaType:f,onDeleteConfirmClick:n,onHideConfirmationDialog:m,onOpenConfirmationDialog:a,storyOptionType:d("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER});n=f.handleDeleteClick;a=f.primaryText;return i.jsx(c("CometMenuItem.react"),{icon:b("cr:3703"),iconSize:20,onClick:n,primaryText:a},"delete")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesBugOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("530512"),20);g["default"]=a}),98);
__d("StoriesCommentOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("508559"),20);g["default"]=a}),98);
__d("StoriesEyeCrossFilled24IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("511436"),24);g["default"]=a}),98);
__d("StoriesHideOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("577043"),20);g["default"]=a}),98);
__d("StoriesOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("912341"),20);g["default"]=a}),98);
__d("StoriesReportOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("490583"),20);g["default"]=a}),98);
__d("StoriesTrashOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("483829"),20);g["default"]=a}),98);
__d("StoriesUnfollowOutline20IconFbicon.react",["ix","fbicon"],(function(a,b,c,d,e,f,g,h){"use strict";a=d("fbicon")._(h("578906"),20);g["default"]=a}),98);
__d("StoriesToggleCommentDialogBox",["fbt","useCometConfirmationDialog"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a){var b=a.isCommentingOnForStory,d=a.onHideConfirmationDialog,e=a.onOpenConfirmationDialog,f=a.onToggleCommentConfirmClick,g=a.storyOptionType,i=c("useCometConfirmationDialog")(),j=function(){if(b===!0)return h._("__JHASH__JPeAnEmhi4v__JHASH__");else return h._("__JHASH__dbSL_2H_Ge5__JHASH__")},k=function(){if(b===!0)return h._("__JHASH__UyauUtXEvfH__JHASH__");else return h._("__JHASH__BkFHsI9-aVi__JHASH__")},l=function(){if(b===!0)return h._("__JHASH__Dv2ejzfmkQ7__JHASH__");else return h._("__JHASH__DOVuZGUxk-8__JHASH__")};a=function(){if(b===!0)return h._("__JHASH__nsorE9uvA02__JHASH__");else return h._("__JHASH__wNSK5fCndpj__JHASH__")};var m=function(){i({body:j(),confirm:l(),title:k()},f,function(){d&&d()}),e(g)};return{handleToggleCommentClick:m,primaryText:a()}}g["default"]=a}),98);
__d("StoriesDeleteCardOptionMenuItem.react",["CometMenuItem.react","CometRelay","StoriesDeleteCardDialogBox","StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql","StoriesEnums","StoriesLoggerContext","StoriesSuspenseContuxActionsContext","cr:3703","react","relay-runtime"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext,k=h!==void 0?h:h=b("StoriesDeleteCardOptionMenuItem_StoriesDeleteMutation.graphql");function a(a){var e=j(c("StoriesLoggerContext")),f=e.logger,g=d("CometRelay").useRelayEnvironment();e=j(c("StoriesSuspenseContuxActionsContext"));var h=e.handleCardDeletion,l=a.bucketID,m=a.cardID;e=a.mediaType;var n=a.onHideConfirmationDialog;a=a.onOpenConfirmationDialog;var o=function(){f.deleteLog();n();var a=function(a){a=l!=null?a.get(l):null;if(!a)return;var b=a.getLinkedRecord("unified_stories");if(b==null)return;d("relay-runtime").ConnectionHandler.deleteNode(b,m);var c=b.getLinkedRecords("edges")||[];b.setValue(c.length,"count");b.setValue(c.length===0,"is_empty");c.length===0&&a.setValue(null,"thumbnail_story_to_show")},b=function(b){a(b)};d("CometRelay").commitMutation(g,{mutation:k,optimisticUpdater:b,updater:b,variables:{input:{story_ids:[m]}}});h()};e=c("StoriesDeleteCardDialogBox")({mediaType:e,onDeleteConfirmClick:o,onHideConfirmationDialog:n,onOpenConfirmationDialog:a,storyOptionType:d("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER});o=e.handleDeleteClick;a=e.primaryText;return i.jsx(c("CometMenuItem.react"),{icon:b("cr:3703"),iconSize:20,onClick:o,primaryText:a,testid:void 0},"delete")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesReportBug",["StoriesPauseReasons","react","useCometReportBug"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a){var b=a.setPause;a=c("useCometReportBug")();var e=a[0];a=a[1];var f=h(function(){b(!0,d("StoriesPauseReasons").BUG_DIALOG),e({initialProduct:"stories"},function(){b(!1,d("StoriesPauseReasons").BUG_DIALOG)})},[b,e]),g=h(function(){f()},[f]);return[g,a]}g["default"]=a}),98);
__d("StoriesFileBugOptionMenuItem.react",["fbt","CometMenuItem.react","cr:3762","react","useStoriesReportBug"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=c("useStoriesReportBug")(a);var d=a[0];a=a[1];return i.jsx(c("CometMenuItem.react"),{icon:b("cr:3762"),iconSize:20,onClick:d,primaryText:h._("__JHASH__4lFF_oZTnvF__JHASH__"),ref:a},"bug")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesInspectStoryOptionMenuItem.react",["fbt","CometMenuItem.react","cr:3850","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){return i.jsx(c("CometMenuItem.react"),{href:"https://our.intern.facebook.com/intern/fb_stories/inspector/?id="+a.cardID,icon:b("cr:3850"),iconSize:20,primaryText:h._("__JHASH__B0IwBlUj5TX__JHASH__"),target:"_blank"})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useStoriesBucketDelete",["react","relay-runtime","useStoriesBucketsConnectionArguments"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a,b){var e=c("useStoriesBucketsConnectionArguments")(),f=e.connectionArguments,g=e.connectionName,i=h(function(c){if(b==null)return;if(a!=null){var e=c.get(a);if(e!=null){e=d("relay-runtime").ConnectionHandler.getConnection(e,g,f);e!=null&&d("relay-runtime").ConnectionHandler.deleteNode(e,b)}}c["delete"](b)},[a,b,f,g]);return h(function(a){i(a)},[i])}g["default"]=a}),98);
__d("StoriesMuteStoryOptionMenuItem.react",["fbt","CometMenuItem.react","CometRelay","StoriesEnums","StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql","cr:3851","react","useCometConfirmationDialog","useStoriesBucketDelete"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useRef,l=i!==void 0?i:i=b("StoriesMuteStoryOptionMenuItem_StoriesMuteMutation.graphql");function a(a){var e=d("CometRelay").useRelayEnvironment();k(null);var f=c("useCometConfirmationDialog")(),g=h._("__JHASH__ddPvv8EaUdD__JHASH__",[h._param("bucket_owner_name",a.ownerName)]),i=function(){switch(a.storyCardType){case d("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY:return h._("__JHASH__f63xcmRtgFE__JHASH__");case d("StoriesEnums").STORY_CARD_TYPES.EVENT_STORY:return h._("__JHASH__5dXLlP0NyEa__JHASH__");case d("StoriesEnums").STORY_CARD_TYPES.GROUP_STORY:return h._("__JHASH__xCkTxfl1aB2__JHASH__")}return h._("__JHASH__R_4omc4hzek__JHASH__")},m=c("useStoriesBucketDelete")(a.actorID,a.bucketID),n=function(){a.onHideConfirmationDialog&&a.onHideConfirmationDialog();var b=a.ownerID;if(b==null)return;d("CometRelay").commitMutation(e,{mutation:l,optimisticUpdater:m,updater:m,variables:{input:{should_unfollow_user_story:!0,user_id:b}}})},o=function(){f({body:i(),confirm:h._("__JHASH__oQbhDnnscXX__JHASH__"),title:g},n,function(){a.onHideConfirmationDialog&&a.onHideConfirmationDialog()}),a.onOpenConfirmationDialog(d("StoriesEnums").STORIES_OPTION_TYPES.MUTE_CARD_OWNER)},p=function(){var b;b=(b=a.ownerName)!=null?b:"";return h._("__JHASH__s0G5vMbhg6t__JHASH__",[h._param("bucket_owner_name",b)])};return j.jsx(c("CometMenuItem.react"),{icon:b("cr:3851"),iconSize:20,onClick:o,primaryText:p()},"mute_bucket_owner")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesReportOptionMenuItem.react",["fbt","CometMenuItem.react","CometRelay","ProfileCometFeaturedHighlightsStrings","StoriesBehaviorHelpContext","StoriesEnums","StoriesPauseReasons","StoriesReportOptionMenuItem_report.graphql","StoriesUtils","cr:3939","cr:764837","cr:885544","cr:885545","cr:962207","react","setTimeout","useLaunchFRXFlow"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react");e=d("react");var k=e.useCallback,l=e.useContext,m=e.useEffect,n=e.useRef,o="direct_messaging",p="DIRECT_MESSAGING";function a(a){var e=a.card,f=a.setPause;a=d("CometRelay").useFragment(i!==void 0?i:i=b("StoriesReportOptionMenuItem_report.graphql"),e);var g=n(),q=d("StoriesUtils").cardID2ThreadID(a.id||"");e=c("useLaunchFRXFlow")({content_id:q||"",entry_point:"REPORT_BUTTON",location:p,trigger_event_type:"REPORT_BUTTON_CLICKED"});var r=e[0];e=l(c("StoriesBehaviorHelpContext")).getBucketType();a=e===d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY?d("ProfileCometFeaturedHighlightsStrings").REPORT_ITEM:(e=a.frx_entrypoint_label)!=null?e:h._("__JHASH__2VNX9ZRe9lT__JHASH__");m(function(){if(b("cr:764837")===null)return;var a=[b("cr:764837").subscribe("lwf/frx/dialogClosed",function(){f(!1,d("StoriesPauseReasons").REPORT_DIALOG)}),b("cr:764837").subscribe("frx/search/dialogClosed",function(){f(!1,d("StoriesPauseReasons").REPORT_DIALOG)})];return function(){c("setTimeout")(function(){a.map(function(a){return a.unsubscribe()}),a=[]},10)}});e=k(function(){if(b("cr:885545")&&b("cr:962207")&&b("cr:885544")){var a=b("cr:885545").withEntReportable({entry_point:"report_button",reportable_ent_token:q,story_location:o});f(!0,d("StoriesPauseReasons").REPORT_DIALOG);a=new(b("cr:885544"))().setURI(a);a.setRelativeTo(g.current);b("cr:962207").send(a)}},[f,q]);var s=k(function(){f(!0,d("StoriesPauseReasons").REPORT_DIALOG),r({},function(){f(!1,d("StoriesPauseReasons").REPORT_DIALOG)})},[r,f]);return j.jsx(c("CometMenuItem.react"),{icon:b("cr:3939"),iconSize:20,onClick:b("cr:885545")&&b("cr:962207")&&b("cr:885544")?e:s,primaryText:a},"report")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesToggleCommentCardOptionMenuItem.react",["CometMenuItem.react","CometRelay","StoriesEnums","StoriesFeedbackCommentStateContext","StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation.graphql","StoriesToggleCommentDialogBox","cr:3953","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useContext,k=h!==void 0?h:h=b("StoriesToggleCommentCardOptionMenuItem_StoriesToggleCommentMutation.graphql");function a(a){var e=a.cardID,f=a.onHideConfirmationDialog;a=a.onOpenConfirmationDialog;var g=d("CometRelay").useRelayEnvironment(),h=j(c("StoriesFeedbackCommentStateContext")),l=h.isCommentingOnForStory,m=h.setIsCommentingOnForStory;h=function(){var a=function(){m(!l),f&&f()};d("CometRelay").commitMutation(g,{mutation:k,optimisticUpdater:a,updater:a,variables:{input:{is_story_commenting_enabled:!l,story_card_id:e}}})};a=c("StoriesToggleCommentDialogBox")({isCommentingOnForStory:l,onHideConfirmationDialog:f,onOpenConfirmationDialog:a,onToggleCommentConfirmClick:h,storyOptionType:d("StoriesEnums").STORIES_OPTION_TYPES.TOGGLE_COMMENT});h=a.handleToggleCommentClick;a=a.primaryText;return i.jsx(c("CometMenuItem.react"),{icon:b("cr:3953"),iconSize:20,onClick:h,primaryText:a,testid:void 0},"comment")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesUnfollowPageOptionMenuItem.react",["fbt","CometMenuItem.react","CometRelay","StoriesEnums","StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql","cr:3970","react","useCometConfirmationDialog","useStoriesBucketDelete"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useRef,l=i!==void 0?i:i=b("StoriesUnfollowPageOptionMenuItem_unfollowPageMutation.graphql");function a(a){var e=d("CometRelay").useRelayEnvironment();k(null);var f=c("useCometConfirmationDialog")(),g=h._("__JHASH__Wjj8qAsC9d7__JHASH__",[h._param("bucket_owner_name",a.ownerName)]),i=c("useStoriesBucketDelete")(a.actorID,a.bucketID),m=function(){a.onHideConfirmationDialog&&a.onHideConfirmationDialog();var b=a.ownerID;if(b==null)return;d("CometRelay").commitMutation(e,{mutation:l,optimisticUpdater:i,updater:i,variables:{input:{page_id:b}}})},n=function(){f({body:h._("__JHASH__qCirwI6lUX8__JHASH__"),confirm:h._("__JHASH__62vLBJL3U6U__JHASH__"),title:g},m,function(){a.onHideConfirmationDialog&&a.onHideConfirmationDialog()}),a.onOpenConfirmationDialog(d("StoriesEnums").STORIES_OPTION_TYPES.UNFOLLOW_PAGE)},o=function(){var b;b=(b=a.ownerName)!=null?b:"";return h._("__JHASH__ZSICvbRlfNb__JHASH__",[h._param("bucket_owner_name",b)])};return j.jsx(c("CometMenuItem.react"),{icon:b("cr:3970"),iconSize:20,onClick:n,primaryText:o()},"unfollow_page")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesRecoverWarningScreenButton.react",["fbt","CometRelay","CometStoryRenderLocationContext.react","CometWarningScreenClientLogger","CometWarningScreenContext","StoriesRecoverWarningScreenButton_data.graphql","StoriesViewerMenuButton.react","TetraIcon.react","WarningScreenRenderType","cr:5370","getJSEnumSafe","react","useCometUFIVideoPlayerStateAndController","useMinifiedProductAttribution"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j=d("react"),k=d("react").useContext;function a(a){var e,f=a.loggingData,g=a.storyID,l=d("CometRelay").useFragment(i!==void 0?i:i=b("StoriesRecoverWarningScreenButton_data.graphql"),f),m=c("useMinifiedProductAttribution")();a=d("CometWarningScreenContext").useHasOverlay();f=(f=d("CometWarningScreenContext").useIsContentVisible())!=null?f:!1;var n=c("useCometUFIVideoPlayerStateAndController")(),o=d("CometWarningScreenContext").useShowOverlay(),p=k(c("CometStoryRenderLocationContext.react")),q=c("getJSEnumSafe")(c("WarningScreenRenderType"),l==null?void 0:l.render_type);e=(e=l==null?void 0:l.use_feed_simplification_design)!=null?e:!1;return e||q==="LIGHTWEIGHT"||!a||!f?null:j.jsx(c("StoriesViewerMenuButton.react"),{icon:j.jsx(c("TetraIcon.react"),{color:"white",icon:b("cr:5370"),size:24}),label:h._("__JHASH__EXOnKQwiBGT__JHASH__"),onClick:function(){n&&n.controller.pause("warning_screen_cover"),o(!0),d("CometWarningScreenClientLogger").logInformTreatmentEvent({action:"HIDE_CONTENT",attribution_id_v2:m,contentIDRaw:l==null?void 0:l.content_id,event:"action",objectionableCategory:l==null?void 0:l.top_objectionable_category,product:"warning_screens",renderType:q,session_id:l==null?void 0:l.inform_session_id,storyID:g,storyRenderLocation:p,surface:"story_viewer"})},testid:void 0})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesArchiveStoryOptionMenuItem.react",["fbt","ix","CometMenuItem.react","ProfileTabConst","XCometProfileControllerRouteBuilder","fbicon","qpl","react","requireDeferred"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("requireDeferred")("FBStoriesQPLUtils").__setRef("StoriesArchiveStoryOptionMenuItem.react");function a(a){a=a.actorID;a=c("XCometProfileControllerRouteBuilder").buildURL({id:(a=a)!=null?a:"",sk:c("ProfileTabConst").STORIES_ARCHIVE});var b=function(){k.onReady(function(a){a.start({navigationStart:!1,qplMarker:c("qpl")._(22347782,"7759")})})};return j.jsx(c("CometMenuItem.react"),{href:a,icon:d("fbicon")._(i("689703"),20),onClick:b,primaryText:h._("__JHASH__DpDqoZWeQp9__JHASH__")},"archive")}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesSettingsOptionMenuItem.react",["fbt","ix","CometLazyDialogTrigger.react","CometMenuItem.react","JSResourceForInteraction","StoriesPauseReasons","fbicon","react","storiesViewerSuspenseEmitter"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=d("react").useRef,l=c("JSResourceForInteraction")("StoriesWebSettingsDialog.react").__setRef("StoriesSettingsOptionMenuItem.react");function a(a){a=a.refetchNodes;var b=k(null);return j.jsx(c("CometLazyDialogTrigger.react"),{dialogProps:{onBeforeDialogClose:a,setPause:c("storiesViewerSuspenseEmitter").requestPause},dialogResource:l,onShow:function(){return c("storiesViewerSuspenseEmitter").requestPause(!0,d("StoriesPauseReasons").SETTINGS_DIALOG)},children:function(a){return j.jsx(c("CometMenuItem.react"),{icon:d("fbicon")._(i("497570"),20),onClick:a,primaryText:h._("__JHASH__en-kATzsTAM__JHASH__"),ref:b},"setting")}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("StoriesSuspenseCardOptionMenu.react",["CometMenu.react","CometRelay","CometSeparatorMenuItem.react","StoriesActorContext","StoriesArchiveDeleteCardOptionMenuItem.react","StoriesArchiveStoryOptionMenuItem.react","StoriesBehaviorHelpContext","StoriesDeleteCardOptionMenuItem.react","StoriesEnums","StoriesFileBugOptionMenuItem.react","StoriesGating","StoriesInspectStoryOptionMenuItem.react","StoriesLoggerSession","StoriesLoggingConstants","StoriesMuteStoryOptionMenuItem.react","StoriesReportOptionMenuItem.react","StoriesSettingsOptionMenuItem.react","StoriesSuspenseCardOptionMenu_card.graphql","StoriesSuspenseCardOptionMenu_owner.graphql","StoriesToggleCommentCardOptionMenuItem.react","StoriesUnfollowPageOptionMenuItem.react","gkx","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i,j=d("react"),k=d("react").useContext,l=function(){function a(){this.$1=[]}var b=a.prototype;b.add=function(a,b){(b!=null?b:!0)&&this.$1.push(a);return this};b.done=function(){var a;return(a=this.$1)!=null?a:[]};return a}();function a(a){var e=d("CometRelay").useFragment(h!==void 0?h:h=b("StoriesSuspenseCardOptionMenu_card.graphql"),a.card),f=d("CometRelay").useFragment(i!==void 0?i:i=b("StoriesSuspenseCardOptionMenu_owner.graphql"),a.owner),g=k(c("StoriesActorContext")),m=g.actorID;g=k(c("StoriesBehaviorHelpContext"));var n=g.getBucketType;g=g.getIsPageOrProfilePlusStory;n=n();g=g();var o=e==null?void 0:e.id;if(e==null||o==null)return null;function p(){var a=e==null?void 0:e.attachments;return a&&(a==null?void 0:a.length)>0?(a=a[0].media)==null?void 0:a.__typename:null}function q(){var a;return e==null?void 0:(a=e.story_card_info)==null?void 0:a.story_card_type}function r(){var a;if(f==null)return!1;a=e==null?void 0:(a=e.via)==null?void 0:a.id;return a===m||s()}function s(){if(f==null)return!1;var a=f.viewer_profile_permissions!=null&&f.viewer_profile_permissions.includes("EDIT_PROFILE");return f.id===m||a||!!f.is_viewer_host}var t=d("StoriesLoggerSession").getOpenViewerSource(),u=null;t===c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE?u=c("StoriesArchiveDeleteCardOptionMenuItem.react"):u=c("StoriesDeleteCardOptionMenuItem.react");n=s()&&n===d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY?null:new l().add(j.jsx(c("StoriesMuteStoryOptionMenuItem.react"),{actorID:m,bucketID:a.bucketID,onHideConfirmationDialog:a.onHideOptionConfirmationDialog,onOpenConfirmationDialog:a.onShowOptionConfirmationDialog,ownerID:f==null?void 0:f.id,ownerName:f==null?void 0:f.name,storyCardType:q()},"mute_owner"),!s()&&n!==d("StoriesEnums").STORY_CARD_TYPES.HIGHLIGHTED_STORY).add(j.jsx(c("StoriesUnfollowPageOptionMenuItem.react"),{actorID:m,bucketID:a.bucketID,onHideConfirmationDialog:a.onHideOptionConfirmationDialog,onOpenConfirmationDialog:a.onShowOptionConfirmationDialog,ownerID:f==null?void 0:f.id,ownerName:f==null?void 0:f.name},"unfollow_page"),!s()&&q()===d("StoriesEnums").STORY_CARD_TYPES.PAGE_STORY).add(j.jsx(c("StoriesReportOptionMenuItem.react"),{card:e,setPause:a.setPause},"report"),!r()).add(j.jsx(c("StoriesToggleCommentCardOptionMenuItem.react"),{cardID:o,onHideConfirmationDialog:a.onHideOptionConfirmationDialog,onOpenConfirmationDialog:a.onShowOptionConfirmationDialog},"comment"),d("StoriesGating").isCommentEnabled()&&r()&&!g&&t!==c("StoriesLoggingConstants").ACTION_SOURCE.ARCHIVE).add(j.jsx(u,{bucketID:a.bucketID,cardID:o,mediaType:p(),onHideConfirmationDialog:a.onHideOptionConfirmationDialog,onOpenConfirmationDialog:a.onShowOptionConfirmationDialog},"delete"),r()).add(j.jsx(c("StoriesFileBugOptionMenuItem.react"),{setPause:a.setPause},"bug")).add(j.jsx(c("StoriesInspectStoryOptionMenuItem.react"),{cardID:o},"inspect"),c("gkx")("807313")).add(j.jsx(c("CometSeparatorMenuItem.react"),{},"separator"),d("StoriesGating").shouldShowViewerV3()).add(j.jsx(c("StoriesArchiveStoryOptionMenuItem.react"),{actorID:m},"archive"),m!=null&&d("StoriesGating").shouldShowViewerV3()).add(j.jsx(c("StoriesSettingsOptionMenuItem.react"),{refetchNodes:a.refetchNodes},"setting"),d("StoriesGating").shouldShowViewerV3()).done();return j.jsx("div",{"data-testid":void 0,children:j.jsx(c("CometMenu.react"),{withArrow:!0,children:n})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("FBStoriesQPLUtils",["QuickPerformanceLogger","Run"],(function(a,b,c,d,e,f,g){"use strict";function h(a){a.navigationStart?c("QuickPerformanceLogger").markerStartFromNavStart(a.qplMarker):c("QuickPerformanceLogger").markerStart(a.qplMarker,0),d("Run").onUnload(function(){c("QuickPerformanceLogger").markerEnd(a.qplMarker,4)})}function a(a){h(a)}function b(a){c("QuickPerformanceLogger").markerEnd(a.qplMarker,a.action?a.action:2)}g.start=a;g.end=b}),98);