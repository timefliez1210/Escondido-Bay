;/*FB_PKG_DELIM*/

__d("CometHomeMegaMenuAllProductsQuery.graphql",["CometHomeMegaMenuAllProductsQuery_facebookRelayOperation","relay-runtime"],(function(a,b,c,d,e,f){"use strict";a=function(){var a=[{defaultValue:null,kind:"LocalArgument",name:"scale"},{defaultValue:!1,kind:"LocalArgument",name:"shouldFetchRecents"}],c={kind:"Variable",name:"scale",variableName:"scale"},d={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null},e={alias:null,args:[{kind:"Literal",name:"icon_size",value:"DP36"},c],concreteType:"Image",kind:"LinkedField",name:"bookmark_icon_image",plural:!1,selections:[d],storageKey:null},f={alias:null,args:null,kind:"ScalarField",name:"__typename",storageKey:null},g={alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},h={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},i={alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},j={alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'};c=[h,{alias:null,args:[{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"query_source",value:"COMET_MEGA_MENU"}],concreteType:"FolderBookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"nodes",plural:!0,selections:[g,h,j,{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},i,e,{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Literal",name:"icon_style",value:"CASPIAN"},c,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[d,{alias:null,args:null,kind:"ScalarField",name:"is_silhouette",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section",storageKey:null}],storageKey:null}],storageKey:'bookmarks(environment:"COMET",query_source:"COMET_MEGA_MENU")'},g];return{fragment:{argumentDefinitions:a,kind:"Fragment",metadata:null,name:"CometHomeMegaMenuAllProductsQuery",selections:[{kind:"RequiredField",field:{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{condition:"shouldFetchRecents",kind:"Condition",passingValue:!0,selections:[{args:null,kind:"FragmentSpread",name:"CometMegaMenuRecents_viewer"}]},{args:null,kind:"FragmentSpread",name:"useCometMegaMenuTypeaheadDataSource_viewer"}],storageKey:null},action:"THROW",path:"viewer"}],type:"Query",abstractKey:null},kind:"Request",operation:{argumentDefinitions:a,kind:"Operation",name:"CometHomeMegaMenuAllProductsQuery",selections:[{alias:null,args:null,concreteType:"Viewer",kind:"LinkedField",name:"viewer",plural:!1,selections:[{condition:"shouldFetchRecents",kind:"Condition",passingValue:!0,selections:[{alias:null,args:[{kind:"Literal",name:"first",value:5}],concreteType:"Bookmark",kind:"LinkedField",name:"comet_docked_tabs",plural:!0,selections:[e,{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"bookmarked_node",plural:!1,selections:[f,g],storageKey:null},h,i,j,g],storageKey:"comet_docked_tabs(first:5)"}]},{alias:"social",args:[{kind:"Literal",name:"folder",value:"SOCIAL"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"SOCIAL")'},{alias:"entertainment",args:[{kind:"Literal",name:"folder",value:"ENTERTAINMENT"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"ENTERTAINMENT")'},{alias:"shopping",args:[{kind:"Literal",name:"folder",value:"SHOPPING"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"SHOPPING")'},{alias:"personal",args:[{kind:"Literal",name:"folder",value:"PERSONAL"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"PERSONAL")'},{alias:"professional",args:[{kind:"Literal",name:"folder",value:"PROFESSIONAL"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"PROFESSIONAL")'},{alias:"communityResources",args:[{kind:"Literal",name:"folder",value:"COMMUNITY_RESOURCES"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"COMMUNITY_RESOURCES")'},{alias:"appsFromFacebook",args:[{kind:"Literal",name:"folder",value:"APPS_FROM_FACEBOOK"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:c,storageKey:'bookmark_folder(folder:"APPS_FROM_FACEBOOK")'},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[f,{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"profile_plus_should_hoist_professional_section_comet_mega_menu",storageKey:null}],type:"User",abstractKey:null},g],storageKey:null}],storageKey:null}]},params:{id:b("CometHomeMegaMenuAllProductsQuery_facebookRelayOperation"),metadata:{},name:"CometHomeMegaMenuAllProductsQuery",operationKind:"query",text:null}}}();b("relay-runtime").PreloadableQueryRegistry.set(a.params.id,a);e.exports=a}),null);
__d("useCometMegaMenuTypeaheadDataSource_viewer.graphql",[],(function(a,b,c,d,e,f){"use strict";a=function(){var a={alias:null,args:null,kind:"ScalarField",name:"name",storageKey:null},b={kind:"Variable",name:"scale",variableName:"scale"},c={alias:null,args:null,kind:"ScalarField",name:"uri",storageKey:null};a=[a,{alias:null,args:[{kind:"Literal",name:"environment",value:"COMET"},{kind:"Literal",name:"query_source",value:"COMET_MEGA_MENU"}],concreteType:"FolderBookmarksConnection",kind:"LinkedField",name:"bookmarks",plural:!1,selections:[{alias:null,args:null,concreteType:"Bookmark",kind:"LinkedField",name:"nodes",plural:!0,selections:[{alias:null,args:null,kind:"ScalarField",name:"id",storageKey:null},a,{alias:null,args:[{kind:"Literal",name:"site",value:"comet"}],kind:"ScalarField",name:"url",storageKey:'url(site:"comet")'},{alias:null,args:null,kind:"ScalarField",name:"description",storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"tracking",storageKey:null},{alias:null,args:[{kind:"Literal",name:"icon_size",value:"DP36"},b],concreteType:"Image",kind:"LinkedField",name:"bookmark_icon_image",plural:!1,selections:[c],storageKey:null},{alias:null,args:[{kind:"Literal",name:"height",value:36},{kind:"Literal",name:"icon_style",value:"CASPIAN"},b,{kind:"Literal",name:"width",value:36}],concreteType:"Image",kind:"LinkedField",name:"image",plural:!1,selections:[c,{alias:null,args:null,kind:"ScalarField",name:"is_silhouette",storageKey:null}],storageKey:null},{alias:null,args:null,kind:"ScalarField",name:"section",storageKey:null}],storageKey:null}],storageKey:'bookmarks(environment:"COMET",query_source:"COMET_MEGA_MENU")'}];return{argumentDefinitions:[{kind:"RootArgument",name:"scale"}],kind:"Fragment",metadata:null,name:"useCometMegaMenuTypeaheadDataSource_viewer",selections:[{alias:"social",args:[{kind:"Literal",name:"folder",value:"SOCIAL"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:a,storageKey:'bookmark_folder(folder:"SOCIAL")'},{alias:"entertainment",args:[{kind:"Literal",name:"folder",value:"ENTERTAINMENT"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:a,storageKey:'bookmark_folder(folder:"ENTERTAINMENT")'},{alias:"shopping",args:[{kind:"Literal",name:"folder",value:"SHOPPING"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:a,storageKey:'bookmark_folder(folder:"SHOPPING")'},{alias:"personal",args:[{kind:"Literal",name:"folder",value:"PERSONAL"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:a,storageKey:'bookmark_folder(folder:"PERSONAL")'},{alias:"professional",args:[{kind:"Literal",name:"folder",value:"PROFESSIONAL"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:a,storageKey:'bookmark_folder(folder:"PROFESSIONAL")'},{alias:"communityResources",args:[{kind:"Literal",name:"folder",value:"COMMUNITY_RESOURCES"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:a,storageKey:'bookmark_folder(folder:"COMMUNITY_RESOURCES")'},{alias:"appsFromFacebook",args:[{kind:"Literal",name:"folder",value:"APPS_FROM_FACEBOOK"}],concreteType:"FolderBookmark",kind:"LinkedField",name:"bookmark_folder",plural:!1,selections:a,storageKey:'bookmark_folder(folder:"APPS_FROM_FACEBOOK")'},{alias:null,args:null,concreteType:null,kind:"LinkedField",name:"actor",plural:!1,selections:[{kind:"InlineFragment",selections:[{alias:null,args:null,kind:"ScalarField",name:"profile_plus_should_hoist_professional_section_comet_mega_menu",storageKey:null}],type:"User",abstractKey:null}],storageKey:null}],type:"Viewer",abstractKey:null}}();e.exports=a}),null);
__d("CometMegaMenuTypeaheadInputRoundedStrategy.react",["ix","CometColumnItem.react","CometTypeaheadInputRoundedStrategy.react","TetraIcon.react","fbicon","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a,b){return i.jsx(c("CometColumnItem.react"),{paddingHorizontal:16,paddingVertical:16,children:i.jsx(c("CometTypeaheadInputRoundedStrategy.react"),babelHelpers["extends"]({},a,{inputExtraProps:{icon:i.jsx(c("TetraIcon.react"),{color:"tertiary",icon:d("fbicon")._(h("491282"),16)})},ref:b}))})}a.displayName=a.name+" [from "+f.id+"]";b=i.forwardRef(a);g["default"]=b}),98);
__d("CometMegaMenuNullState.react",["fbt","CometAccessibilityAnnouncement.react","NullStateNoResults","TetraNullState.react","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(){return i.jsx(c("CometAccessibilityAnnouncement.react"),{isVisible:!0,children:i.jsx(c("TetraNullState.react"),{body:h._("__JHASH__nQYT3yd21W0__JHASH__"),headline:h._("__JHASH__JCiz4z2djIu__JHASH__"),icon:c("NullStateNoResults")})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("logMegaMenuClick",["requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=c("requireDeferred")("WebBookmarkClickFalcoEvent").__setRef("logMegaMenuClick");function a(a){var b=a.index,c=a.pa;a=a.tracking;i({index:b,pa:c,surface:"comet_mega_menu",tracking:a})}function b(a){var b=a.index,c=a.pa;a=a.tracking;i({index:b,pa:c,surface:"comet_mega_menu_recent",tracking:a})}function i(a){var b=a.index,c=a.pa,d=a.surface,e=a.tracking;h.onReady(function(a){var f=b.toString();a.log(function(){return{interface_override:"comet_www",item_rank:f,pa:c,surface:d,tracking_data:e}})})}g.logMegaMenuClick=a;g.logMegaMenuRecentClick=b}),98);
__d("CometMegaMenuTypeaheadListViewItem.react",["CometPassiveGetRouterStateContext","CometProductAttribution","ConstUriUtils","TetraAccessoryListCell.react","isFacebookSVDomainURI","logMegaMenuClick","qex","react","useBookmarkFalcoFullViewLogger"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=d("react").useContext;function a(a){var b=a.entry,e=a.isActive,f=a.onPressEntry;a.queryString;a=b.label;var g=b.rawData,j=g.addOnPrimary,k=g.body,l=g.index,m=g.tracking;g=g.url;var n=c("useBookmarkFalcoFullViewLogger")(m,l,null,"comet_mega_menu"),o=i(c("CometPassiveGetRouterStateContext")),p=g!=null?d("ConstUriUtils").getUri(g):void 0;p=p&&c("isFacebookSVDomainURI")(p)?!1:(p=c("qex")._("1015"))!=null?p:!1;return h.jsx(c("TetraAccessoryListCell.react"),{addOnPrimary:j,body:k,headline:a,level:4,linkProps:{productAttribution:{tap_point:"mega_menu"},target:p?"_blank":void 0,traceParams:{navigation_source:"mega_menu_click"},url:g},onPress:function(a){f&&f(b,a),m!=null&&d("logMegaMenuClick").logMegaMenuClick({index:l,pa:d("CometProductAttribution").getMinifiedTopMostRouteProductAttribution(o),tracking:m})},paddingHorizontal:0,ref:n,selected:e})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMegaMenuTypeaheadListViewStrategy.react",["CometColumn.react","CometColumnItem.react","CometMegaMenuTypeaheadListViewItem.react","CometTypeaheadViewList.react","CometUnitHeader.react","react","requireDeferred"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react"),i=c("requireDeferred")("BizkitWebRedirectFalcoEvent").__setRef("CometMegaMenuTypeaheadListViewStrategy.react");function a(a){var b=a.ariaProps,d=a.entries,e=a.highlightedEntry,f=a.onHighlightEntry,g=a.onPressEntry,j=a.queryString,k=new Map();d.forEach(function(a){var b=a.rawData.folderName,c=k.get(b);c!=null?c.push(a):k.set(b,[a])});var l=function(a,b){i.onReady(function(a){a.log(function(){return{entrypoint:"fb_bookmark"}})}),g(a,b)},m=[];k.forEach(function(a,d){var i=m.length>0;m.push(h.jsxs(c("CometColumn.react"),{paddingHorizontal:8,paddingTop:0,paddingVertical:20,children:[h.jsx(c("CometColumnItem.react"),{paddingTop:0,paddingVertical:8,children:h.jsx(c("CometUnitHeader.react"),{hasTopDivider:i,headline:d,level:3,paddingHorizontal:8,paddingTop:i?20:8})}),h.jsx(c("CometColumnItem.react"),{paddingTop:0,children:h.jsx(c("CometTypeaheadViewList.react"),{ariaProps:b,entries:a,highlightedEntry:e,children:function(a){var b=a.entry,d=a.isActive;a=a.itemRole;return h.jsx(c("CometMegaMenuTypeaheadListViewItem.react"),{entry:b,isActive:d,onHighlightEntry:f,onPressEntry:b.label==="Meta Business Suite"?l:g,queryString:j,role:a},b.key)}})})]},d))});return m}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometMegaMenuViewStrategy.react",["CometMegaMenuListSectionsLoadingState.react","CometMegaMenuNullState.react","CometMegaMenuTypeaheadListViewItem.react","CometMegaMenuTypeaheadListViewStrategy.react","CometScrollableArea.react","react","useCometInternalTypeaheadState","useCometTypeaheadKeyboardForScrollableArea"],(function(a,b,c,d,e,f,g){"use strict";var h=d("react");function a(a){var b=a.entries;a.isLoading;var d=a.queryString;a=babelHelpers.objectWithoutPropertiesLoose(a,["entries","isLoading","queryString"]);var e=c("useCometInternalTypeaheadState")();e=e.highlightedEntry;var f=c("useCometTypeaheadKeyboardForScrollableArea")(e);if(b.length===0)if(d.length>0)return h.jsx("div",{className:"x78zum5 x5yr21d",children:h.jsx(c("CometMegaMenuNullState.react"),{})});else if(d.length===0)return h.jsx(c("CometMegaMenuListSectionsLoadingState.react"),{});return h.jsx(c("CometScrollableArea.react"),{horizontal:!1,ref:f,children:h.jsx(c("CometMegaMenuTypeaheadListViewStrategy.react"),babelHelpers["extends"]({},a,{entries:b,highlightedEntry:e,isLoading:!1,queryString:d,viewItemStrategyRenderer:c("CometMegaMenuTypeaheadListViewItem.react")}))})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("useCometMegaMenuTypeaheadDataSource",["ix","CometBookmarksAddOnUtils","CometRelay","ConstUriUtils","IconSource","baseTypeaheadContainsMatchBuilder","gkx","useCometMegaMenuTypeaheadDataSource_viewer.graphql","useCometTypeaheadStaticDataSource","useStable"],(function(a,b,c,d,e,f,g,h){"use strict";var i,j="mega_menu",k=i!==void 0?i:i=b("useCometMegaMenuTypeaheadDataSource_viewer.graphql");function l(a){var b;b=(a==null?void 0:(b=a.actor)==null?void 0:b.profile_plus_should_hoist_professional_section_comet_mega_menu)===!0;b=[b?a==null?void 0:a.professional:null,a==null?void 0:a.social,a==null?void 0:a.entertainment,a==null?void 0:a.shopping,a==null?void 0:a.personal,b?null:a==null?void 0:a.professional,a==null?void 0:a.communityResources,a==null?void 0:a.appsFromFacebook].filter(Boolean);var e=new(c("IconSource"))("FB",h("192564"),36);return b.map(function(a){var b;b=a==null?void 0:(b=a.bookmarks)==null?void 0:b.nodes;var f=a==null?void 0:a.name;return b==null||f==null?null:b.map(function(a,b){var g=a.bookmark_icon_image,h=a.description,i=a.id,k=a.image,l=a.name,m=a.section,n=a.tracking;a=a.url;g=d("CometBookmarksAddOnUtils").getBookmarkAddOnStart(c("gkx")("3088")&&n!=null&&JSON.parse(n).bmid===140332009231?e.src:g==null?void 0:g.uri,k==null?void 0:k.uri,k==null?void 0:k.is_silhouette,m);return i==null||l==null||g==null?null:{key:i,label:l,rawData:{addOnPrimary:g,body:h,folderName:f,index:b,tracking:n,url:a!=null&&a.includes("/watch/")?(k=d("ConstUriUtils").getUri(a))==null?void 0:(m=k.addQueryParam("ref",j))==null?void 0:m.toString():a},type:"entry"}}).filter(Boolean).flat()}).filter(Boolean).flat()}function a(a){var b=d("CometRelay").useFragment(k,a);a=c("useStable")(function(){return l(b)});return c("useCometTypeaheadStaticDataSource")({entries:a,limit:Number.MAX_VALUE,matchBuilder:c("baseTypeaheadContainsMatchBuilder")})}g["default"]=a}),98);
__d("CometMegaMenuTypeahead.react",["fbt","BaseTypeahead.react","CometMegaMenuTypeaheadInputRoundedStrategy.react","CometMegaMenuViewStrategy.react","CometTypeaheadLayoutInlineStrategy.react","react","useCometMegaMenuTypeaheadDataSource","useCometTypeaheadNavigate"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j=d("react").useCallback;function a(a){var b=a.megaMenuTypeaheadFragmentRef,d=a.onChange,e=a.onPressEntry;a=a.queryString;b=c("useCometMegaMenuTypeaheadDataSource")(b);var f=c("useCometTypeaheadNavigate")({tapPoint:"tap_mega_menu_search_bar"}),g=j(function(a){var b=a.rawData.url;f(b);e&&e(a)},[f,e]);return i.jsx(c("BaseTypeahead.react"),{dataSource:b,inputStrategyRenderer:c("CometMegaMenuTypeaheadInputRoundedStrategy.react"),layoutStrategyRenderer:c("CometTypeaheadLayoutInlineStrategy.react"),onChange:d,onPressEntry:g,placeholder:h._("__JHASH__-FV69wnGAnd__JHASH__"),queryString:a,viewStrategyRenderer:c("CometMegaMenuViewStrategy.react")})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeMegaMenuAllProducts.react",["CometCard.react","CometColumn.react","CometColumnItem.react","CometErrorBoundary.react","CometGlobalPanelGating","CometHomeMegaMenuAllProductsQuery.graphql","CometMegaMenuTypeahead.react","CometRelay","cr:3768","react"],(function(a,b,c,d,e,f,g){"use strict";var h,i=d("react"),j=d("react").useState,k={cardWidth:{width:"x1cvmir6",$$css:!0},minHeight:{minHeight:"xpt8i6g",$$css:!0}};function a(a){var e=a.onClose;a=a.queryRef;var f=j(""),g=f[0];f=f[1];a=d("CometRelay").usePreloadedQuery(h!==void 0?h:h=b("CometHomeMegaMenuAllProductsQuery.graphql"),a);a=a.viewer;return i.jsx(c("CometCard.react"),{background:"white",dropShadow:1,xstyle:k.minHeight,children:i.jsxs(c("CometColumn.react"),{xstyle:k.cardWidth,children:[b("cr:3768")!=null&&i.jsx(c("CometColumnItem.react"),{hidden:d("CometGlobalPanelGating").isGlobalPanelHidden(),children:i.jsx(c("CometErrorBoundary.react"),{children:i.jsx(b("cr:3768"),{onPress:e,viewer:a})})}),i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("CometMegaMenuTypeahead.react"),{megaMenuTypeaheadFragmentRef:a,onChange:f,onPressEntry:e,queryString:g})})]})})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeMegaMenuCreateMenu.react",["fbt","CometCard.react","CometHomeCreateMenuContent.react","CometRow.react","CometRowItem.react","TetraText.react","react","useCreateMenuComposerDialog"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react");function a(a){a=a.onClose;var b=c("useCreateMenuComposerDialog")();b=b[0];return i.jsxs(c("CometCard.react"),{background:"white",dropShadow:1,children:[i.jsx(c("CometRow.react"),{paddingVertical:16,children:i.jsx(c("CometRowItem.react"),{children:i.jsx(c("TetraText.react"),{type:"headlineEmphasized2",children:h._("__JHASH__oBohHykhRA9__JHASH__")})})}),i.jsx(c("CometHomeCreateMenuContent.react"),{hideBody:!0,onClose:a,showComposerDialog:b,tapPoint:"mega_menu"})]})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("CometHomeMegaMenuRoot.react",["fbt","CometColumn.react","CometColumnItem.react","CometDirectionalDockingView.react","CometGlobalPanelGating","CometHomeMegaMenuAllProducts.react","CometHomeMegaMenuCreateMenu.react","CometResponsiveColumns.react","CometScrollView.react","CometTopNavListDropdown.react","TetraText.react","cr:3907","react"],(function(a,b,c,d,e,f,g,h){"use strict";var i=d("react"),j={createMenu:{maxWidth:"x1ncir08",overflowAnchor:"x1xzczws",$$css:!0},offsetWithGlobalPanel:{paddingTop:"x9desvi",$$css:!0},scrollView:{height:"x101xi1x",paddingBottom:"x1l90r2v",paddingStart:"x1swvt13",paddingEnd:"x1pi30zi",$$css:!0}};function a(a){var e=a.props.onClose;a=a.queries;a=a.megaMenuTypeaheadQueryRef;a=i.jsxs(c("CometTopNavListDropdown.react").Card,{background:"card-flat",useFullWidth:!0,useMaxHeight:!0,children:[i.jsx(c("CometColumn.react"),{paddingHorizontal:16,paddingVertical:16,xstyle:d("CometGlobalPanelGating").isGlobalPanelVisible()&&j.offsetWithGlobalPanel,children:i.jsx(c("CometColumnItem.react"),{children:i.jsx(c("TetraText.react"),{type:"headlineEmphasized1",children:h._("__JHASH__jgQOR0hxBFA__JHASH__")})})}),i.jsx(c("CometScrollView.react"),{showsHorizontalScrollIndicator:!1,xstyle:j.scrollView,children:i.jsxs(d("CometResponsiveColumns.react").Container,{children:[i.jsx(d("CometResponsiveColumns.react").Column,{children:i.jsx(c("CometHomeMegaMenuAllProducts.react"),{onClose:e,queryRef:a})}),i.jsx(d("CometResponsiveColumns.react").Column,{xstyle:j.createMenu,children:i.jsx(c("CometDirectionalDockingView.react"),{bottom:16,bottomStickyAdjustment_DO_NOT_USE:-16,top:0,children:i.jsx(c("CometHomeMegaMenuCreateMenu.react"),{onClose:e})})})]})})]});if(b("cr:3907")!=null&&d("CometGlobalPanelGating").isGlobalPanelVisible())return i.jsx(b("cr:3907"),{children:a});else return i.jsx(c("CometTopNavListDropdown.react"),{label:h._("__JHASH__jgQOR0hxBFA__JHASH__"),name:"MegaMenu",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);