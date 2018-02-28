for(var i = 0; i < 9; i++) { var scriptId = 'u' + i; window[scriptId] = document.getElementById(scriptId); }

$axure.eventManager.pageLoad(
function (e) {

});
document.getElementById('u4_img').tabIndex = 0;

u4.style.cursor = 'pointer';
$axure.eventManager.click('u4', function(e) {

if (true) {

	self.location.href=$axure.globalVariableProvider.getLinkUrl('消息列表页.html');

}
});
gv_vAlignTable['u5'] = 'center';gv_vAlignTable['u6'] = 'top';gv_vAlignTable['u7'] = 'top';gv_vAlignTable['u8'] = 'top';gv_vAlignTable['u1'] = 'center';gv_vAlignTable['u3'] = 'center';