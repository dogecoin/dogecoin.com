function buttons(hash, buttonclick, buttonunclick_1, buttonunclick_2, buttonunclick_3) {
	if(window.location.hash === hash) {
		$(buttonclick).addClass("selected");
		$(buttonunclick_1).removeClass("selected");
		$(buttonunclick_2).removeClass("selected");
		$(buttonunclick_3).removeClass("selected");
	}
}

function slide_effect(hash, show) {
	if(window.location.hash === hash) {
		$(".tutorial_slide:not(show)").hide('slide', {direction: 'right'}, 500).promise().done(function() {
			$(show).show('slide', {direction: 'left'}, 500);
		});
	}
}

function os_slide_effect(hash, show) {
	if(window.location.hash === hash) {
		$(".buttons").removeClass("selected");
		$(function () {
			$(".tutorial_slide").hide('slide', {direction: 'right'}, 500);
			$(".os_slide:not(show)").hide('slide', {direction: 'right'}, 500).promise().done(function() {
				$(show).show('slide', {direction: 'left'}, 500);
			});
		});
	}
}

// Selection Buttons
window.onhashchange = function() {
/* ### Device Selection ### */
	// Desktop Button
	buttons("#desktop-wallet", "#desktop-button", "#phone-button", "#online-button", "#paper-button");
	os_slide_effect("#desktop-wallet", "#select-desktop-os");

	// Phone Button
	buttons("#phone-wallet", "#phone-button", "#desktop-button", "#online-button", "#paper-button");
	os_slide_effect("#phone-wallet", "#select-mobile-os");

	// Online Button
	buttons("#online-wallet", "#online-button", "#desktop-button", "#phone-button", "#paper-button");
	os_slide_effect("#online-wallet", "#select-online-os");
    
	// Paper Button
	buttons("#paper-wallet", "#paper-button", "#desktop-button", "#phone-button", "#online-button");
	os_slide_effect("#paper-wallet", "#select-paper-os");

/* ### OS Selection ## */
// Desktop OS Selection
	// Windows Button
	buttons("#windows-desktop-os", "#windows-desktop-os-button", "#apple-desktop-os-button", "#linux-desktop-os-button");
	slide_effect("#windows-desktop-os", "#windows-desktop-os");

	// Apple Button
	buttons("#apple-desktop-os", "#apple-desktop-os-button", "#windows-desktop-os-button", "#linux-desktop-os-button");
	slide_effect("#apple-desktop-os", "#apple-desktop-os");

	// Linux Button
	buttons("#linux-desktop-os", "#linux-desktop-os-button", "#windows-desktop-os-button", "#apple-desktop-os-button");
	slide_effect("#linux-desktop-os", "#linux-desktop-os");
		
// Phone OS Selection
	// Android Button
	buttons("#android-mobile-os", "#android-mobile-os-button", "#apple-mobile-os-button", undefined);
	slide_effect("#android-mobile-os", "#android-mobile-os");
	
	// iOS Button
	buttons("#apple-mobile-os", "#apple-mobile-os-button", "#android-mobile-os-button", undefined);
	slide_effect("#apple-mobile-os", "#apple-mobile-os");
	
// Online Wallet Selection
	// DogeAPI Button
	buttons("#dogeapi-online-os", "#dogeapi-online-os-button", "#moolah-online-os-button", undefined);
	slide_effect("#dogeapi-online-os", "#dogeapi-online-os");
	
	// Moolah Button
	buttons("#moolah-online-os", "#moolah-online-os-button", "#dogeapi-online-os-button", undefined);
	slide_effect("#moolah-online-os", "#moolah-online-os");
	
// Paper Wallet Selection
	// Walletgenerator Button
	buttons("#walletgenerator-paper-os", "#walletgenerator-paper-os-button", undefined, undefined);
	slide_effect("#walletgenerator-paper-os", "#walletgenerator-paper-os");
};