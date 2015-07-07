// Copyright (c) 2012 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

var names = [].slice.apply(document.querySelectorAll('span._2akq')).map(function(element){
	return element.textContent;
});

var mapping = {
	"Allen Wang" : "一眠大一村",
	"C.m. Tseng" : "Iloveboo",
	"Catherine Huang" : "weberlee999",
	"Ching-Yao Su" : "歐夫迪曼",
	"Dan Lighting" : "Hsuan Lighting",
	"Davidson Chen" : "Davidson",
	"Hero Chen" : "Humanhero",
	"Holisong Hsu" : "holisong",
	"Howard Chen" : "Novrain1990",	
	"Iying 'Orad" : "minty",
	"Jian-Cheng Wu": "uuuu",
	"Jim Hsiao" : "小良村",
	"Jim Lin" : "Jimmy",
	"Kenny Chen" : "Donny",
	"Koromiko Neo" : "Neo",
	"Maxis Kao" : "Maxis",
	"Meng Han Chuang" : "liverpool",
	"Scott Hsiao" : "scott1014",
	"Se-yen Liang" : "mei village",
	"Shu Ming Yeh" : "凍滋凍滋村",
	"Szumin Yang" : "sazpurmiiln",
	"Timetoeat Tseng" : "timetoeat.tw",
	"Wayne Huang" : "Who",
	"Wei-Fan Chen" : "企鵝村",
	"Wesley Huang" : "Wesley",
	"Wu Ping Sheng" : "WIDEFIRE",
	"Yeni Chen" : "minii",	
	"Yezhi Chen" : "Yezhi",
	"Yi Chang Chang" : "Yicc",
	"Yu-Hsun Hung" : "盎格魯薩克勳",
	"劉學瑜" : "brad",
	"劉晉榮" : "cjliu1984",
	"康博" : "NTHU-CIB",
	"廖維楷" : "烘焙薯香",
	"張正朋" : "peter pumbaa",
	"張祐維" : "蓋亞",
	"方品浩" : "TomatoHihi",
	"李輝輝" : "輝輝王國",
	"林和儁" : "426共產必亡426",
	"林建谷" : "A谷",
	"楊皓文" : "Dirhamfighter",
	"王信硯" : "pf",
	"蔡運耀" : "Balgon",
	"謝泓廷" : "hong-ting",
	"鄒權煒" : "benson",
	"鄭仰麟" : "賈斯特福爾",
	"陳嬿伊" : "minii",
	"陳心昊" : "Novrain1990",
	"陳韋帆" : "企鵝村",
	"顏孜羲" : "joe",
	"黃品惇" : "小村莊",
	"黃小羊" : "buubble",
	"吳秉昇" : "WIDEFIRE"
}

// english version
var members = [].slice.apply(document.querySelectorAll('span._2akq'));

// chinese version
if(members.length === 0) {
	members = [].slice.apply(document.querySelectorAll('div.uiProfileBlockContent ._6a .fsl a'));
}

members.forEach(function (member, idx) {
	var facebookName = member.textContent;
	if ( mapping.hasOwnProperty(facebookName) ) {
		member.textContent = mapping[facebookName];
	}
});
