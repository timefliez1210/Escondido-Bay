;/*FB_PKG_DELIM*/

__d("VideoPlayerHTML5ApiWebVttState",["Bootloader","unrecoverableViolation"],(function(a,b,c,d,e,f,g){"use strict";a=function(){function a(a){var b=this,d=a.onReady,e=a.onCaptionsLoaded,f=a.captionsDisplay;this.$1=null;this.source=null;this.captionsDisplay=null;this.$1=c("Bootloader").loadModules(["VideoPlayerWebVttCaptionsSource"],function(a){a=new a({onCaptionsLoaded:e,onCaptionsChanged:function(a,c){b.captionsDisplay&&b.captionsDisplay.handleCaptionsChanged(a,c)}});b.source=a;b.captionsDisplay=f;d(b)},"VideoPlayerHTML5ApiWebVttState")}var b=a.prototype;b.loadFromUrl=function(a){var b=this.source;if(!b)throw c("unrecoverableViolation")("[VideoPlayerHTML5ApiWebVttState] Called loadFromUrl when not ready; call from onReady callback.","video_captions");b.loadFromUrl(a)};b.getCurrentScreenRepresentation=function(){return this.source?this.source.getCurrentScreenRepresentation():null};b.destroy=function(){this.$1&&(this.$1.remove(),this.$1=null),this.captionsDisplay&&(this.captionsDisplay.destroy(),this.captionsDisplay=null),this.source&&(this.source.destroy(),this.source=null)};return a}();g["default"]=a}),98);
__d("GroupsCometSocialLearningLeftRailUnitExpandedQuery_facebookRelayOperation",[],(function(a,b,c,d,e,f){e.exports="5614046205371048"}),null);