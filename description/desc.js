
function loadPackageInfo() {
	var urlSelfParts = window.location.href.split('desc.html?id=');
	var form_url = urlSelfParts[0]+"desc/"+urlSelfParts[1];
	$.ajax({
		url: form_url,
		type: "GET",
		cache: false,
		crossDomain: true,
		success: function (returnhtml) {
			if(decodeResp.desc_long) {
				$("#desc_long").html(decodeResp.desc_long_);
				$("#desc_long_").show();
			}
			if(decodeResp.compatitle) {
				$("#compatitle").html(decodeResp.compatitle);
				$("#compatitle_").show();
				var ios_ver = iOSVersion();
				if(ios_ver) {
					$("#your_ios").show();
					$("#your_ios").html("Current iOS: "+ios_ver);
				}
			}
			if(decodeResp.changelog) {
				$("#changelog").html(decodeResp.changelog);
				$("#changelog_").show();
			}
			if(decodeResp.screenshot) {
				$("#screenshot").html(decodeResp.screenshot);
				$("#screenshot_").show();
			}
        },
		error: function (err) {
			$("#errorInfo").html("Description unavailable for "+urlSelfParts[1]);
		}
	});
}
