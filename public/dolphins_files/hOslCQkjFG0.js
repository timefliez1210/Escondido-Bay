;/*FB_PKG_DELIM*/

__d("EventCometUniversalRSVPButton_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometUniversalRSVPButton_event",selections:[{alias:"rsvp_button_renderer",args:[{kind:"Literal",name:"supported",value:["LiveVideoGoLiveStyleRenderer","DisabledRsvpStyleRenderer","PrivateRsvpStyleRenderer","PublicRsvpStyleRenderer","WorkPrivateRsvpStyleRenderer","WorkPublicRsvpStyleRenderer","EventsGeminiEnhancedRsvpStyleRenderer"]}],concreteType:null,kind:"LinkedField",name:"rsvp_style_renderer",plural:!1,selections:[{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButton_event",fragmentName:"LiveVideoCometGoLiveButtonRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"LiveVideoGoLiveStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButton_event",fragmentName:"EventCometDisabledRSVPButtonRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"DisabledRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButton_event",fragmentName:"PrivateEventCometRSVPButtonRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"PrivateRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButton_event",fragmentName:"PublicEventCometRSVPButtonRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"PublicRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButton_event",fragmentName:"EventsGeminiPrivateEventRSVPButtonRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"WorkPrivateRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButton_event",fragmentName:"EventsGeminiPublicEventRSVPButtonRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"WorkPublicRsvpStyleRenderer",abstractKey:null},{kind:"InlineFragment",selections:[{args:null,documentName:"EventCometUniversalRSVPButton_event",fragmentName:"EventsGeminiEnhancedRsvpButtonStyleRenderer_rsvpStyleRenderer",fragmentPropName:"rsvpStyleRenderer",kind:"ModuleImport"}],type:"EventsGeminiEnhancedRsvpStyleRenderer",abstractKey:null}],storageKey:'rsvp_style_renderer(supported:["LiveVideoGoLiveStyleRenderer","DisabledRsvpStyleRenderer","PrivateRsvpStyleRenderer","PublicRsvpStyleRenderer","WorkPrivateRsvpStyleRenderer","WorkPublicRsvpStyleRenderer","EventsGeminiEnhancedRsvpStyleRenderer"])'}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("useEventsRSVPPrivacyToast_scope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"useEventsRSVPPrivacyToast_scope",selections:[{args:null,kind:"FragmentSpread",name:"useEventsRSVPPrivacyToast_toastScope"}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("useEventsRSVPPrivacyToast_toastScope.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useEventsRSVPPrivacyToast_toastScope",selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacySelectorDialog_scope"},{alias:null,args:[{kind:"Variable",name:"scale",variableName:"scale"}],concreteType:"Image",kind:"LinkedField",name:"icon_image",plural:!1,selections:[{args:null,kind:"FragmentSpread",name:"useCometPrivacyIcon_image"}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"label",storageKey:null}],type:"PrivacyScope",abstractKey:null};e.exports=a}),null);
__d("EventCometName_event.graphql",[],(function(a,b,c,d,e,f){"use strict";a={argumentDefinitions:[],kind:"Fragment",metadata:null,name:"EventCometName_event",selections:[{alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"is_canceled",storageKey:null}],type:"Event",abstractKey:null};e.exports=a}),null);
__d("EventCometJoinFromRoomMessageDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6025701924125920"}),null);
__d("EventCometJoinFromRoomMessageDialogQuery$Parameters",["EventCometJoinFromRoomMessageDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EventCometJoinFromRoomMessageDialogQuery_facebookRelayOperation"),metadata:{},name:"EventCometJoinFromRoomMessageDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometJoinMessageDialogQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5476311022460985"}),null);
__d("EventCometJoinMessageDialogQuery$Parameters",["EventCometJoinMessageDialogQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EventCometJoinMessageDialogQuery_facebookRelayOperation"),metadata:{},name:"EventCometJoinMessageDialogQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometPermalinkMoreActionsMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5786697898119005"}),null);
__d("EventCometPermalinkMoreActionsMenuQuery$Parameters",["EventCometPermalinkMoreActionsMenuQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EventCometPermalinkMoreActionsMenuQuery_facebookRelayOperation"),metadata:{},name:"EventCometPermalinkMoreActionsMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometPermalinkShareMenuQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5618688754917961"}),null);
__d("EventCometPermalinkShareMenuQuery$Parameters",["EventCometPermalinkShareMenuQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("EventCometPermalinkShareMenuQuery_facebookRelayOperation"),metadata:{},name:"EventCometPermalinkShareMenuQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("EventCometUniversalRSVPButton.react",["CometRelay","EventCometUniversalRSVPButton_event.graphql","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var c=a.colorWhenOff,e=a.colorWhenOn,f=a.event,g=a.iconIsHidden;g=g===void 0?!1:g;var j=a.isUnlabeledRect;j=j===void 0?!1:j;var k=a.labelIsHidden;k=k===void 0?!1:k;var l=a.onRSVPChange,m=a.showAndDisableWhenCantRSVP;m=m===void 0?!1:m;a=a.showMenuOnLoad;a=a===void 0?!1:a;f=d("CometRelay").useFragment(h!==void 0?h:h=b("EventCometUniversalRSVPButton_event.graphql"),f);return i.jsx(d("CometRelay").MatchContainer,{match:f.rsvp_button_renderer,props:{colorWhenOff:c,colorWhenOn:e,iconIsHidden:g,isUnlabeledRect:j,labelIsHidden:k,onRSVPChange:l,showAndDisableWhenCantRSVP:m,showMenuOnLoad:a}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useEventsRSVPPrivacyToast",["fbt","CometRelay","TetraIcon.react","TetraText.react","cometPushToast","gkx","react","useCometPrivacyIcon","useCometPrivacySelectorDialog","useCurrentDisplayMode","useEventsRSVPPrivacyToast_scope.graphql","useEventsRSVPPrivacyToast_toastScope.graphql"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j,k=d("react");e=d("react");var l=e.useEffect,m=e.useRef,n=e.useState;function a(a){a=d("CometRelay").useFragment(i!==void 0?i:i=b("useEventsRSVPPrivacyToast_scope.graphql"),a);var e=m(!1),f=n(!1),g=f[0],h=f[1];f=function(a){e.current=!0,h(a.withAction)};return a==null||!c("gkx")("1106435")?[null,f]:[k.jsx(o,{hasAction:g,isVisibleRef:e,scope:a}),f]}function o(a){var e=d("CometRelay").useFragment(j!==void 0?j:j=b("useEventsRSVPPrivacyToast_toastScope.graphql"),a.scope),f=c("useCometPrivacySelectorDialog")(e,{renderLocation:"COMET_EVENTS_RSVP"}),g=f[0],i=d("useCometPrivacyIcon").useCometPrivacyIconForMenuItem(e.icon_image),m=a.hasAction,n=a.isVisibleRef;f=c("useCurrentDisplayMode")();var o=f==="dark";l(function(){n.current===!0&&(d("cometPushToast").cometPushToast({action:m?{label:k.jsx(c("TetraText.react"),{color:"blueLink",type:"body3",children:h._("__JHASH__nwdouFwxIez__JHASH__")}),onPress:function(){g&&g()}}:void 0,message:k.jsx(c("TetraText.react"),{type:"meta3",children:h._("__JHASH__kqCN_wUJvQO__JHASH__",[h._param("privacy_group",k.jsxs(k.Fragment,{children:[k.jsx("span",{className:"x1emribx xsgj6o6",children:i!=null?k.jsx(c("TetraIcon.react"),{color:o?"black":"white",icon:i}):null}),e.label]}))])}),testid:"event-privacy-toast",truncateText:!1}),n.current=!1)},[m,i,o,n,n.current,e,g]);return null}g["default"]=a}),98);
__d("EventCometName.react",["CometEmojiTransform","CometEmoticonTransform","CometTextWithEntities.react","EventCometName_event.graphql","RelayHooks","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react");function a(a){var e=a.event;a=a.size;e=d("RelayHooks").useFragment(h!==void 0?h:h=b("EventCometName_event.graphql"),e);var f=e.is_canceled;e=e.name;if(e==null)return null;a=[c("CometEmoticonTransform")({size:a}),c("CometEmojiTransform")({size:a})];return i.jsx("span",{className:""+(f===!0?" xmqliwb":""),children:i.jsx(c("CometTextWithEntities.react"),{text:e,transforms:a})})}a.displayName=a.name+" [from "+f.id+"]";e=i.memo(a);g["default"]=e}),98);
__d("useEventCometImpressionLogger",["EventCometActionLoggerDeferred","react","usePartialViewImpression"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react").useCallback;function a(a,b,e){return c("usePartialViewImpression")({onImpressionStart:h(function(){b&&d("EventCometActionLoggerDeferred").log(a,b,e)},[a,b,e])})}g["default"]=a}),98);
__d("EventCometJoinMessageDialog.entrypoint",["EventCometJoinMessageDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.eventID;a=a.showSkipButton;return{extraProps:{showSkipButton:a},queries:{queryReference:{parameters:c("EventCometJoinMessageDialogQuery$Parameters"),variables:{eventID:b}}}}},root:c("JSResourceForInteraction")("EventCometJoinMessageDialog.react").__setRef("EventCometJoinMessageDialog.entrypoint")};g["default"]=a}),98);
__d("EventCometJoinMessageFromRoomDialog.entrypoint",["EventCometJoinFromRoomMessageDialogQuery$Parameters","JSResourceForInteraction"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var b=a.eventID,d=a.onAccept;a=a.showSkipButton;return{extraProps:{onAccept:d,showSkipButton:a},queries:{queryReference:{parameters:c("EventCometJoinFromRoomMessageDialogQuery$Parameters"),variables:{eventID:b}}}}},root:c("JSResourceForInteraction")("EventCometJoinFromRoomMessageDialog.react").__setRef("EventCometJoinMessageFromRoomDialog.entrypoint")};g["default"]=a}),98);
__d("useEventCometJoinMessageDialog",["EventCometActionContext","EventCometJoinMessageDialog.entrypoint","EventCometJoinMessageFromRoomDialog.entrypoint","react","requireDeferred","useCometEntryPointDialog"],(function(a,b,c,d,e,f,g){"use strict";b=d("react");var h=b.useCallback,i=b.useContext,j=c("requireDeferred")("EventCometActionLogger").__setRef("useEventCometJoinMessageDialog");function a(a){var b=a.dialogEntrypoint,d=a.eventID,e=a.groupID,f=e===void 0?null:e;e=a.isFromRoom;e=e===void 0?!1:e;var g=a.onAccept,k=a.showSkipButton;a=a.surface;var l=a===void 0?"permalink":a;a=c("useCometEntryPointDialog")(e?c("EventCometJoinMessageFromRoomDialog.entrypoint"):c("EventCometJoinMessageDialog.entrypoint"),{eventID:d,onAccept:g,showSkipButton:k});var m=a[0],n=i(c("EventCometActionContext"));e=h(function(){m({dialogEntrypoint:b},function(a){a==="dismissed"&&j.onReady(function(a){return a.log(d,{acontext:n,mechanism:b,surface:l,target:f!=null?"cm_join_sheet":"public_chat_join_sheet",type:"dismiss"})})})},[n,b,d,f,m,l]);return[e]}g["default"]=a}),98);
__d("EventCometPermalinkMoreActionsMenu.entrypoint",["EventCometPermalinkMoreActionsMenuQuery$Parameters","JSResourceForInteraction","WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var c=a.eventID;a=a.groupID;return{queries:{moreActionsMenuQueryReference:{parameters:b("EventCometPermalinkMoreActionsMenuQuery$Parameters"),variables:{eventID:c,groupID:a,scale:d("WebPixelRatio").get()}}}}},root:c("JSResourceForInteraction")("EventCometPermalinkMoreActionsMenu.react").__setRef("EventCometPermalinkMoreActionsMenu.entrypoint")};g["default"]=a}),98);
__d("EventCometPermalinkShareMenu.entrypoint",["EventCometPermalinkShareMenuQuery$Parameters","JSResourceForInteraction","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){var d=a.eventID;a=a.eventUrl;return{queries:{eventQueryReference:{parameters:b("EventCometPermalinkShareMenuQuery$Parameters"),variables:{epdSwitch:c("gkx")("1809052"),eventID:d,eventUrl:a,qe_optionalShareToPage:c("gkx")("546")}}}}},root:c("JSResourceForInteraction")("EventCometPermalinkShareMenu.react").__setRef("EventCometPermalinkShareMenu.entrypoint")};g["default"]=a}),98);
__d("EventCometPermalinkShareAction.react",["fbt","ix","CometEntryPointPopoverTrigger.react","CometLoggedOutCTAStrings","CometPopoverLoadingState.react","EventCometPermalinkShareMenu.entrypoint","TetraButton.react","fbicon","react","requireDeferred","useCAALoggedOutDialogWrapper","useIsLoggedOut"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=c("requireDeferred")("CometGroupsPathingFunnelLogger").__setRef("EventCometPermalinkShareAction.react");function a(a){var b=a.buttonProps,e=a.eventID,f=a.eventUrl,g=a.groupID,l=g===void 0?null:g;g=a.hideLabel;var m=g===void 0?!0:g;g=a.onShare;var n=c("useIsLoggedOut")(),o=c("useCAALoggedOutDialogWrapper")({title:c("CometLoggedOutCTAStrings").popupTitle}),p=(a=g)!=null?a:function(){};return j.jsx(c("CometEntryPointPopoverTrigger.react"),{align:"end",entryPointParams:{eventID:e,eventUrl:f},fallback:j.jsx(c("CometPopoverLoadingState.react"),{}),otherProps:{eventID:e},popoverEntryPoint:c("EventCometPermalinkShareMenu.entrypoint"),children:function(a,e,f,g,q,r){return j.jsx(c("TetraButton.react"),babelHelpers["extends"]({icon:d("fbicon")._(i("484394"),16),label:h._("__JHASH__gafV2pbfLZg__JHASH__"),labelIsHidden:m,onHoverIn:g,onHoverOut:q,onPress:function(){n?o():(e(),k.onReadyImmediately(function(a){return a.addEventSharedPoint(l,"EVENT_SHARE_FLOW_OPEN")}),p())},onPressIn:r,ref:a,type:"secondary"},b))}})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("EventCometRouteHooks",["CometRouteURL"],(function(a,b,c,d,e,f,g){"use strict";function a(){var a=d("CometRouteURL").useRouteURLParams();a=a.notif_id;return a!=null}g.useIsNotifRouteURL=a}),98);
__d("PublicEventCometRoutePropsContext",["react"],(function(a,b,c,d,e,f,g){"use strict";a=d("react");b=a.createContext(null);g["default"]=b}),98);
__d("XCometEventsCalendarControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/calendar/{?focus}/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometEventsManageControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/manage/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);
__d("XCometEventsNotificationsControllerRouteBuilder",["jsRouteBuilder"],(function(a,b,c,d,e,f,g){a=c("jsRouteBuilder")("/events/notifications/",Object.freeze({}),void 0);b=a;g["default"]=b}),98);