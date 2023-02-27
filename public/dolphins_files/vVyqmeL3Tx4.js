;/*FB_PKG_DELIM*/

__d("CometVideoHomeCatalogRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5725476307558699"}),null);
__d("CometVideoHomeCatalogRootQuery$Parameters",["CometVideoHomeCatalogRootQuery_facebookRelayOperation","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeCatalogRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeCatalogRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("CometVideoHomeInjectedLiveVideoQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5875921079143180"}),null);
__d("CometVideoHomeInjectedLiveVideoQuery$Parameters",["CometVideoHomeInjectedLiveVideoQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeInjectedLiveVideoQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeInjectedLiveVideoQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeLiveRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5796535450395555"}),null);
__d("CometVideoHomeLiveRootQuery$Parameters",["CometVideoHomeLiveRootQuery_facebookRelayOperation","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeLiveRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeLiveRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("CometVideoHomeSavedRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="6326348164064370"}),null);
__d("CometVideoHomeSavedRootQuery$Parameters",["CometVideoHomeSavedRootQuery_facebookRelayOperation","StoriesRing.relayprovider"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeSavedRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeSavedRootQuery",operationKind:"query",text:null,providedVariables:{__relay_internal__pv__StoriesRingrelayprovider:b("StoriesRing.relayprovider")}}};e.exports=a}),null);
__d("CometVideoHomeHashtagDirectoryRootQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="7977218998958586"}),null);
__d("CometVideoHomeHashtagDirectoryRootQuery$Parameters",["CometVideoHomeHashtagDirectoryRootQuery_facebookRelayOperation"],(function(a,b,c,d,e,f){"use strict";a={kind:"PreloadableConcreteRequest",params:{id:b("CometVideoHomeHashtagDirectoryRootQuery_facebookRelayOperation"),metadata:{},name:"CometVideoHomeHashtagDirectoryRootQuery",operationKind:"query",text:null}};e.exports=a}),null);
__d("CometVideoHomeCatalogRoot.entrypoint",["CometVideoHomeCatalogRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeCatalogRoot.react").__setRef("CometVideoHomeCatalogRoot.entrypoint"),function(a){return{queries:{catalogRootQueryReference:{parameters:b("CometVideoHomeCatalogRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("CometVideoHomeLiveEntryPointVariables",["WebPixelRatio"],(function(a,b,c,d,e,f,g){"use strict";a={scale:d("WebPixelRatio").get()};b={feedLocation:"VIDEO_HOME_LIVE_TAB",isComet:!0};c=babelHelpers["extends"]({},a,{isComet:!0});e=babelHelpers["extends"]({},a,b);g.CometVideoHomeLiveHeroUFIEntryPointVariables=b;g.CometVideoHomeLiveHeroEntryPointVariables=c;g.CometVideoHomeLiveRootEntryPointVariables=e}),98);
__d("CometVideoHomeInjectedLiveVideo.entrypoint",["CometVideoHomeInjectedLiveVideoQuery$Parameters","CometVideoHomeLiveEntryPointVariables","JSResourceForInteraction","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){a=babelHelpers["extends"]({},d("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveHeroEntryPointVariables,d("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveHeroUFIEntryPointVariables,{isLoggedOut:c("gkx")("976093"),videoID:(a=a.routeProps.v)!=null?a:""});return{queries:{injectedLiveVideoQueryReference:{parameters:b("CometVideoHomeInjectedLiveVideoQuery$Parameters"),variables:a}}}},root:c("JSResourceForInteraction")("CometVideoHomeInjectedLiveVideo.react").__setRef("CometVideoHomeInjectedLiveVideo.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeLiveRootEntrypoint.entrypoint",["CometVideoHomeLiveEntryPointVariables","CometVideoHomeLiveRootQuery$Parameters","JSResourceForInteraction","gkx"],(function(a,b,c,d,e,f,g){"use strict";a={getPreloadProps:function(a){return{queries:{liveRootQueryReference:{parameters:b("CometVideoHomeLiveRootQuery$Parameters"),variables:babelHelpers["extends"]({},d("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveRootEntryPointVariables,{isLoggedOut:c("gkx")("976093"),trigger_data:{injected_video_id:a.routeProps.v}})}}}},root:c("JSResourceForInteraction")("CometVideoHomeLiveRoot.react").__setRef("CometVideoHomeLiveRootEntrypoint.entrypoint")};g["default"]=a}),98);
__d("CometVideoHomeLiveInjectionRoot.entrypoint",["CometVideoHomeInjectedLiveVideo.entrypoint","CometVideoHomeLiveRootEntrypoint.entrypoint","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeLiveInjectionRoot.react").__setRef("CometVideoHomeLiveInjectionRoot.entrypoint"),function(a){return{entryPoints:{injectedLiveVideoNestedEntryPoint:{entryPoint:b("CometVideoHomeInjectedLiveVideo.entrypoint"),entryPointParams:a},liveRootNestedEntryPoint:{entryPoint:b("CometVideoHomeLiveRootEntrypoint.entrypoint"),entryPointParams:a}},extraProps:{externalLogID:a.routeProps.externalLogID,t:a.routeProps.t,v:a.routeProps.v}}});g["default"]=a}),98);
__d("CometVideoHomeLiveRoot.entrypoint",["CometVideoHomeLiveEntryPointVariables","CometVideoHomeLiveRootQuery$Parameters","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint","gkx"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeLiveRoot.react").__setRef("CometVideoHomeLiveRoot.entrypoint"),function(a){return{queries:{liveRootQueryReference:{parameters:b("CometVideoHomeLiveRootQuery$Parameters"),variables:babelHelpers["extends"]({},d("CometVideoHomeLiveEntryPointVariables").CometVideoHomeLiveRootEntryPointVariables,{isLoggedOut:c("gkx")("976093"),trigger_data:{injected_video_id:null}})}}}});g["default"]=a}),98);
__d("CometVideoHomeSavedRoot.entrypoint",["CometVideoHomeSavedRootQuery$Parameters","JSResourceForInteraction","WebPixelRatio","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeSavedRoot.react").__setRef("CometVideoHomeSavedRoot.entrypoint"),function(a){return{queries:{savedRootQueryReference:{parameters:b("CometVideoHomeSavedRootQuery$Parameters"),variables:{scale:d("WebPixelRatio").get()}}}}});g["default"]=a}),98);
__d("CometVideoHomeHashtagDirectoryRoot.entrypoint",["CometVideoHomeHashtagDirectoryRootQuery$Parameters","JSResourceForInteraction","buildCometVideoHomeRoute.entrypoint"],(function(a,b,c,d,e,f,g){"use strict";a=c("buildCometVideoHomeRoute.entrypoint")(c("JSResourceForInteraction")("CometVideoHomeHashtagDirectoryRoot.react").__setRef("CometVideoHomeHashtagDirectoryRoot.entrypoint"),function(a){return{queries:{queryReference:{parameters:b("CometVideoHomeHashtagDirectoryRootQuery$Parameters"),variables:{}}}}});g["default"]=a}),98);