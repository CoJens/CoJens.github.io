//===============================================================================
// master2015hp_meTranslate.js
// by master2015hp
// 2021.12.23
//===============================================================================
/*:
 * @plugindesc easiest & cleanest way to localize your game
 * @author master2015hp
 *
 * @param file name
 * @desc name of file that will store reference data
 * @type string
 * @default MeTranslate
 *
 * @param file name 2
 * @desc name of file that will store language packs
 * @type string
 * @default MeLanguages
 *
 * @param wait for loading data
 * @desc frames to wait for loading data, should be >=5 if you have big maps or complex events
 * @type number
 * @default 3
 *
 * @param language window height offset
 * @desc bigger it is, smaller the window will be
 * @type number
 * @default 200
 *
 * @param import data
 * @desc turn ON this mode to translate the game. Export is DISABLED if this option is ON
 * @type select
 * @default false
 * @option OFF
 * @value false
 * @option ON
 * @value true
 *
 * @param export data
 * @desc turn on this to export game data to text files
 * @type select
 * @default false
 * @option OFF
 * @value false
 * @option ON
 * @value true
 *
 * @param translate commands
 * @desc translate default commands' name or not
 * @type select
 * @default false
 * @option OFF
 * @value false
 * @option ON
 * @value true
 *
 * @param translate skill desc
 * @desc translate skills' description
 * @type select
 * @default false
 * @option OFF
 * @value false
 * @option ON
 * @value true
 *
 * @param special encode list
 * @desc specify how to encode message codes yourself
 * @type string[]
 * @default ["\\\\\\\\c:111222111","\\\\\\\\n:111223111","\\\\\\\\v:111224111","\\]:111225111","\\[:111226111"]
 *
 * @param autotranslating format
 * @desc turn ON if you plan to auto translate
 * @type select
 * @default false
 * @option OFF
 * @value false
 * @option ON
 * @value true
 * 
 * @param language options
 * @desc list of languages which will be displayed in Game Option
 * @type struct<langopSetting>[]
 * @default ["{\"name\":\"default\",\"sysImg\":\"mtEng\"}","{\"name\":\"Vietnam\",\"sysImg\":\"mtVietnam\"}"]
 *
 * @help
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
░▒░░▒▒▒░░░▒▒░░░░▒▒▒▒░░▒▒▒░░▒░░░░░▒▒░░░░
░▒░▒▒░░░░░▒░▒░░░▒░░▒▒░░░▒▒░▒░░░░░▒░▒░░░
░▒░▒░░░░░▒▒░▒░░░▒░░░▒░░░░▒░▒░░░░▒▒░▒░░░
░▒░▒▒░░░░▒░░░▒░░▒░░▒▒░░░░▒░▒░░░░▒░░░▒░░
░▒░░▒▒░░░▒▒▒▒▒░░▒▒▒▒░░▒▒▒▒░▒░░░░▒▒▒▒▒░░
░▒░░░░▒░▒▒░░░▒░░▒░░▒▒░░░░▒░▒░░░▒▒░░░▒░░
░▒░░░░▒░▒░░░░▒▒░▒░░▒▒░░░░▒░▒░░░▒░░░░▒▒░
░▒░▒▒▒░░▒░░░░░▒░▒▒▒▒░░▒▒▒░░▒▒▒░▒░░░░░▒░
░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░

 * -------------------------------------------------------------------------------
 * ✧ REQUIRE
 * ===============================================================================
 * - master2015hp_myCore.js
 * - MANUALLY CONFIGURATION
 * - install below Yep_CallEvent (if available)
 *
 * -------------------------------------------------------------------------------
 * ✧ SUMMARY
 * ===============================================================================
 * - By default, after the 1st time that you played test your project with
 * -- Export Data option turned ON, all dialogues in game will be export into
 * -- MeTranslate.json and MeLanguages.json (located in \data folder)
 * - MeTranslate.json is the file that stores origin text and extra info that
 * -- will be used for reference, do not modify the file.
 * - MeLanguages.json stores all available language packs for the game.
 *
 * ►SCRIPT CALL
 * DataManager._MTselectedLang
 * - Get the name of current selected Language.
 * - The name is from your setting within Language Options parameter config
 * 
 * -------------------------------------------------------------------------------
 * ✧ TERMS OF USE
 * ===============================================================================
 * - You must buy a license before using this plugin for any commercial purposes
 * - License must be obtained BEFORE you start selling your game.
 * - NOTE: Games with micro-transactions and/or advertising incomes are considred
 *   commercial use of this plugin!
 * - Edits are allowed as long as "Terms of Use" is not changed in any way.
 *
 * DO NOT COPY, RESELL, REDISTRIBUTE, REPUBLISH OR CLAIM ANY PIECE OF
 * THIS SOFTWARE AS YOUR OWN!
 * Copyright (c) 2021, Isabella Ava
 * Contact me at gmail: master2015hp
 *
 * -------------------------------------------------------------------------------
 * Version History
 * ===============================================================================
 * 2021/12/15 - now there are 2 mode of formating Auto/ Manual
 * 2021/10/07 - fixed minor issue
 * 2021/06/21 v1.8.0 - Added Skill Description Translation
 * 2021/06/21 v1.7.0 - Compatible with old versions
 * 2021/06/09 v1.6.0 - Patched YEP_CallEvent && fixed pre-load issues
 * 2021/06/01 v1.5.0 - Added terms translation
 * 2021/05/02 v1.4.0 - Optimized the script's performance
 * 2021/05/01 v1.3.0 - Translation now check by text data
 * 2021/04/30 v1.2.0 - Translate comments/ fixed an IMPORTANT bug
 * 2021/03/31 v1.0.0 - Initial release
 *
 */
 /*~struct~langopSetting:
@param name
@text language name
@desc name of this language, see Manual for more info

@param sysImg
@text language image
@desc image file represent for this language
@type file
@require 1
@dir img/system/
*/
/*
TODO:
after re-enter the map after closed Menu, text revert to old mapdata
*/
var master2015hp = master2015hp || {};
master2015hp.translator = master2015hp.translator || {};
master2015hp.translator.a = PluginManager.parameters('master2015hp_meTranslate');
// Number(master2015hp.upEq.parameters['item icon zoom rate']) || 5;
master2015hp.translator.a.fileName = master2015hp.translator.a['file name'] || 'MeTranslate';
master2015hp.translator.a.fileName2 = master2015hp.translator.a['file name 2'] || 'MeLanguages';
master2015hp.translator.a.importData = master2015hp.translator.a['import data'] == 'true';
master2015hp.translator.a.exportData = master2015hp.translator.a['export data'] == 'true';
master2015hp.translator.a.translateCommands = master2015hp.translator.a['translate commands'] == 'true';
master2015hp.translator.a.translateSkill = master2015hp.translator.a['translate skill desc'] == 'true';
// master2015hp.translator.a.correctMessageCodes = master2015hp.translator.a['correct message code'] == 'true';
// master2015hp.translator.a.encodeOutput = master2015hp.translator.a['encode output'] == 'true';
master2015hp.translator.a.langOpt = master2015hp.mCore.JSONparse(master2015hp.translator.a['language options']) || [];
master2015hp.translator.a.waitLoadData = Number(master2015hp.translator.a['wait for loading data']) || 3;
master2015hp.translator.a.langHeightOff = Number(master2015hp.translator.a['language window height offset']) || 200;
//translate skill description from this id forward
master2015hp.translator.translateSkillDescFromId = 1;
master2015hp.translator.autoTranslate = master2015hp.translator.a['autotranslating format'] == 'true';
master2015hp.translator.specialEncode = JSON.parse(master2015hp.translator.a['special encode list']);
/*[
	{'name': 'Eng', 'sysImg': 'mtEng'},
	{'name': 'France', 'sysImg': 'mtFrance'},
	{'name': 'Vietnam', 'sysImg': 'mtVietnam'},
	{'name': 'Spanish'}
];*/

master2015hp.translator.b = [];
master2015hp.translator.b[0] = DataManager.isDatabaseLoaded;
master2015hp.translator.b[1] = Window_Base.prototype.drawText;
master2015hp.translator.b[2] = Window_Base.prototype.drawTextEx;
master2015hp.translator.b[3] = Game_Map.prototype.setup;
master2015hp.translator.b[4] = DataManager.loadDataFile;
master2015hp.translator.b[5] = Window_TitleCommand.prototype.makeCommandList;
master2015hp.translator.b[6] = Scene_Title.prototype.createCommandWindow;
master2015hp.translator.b[7] = Scene_Map.prototype.isReady;
master2015hp.translator.b[8] = Scene_Title.prototype.update;

//export is disabled if import is ON
if (master2015hp.translator.a.importData) master2015hp.translator.a.exportData = false;
//$dataMapInfos
var $dataMeTranslate = [];
var $dataMeLanguages = [];
var $tmpMap = null;
var MTlang = 'default';

DataManager.loadDataFile = function(name, src) {
	if (name == '$dataMeTranslate' || name == '$dataMeLanguages')
		src = 'localization/' + src;
	master2015hp.translator.b[4].call(this, name, src);
};

if (!DataManager.isBattleTest() && !DataManager.isEventTest()) {
	if (master2015hp.translator.a.importData) {
		if (checkFilePathExist('data/localization/' + master2015hp.translator.a.fileName + '.json')) {
			DataManager._databaseFiles.push({ name: '$dataMeTranslate', src: master2015hp.translator.a.fileName + '.json'});
		}
		if (checkFilePathExist('data/localization/' + master2015hp.translator.a.fileName2 + '_' + MTlang + '.json')) {
			DataManager._databaseFiles.push({ name: '$dataMeLanguages', src: master2015hp.translator.a.fileName2 + '_' + MTlang + '.json'});
		}
	}
}

master2015hp.translator.jsonParses = function(v) {
	var res = null;
	try {
		res = JSON.parse(v);
		return master2015hp.translator.jsonParses(res);
	} catch (error) {
		res = v;
	}
	return res;
};

master2015hp.translator.specialDecode = function(text) {
	if (!text) return '';
	var res = text;
	if (master2015hp.translator.autoTranslate) {
		master2015hp.translator.specialEncode.some(function(str) {
			var tmp = str.split(':');
			var reg = new RegExp(tmp[1],"gi");
			if (text.search(reg) > -1) {
				// console.log(tmp[0]);
				tmp[0] = tmp[0].replace(/\\\\/g,"\\");
				// console.log(tmp[0]);
				tmp[0] = tmp[0].replace(/\\\\/g,"\\");
				// console.log(tmp[0]);
				tmp[0] = tmp[0].replace(/\\\[/g,"[");
				// console.log(tmp[0]);
				res = text.replace(reg, tmp[0]);
				return true;
			}
			return false;
		});
	}
	return res;
};

StorageManager.saveMeTranslate = function() {
	$dataMeTranslate = $dataMeTranslate.filter(function(v) {return !!v;});
	var dirPath = 'data/localization/';
	createDirPath(dirPath);	
	//write MeTranslate
	var data = JSON.stringify($dataMeTranslate, null, 2);
	var filePath = dirPath + master2015hp.translator.a.fileName + '.json';
	writeDataFilePath(filePath, data);
	
	//include terms into data
	if (master2015hp.translator.a.translateCommands) {
		$dataMeLanguages.unshift({'Language': null});
		$dataMeLanguages.unshift($dataSystem.terms.commands);
	}
	//write MeLanguages
	data = JSON.stringify($dataMeLanguages, null, 2);
	//replace special char for compatible
	if (master2015hp.translator.autoTranslate) {
		master2015hp.translator.specialEncode.forEach(function(str) {
			var tmp = str.split(':');
			var reg = new RegExp(tmp[0], "ig");
			data = data.replace(reg, tmp[1]);
		});
	}
/*
if (master2015hp.translator.a.encodeOutput) {
	var tmpStr = `//CAUTION - READ MANUAL FOR WHAT TO DO NEXT
`;
	data = tmpStr + data;
	data = data.replace(/\\\'/ig, ' ♦z12x♣♦z10x♣ ');
	data = data.replace(/\\\"/ig, ' ♦z12x♣♦z11x♣ ');
	data = data.replace(/\\\\/ig, ' ♦z12x♣♦z12x♣ ');
	data = data.replace(/\\\[/ig, ' ♦z12x♣♦z13x♣ ');
	data = data.replace(/\\\]/ig, ' ♦z12x♣♦z14x♣ ');
	
	data = data.replace(/\'/ig, ' ♦z10x♣ ');
	data = data.replace(/\"/ig, ' ♦z11x♣ ');
	data = data.replace(/\\/ig, ' ♦z12x♣ ');
	data = data.replace(/\[/ig, ' ♦z13x♣ ');
	data = data.replace(/\]/ig, ' ♦z14x♣ ');
	data = data.replace(/「/ig, ' ♦z15x♣ ');
	data = data.replace(/」/ig, ' ♦z16x♣ ');
	var replaceMe = "`" + 'REPLACE ME' + "`";
	data += `
//INSTRUCTION==============================
var data = ${replaceMe};
data = data.replace(/[ ]?♦[ ]?z10x[ ]?♣[ ]?/ig, '\\'');
data = data.replace(/[ ]?♦[ ]?z11x[ ]?♣[ ]?/ig, '\\"');
data = data.replace(/[ ]?♦[ ]?z12x[ ]?♣[ ]?/ig, '\\\\');
data = data.replace(/[ ]?♦[ ]?z13x[ ]?♣[ ]?/ig, '\\[');
data = data.replace(/[ ]?♦[ ]?z14x[ ]?♣[ ]?/ig, '\\]');
data = data.replace(/[ ]?♦[ ]?z15x[ ]?♣[ ]?/ig, '「');
data = data.replace(/[ ]?♦[ ]?z16x[ ]?♣[ ]?/ig, '」');
console.log(data);
//CAUTION - REMOVE UNNECESSARY LINES
`;
}*/
	filePath = dirPath + master2015hp.translator.a.fileName2 + '_' + MTlang + '.json';
	writeDataFilePath(filePath, data);
};

master2015hp.translator.generateKey = function() {
	var key = 10000000 + Math.randomInt(90000000);
	return String(key);
};

DataManager.isDatabaseLoaded = function() {
	this._tranKeys = this._tranKeys || [];
	
	if (this._MTwaitLoadData) {
		this._MTwaitLoadData++;
		if (this._MTwaitLoadData < master2015hp.translator.a.waitLoadData) return false;
		else this._MTwaitLoadData = null;
	}
	var cond1 = !!this._MTexportedMap;
	var cond2 = !!this._MTexportedCommonEvent;
	var cond3 = !!this._MTexportedSkill;
	
	if (master2015hp.translator.a.exportData) {
		if (!this.MTisMapDataValid()) {
			this.MTexportMap();
			this._MTwaitLoadData = 1;
		} else {
			this.doingTranslate();
		}
		if (cond1) this.MTexportCommonEvent();
		if (cond2 && master2015hp.translator.a.translateSkill) {
			this.MTexportSkill();
		} else {
			cond3 = true;
		}
		if (cond1 && cond2 && cond3) {
			StorageManager.saveMeTranslate();
			alert('completed Export!');
		}
	} else {
		cond1 = true; cond2 = true; cond3 = true;
	}
	
    var res = master2015hp.translator.b[0].call(this) && cond1 && cond2 && cond3;
	if (res) {
		var test = this.isBattleTest() || this.isEventTest();
		if (!test && master2015hp.translator.a.translateCommands) {
			if ($dataMeLanguages[0] && Array.isArray($dataMeLanguages[0])) $dataSystem.terms.commands = $dataMeLanguages[0];
		}
	}
	return res;
};

DataManager.MTexportSkill = function() {
	this._skillInfo = this._skillInfo || JsonEx.makeDeepCopy($dataSkills);
	if (this._skillInfo.length <= 0) {
		this._MTexportedSkill = true;
		return;
	}
	var cm = this._skillInfo.shift();
	this.extractMTSkillData(cm);
};

DataManager.MTexportCommonEvent = function() {
	this._ceInfo = this._ceInfo || JsonEx.makeDeepCopy($dataCommonEvents);
	this._ceIndex = this._ceIndex || 0;
	if (this._ceInfo.length <= 0) {
		this._MTexportedCommonEvent = true;
		return;
	}
	var cm = this._ceInfo.shift();
	this.extractMTCommonEventData(cm, this._ceIndex);
	this._ceIndex++;
}; 

DataManager.MTexportMap = function() {
	if (this._MTexportedMap) {
		return;
	}
	this._mInfo = this._mInfo || JsonEx.makeDeepCopy($dataMapInfos);
	var map = this._mInfo.shift();
	if (this._mInfo.length <= 0) {
		this._MTexportedMap = true;//FINISH
	}
	if (!map) {
		this.MTexportMap();
	} else {
		if (map['id'] > 0) {
			this._MTmapId = map['id'];
			var filename = 'Map%1.json'.format(map['id'].padZero(3));
			this._mapLoader = ResourceHandler.createLoader('data/' + filename, this.loadDataFile.bind(this, '$tmpMap', filename));
			this.loadDataFile('$tmpMap', filename);
		}
	}
};

DataManager.MTisMapDataValid = function() {
    try {
		this.checkError();
	} catch (error) {
		return false;
	}
    return !!$tmpMap;
};

DataManager.doingTranslate = function() {
	//this function is loop for every map
	var data = JsonEx.makeDeepCopy($tmpMap);
	//WORK WITH DATA HERE
	var events = data.events.filter(function(e) {if(e) return true; else return false;});
	events.forEach(function(e) {
		var pages = e.pages;
		this.extractMTPageData(pages, e.id);
	}, this);
	$tmpMap = null;
};

DataManager.extractMTCommonEventData = function(cmev, cId) {
	if (!cmev) return;
	this.extractMTListData(cmev.list, cId, 'common event');
};

DataManager.extractMTPageData = function(pages, eId) {
	pages.forEach(function(p) {
		var list = p.list;
		this.extractMTListData(list, eId, 'map event');
	}, this);
};

//EXTRACT DATA
DataManager.extractMTSkillData = function(data) {
	if (!data || !data.name) return;
	if (data.id < master2015hp.translator.translateSkillDescFromId) return;
	do {
		var key = master2015hp.translator.generateKey();
	} while (this._tranKeys.contains(key));
	
	var obj = {
		skillId: data.id,
		'parent': 'skill',
		key: key
	};
	obj['default'] = data.description;
	
	if (obj['default']) {
		$dataMeTranslate.push(obj);
		//omit similar values
		var dataMTL = [];
		if ($dataMeLanguages.length > 0) {
			if (master2015hp.translator.autoTranslate) {
				dataMTL = $dataMeLanguages.map(function(obj) {return Object.keys(obj)[1];})
			} else {
				dataMTL = $dataMeLanguages.map(function(obj) {return Object.keys(obj)[0];});
			}
		}
		if (dataMTL.contains(obj['default'])) return;
		if (master2015hp.translator.autoTranslate) {
			$dataMeLanguages.push({[key]: obj['default']});
		} else {
			$dataMeLanguages.push({[obj['default']]: null});
		}
	}
};

DataManager.extractMTListData = function(list, eId, parent) {
	for (var i = 0; i < list.length; i++) {
		do {
			var key = master2015hp.translator.generateKey();
		} while (this._tranKeys.contains(key));
	
		if (parent == 'map event')
			var obj = {
				map: this._MTmapId,
				eventId: eId,
				'parent': parent,
				key: key
			};
		else if (parent == 'common event')
			var obj = {
				commonEventId: eId,
				'parent': parent,
				key: key
			};
		
		var line = list[i];
		//translate message 401
		if (line.code == 401) {
			obj['type'] = 'message';
			obj['default'] = line.parameters[0];
		}
		//translate comment 108 & 408
		if (line.code == 108 || line.code == 408) {
			obj['type'] = 'comment';
			obj['default'] = line.parameters[0];
		}
		//translate choices 102
		if (line.code == 102) {
			obj['type'] = 'choices';
			obj['default'] = line.parameters[0];
		}
		
		//omit similar values
		var dataMTL = [];
		if ($dataMeLanguages.length > 0) {
			if (master2015hp.translator.autoTranslate) {
				dataMTL = $dataMeLanguages.map(function(obj) {return Object.keys(obj)[1];})
			} else {
				dataMTL = $dataMeLanguages.map(function(obj) {return Object.keys(obj)[0];});
			}
		}
		if (obj['default']) {
			$dataMeTranslate.push(obj);
			//if it is choice, separate it
			if (Array.isArray(obj['default'])) {
				obj['default'].forEach(function(od) {
					if (!od) return;
					if (dataMTL.contains(od)) return;
					if (master2015hp.translator.autoTranslate) {
						$dataMeLanguages.push({[key]: [od]});
					} else {
						$dataMeLanguages.push({[od]: null});
					}
				});
			} else {
				if (dataMTL.contains(obj['default'])) continue;
				if (master2015hp.translator.autoTranslate) {
					$dataMeLanguages.push({[key]: obj['default']});
				} else {
					$dataMeLanguages.push({[obj['default']]: null});
				}
			}
		}
	}
};

DataManager.MTreplaceTextList = function(list) {
	for (var i = 0; i < list.length; i++) {
		var line = list[i];
		//translate message 401
		if (line.code == 401) {
			line.parameters[0] = this.MTgetText(line.parameters[0], $dataMeTranslate);
		} else if (line.code == 108 || line.code == 408) {
			line.parameters[0] = this.MTgetText(line.parameters[0], $dataMeTranslate);
		} else if (line.code == 102) {
			line.parameters[0] = this.MTgetText(line.parameters[0], $dataMeTranslate);
		}
	}
};

DataManager.MTreplaceSkillDesc = function() {
	$dataSkills.forEach(function(a) {
		if (!a || !a.name) return;
		a.description = this.MTgetText(a.description, $dataMeTranslate);
	},this);
};

DataManager.MTreplaceCommonEvents = function() {
	$dataCommonEvents.forEach(function(a) {
		if (!a) return;
		var list = a.list;
		this.MTreplaceTextList(list);
	},this);
};

DataManager.MTreplaceMapText = function(events, data) {
	events.forEach(function(a) {
		if (!a) return;
		var pages = a.pages;
		pages.forEach(function(b) {
			var list = b.list;
			this.MTreplaceTextList(list);
		},this);
	},this);
};

//LOAD DATA
DataManager.MTgetText = function(text, data) {
	//data is current not being used
	var res = text;
	var list = $dataMeLanguages;
	//►auto get message code list
	/*
	if (master2015hp.translator.a.correctMessageCodes) {
		var list1 = JsonEx.makeDeepCopy(list);
		var list2 = JSON.stringify(list);
		var codeList = [];
		var reg = /\\[ ]?(\w+)[ ]?\[/ig;
		var match;
		do {
			match = reg.exec(list2);
			if (match) {
				if (!codeList.contains(match[match.length - 1])) codeList.push(match[match.length - 1]);
			}
		} while (match);
		//fix error code due to translation
		list.forEach(function(o) {
			var value = o[Object.keys(o)[0]];
			codeList.forEach(function(r) {
			  var str = "\[ \]?\\\\\[ \]*" + r + "\[ \]*\\[";
			  var reg = new RegExp(str, "ig");
			  var res = "\\" + r + "[";
			  value = value.replace(reg, res);
			});
			o[Object.keys(o)[0]] = value;
		});
	}*/
	//◄auto get message code list
	
	///►Auto translate format
	if (master2015hp.translator.autoTranslate) {
		if (Array.isArray(text)) {
			//if it is choices
			for(var i = 0; i < text.length; i++) {
				list.some(function(a) {
					var key = null;
					//get correct key of text
					$dataMeTranslate.some(function(b) {
						if (b['default'] == text[i]) {
							key = b['key'];
							return true;
						}
						return false;
					});
					if (key) {
						list.some(function(c) {
							if (c.hasOwnProperty(key)) {
								var value = c[key];
								if (value) res[i] = value;
								return true;
							}
							return false;
						});
					}
					return false;
				});
			}
		} else {
			var key = null;
			//get correct key of text
			$dataMeTranslate.some(function(b) {
				if (b['default'] == text) {
					key = b['key'];
					return true;
				}
				return false;
			});
			if (key) {
				list.some(function(c) {
					if (c.hasOwnProperty(key)) {
						var value = c[key];
						if (value) res = value;
						return true;
					}
					return false;
				});
			}
		}
	} else {
	///◄Auto translate format
		if (Array.isArray(text)) {
			//if it is choices
			for(var i = 0; i < text.length; i++) {
				list.some(function(a) {
					if (a.hasOwnProperty(text[i])) {
						var value = a[text[i]];
						if (value) res[i] = value;
						return true;
					}
					return false;
				});
			}
		} else {
			list.some(function(a) {
				if (a.hasOwnProperty(text)) {
					var value = a[text];
					if (value) res = value;
					return true;
				}
				return false;
			});
		}
	}
	return master2015hp.translator.specialDecode(res);
};

//overwrite map data
DataManager.exeMeTranslate = function(mapId) {
	var mapId = mapId || $gameMap.mapId();
	if ($dataMeLanguages.length > 0) {
		if (!$dataMap) {
			throw new Error('The map data is not available');
		}
		var mData = $dataMeTranslate.filter(function(a) {return a.map == mapId;});
		this.MTreplaceMapText($dataMap.events, mData);
		if (!$gameTemp._replacedCommonEvents) {
			$gameTemp._replacedCommonEvents = true;
			this.MTreplaceCommonEvents();
		}
		if (!$gameTemp._replaceSkillDesc && master2015hp.translator.a.translateSkill) {
			$gameTemp._replaceSkillDesc = true;
			this.MTreplaceSkillDesc();
		}
		return true;
	} else {
		return true;
	}
};

Scene_Map.prototype.isReady = function() {
	var res = master2015hp.translator.b[7].call(this);
	if (res) {
		var cond1 = DataManager.exeMeTranslate();
	}
	return res && cond1;
};

Game_Map.prototype.setup = function(mapId) {
	//replace data only if lang pack found
	DataManager.exeMeTranslate(mapId);
	master2015hp.translator.b[3].call(this, mapId);
};

///HANDLE OPTION
Window_TitleCommand.prototype.makeCommandList = function() {
	master2015hp.translator.b[5].call(this);
	//*
	if ($dataMeLanguages) {
		var langTxt = $dataMeLanguages[1]['Language'] ? $dataMeLanguages[1]['Language'] : 'Language';
		if (master2015hp.translator.autoTranslate) langTxt = Object.keys($dataMeLanguages[1])[0];
	}
	this.addCommand(langTxt, 'language');
};

Scene_Title.prototype.createCommandWindow = function() {
	master2015hp.translator.b[6].call(this);
    this._commandWindow.setHandler('language',  this.commandLanguage.bind(this));
};

Scene_Title.prototype.update = function() {
    master2015hp.translator.b[8].call(this);
	if (this._refreshed) return;
	if (this._commandWindow && $dataMeLanguages) {
		var langTxt = $dataMeLanguages[1]['Language'] ? $dataMeLanguages[1]['Language'] : null;
		if (master2015hp.translator.autoTranslate) langTxt = Object.keys($dataMeLanguages[1])[0];
		var res = this._commandWindow._list.some(function(a) {
			if (a && a.symbol == 'language') {
				if (a.name != langTxt) a.name = langTxt;
				return true;
			}
			return false;
		});
		if (res) {
			this._refreshed = 1;
			this._commandWindow.refresh();
		}
	}
};

Scene_Title.prototype.commandLanguage = function() {
    this._commandWindow.close();
    SceneManager.push(Scene_Language);
};

//-----------------------------------------------------------------------------
// Scene_Language
//
// The scene class of the options screen.

function Scene_Language() {
    this.initialize.apply(this, arguments);
}

Scene_Language.prototype = Object.create(Scene_MenuBase.prototype);
Scene_Language.prototype.constructor = Scene_Language;

Scene_Language.prototype.initialize = function() {
	this.MTloadFlags();
    Scene_MenuBase.prototype.initialize.call(this);
};

Scene_Language.prototype.MTloadFlags = function() {
	var a = master2015hp.translator.a.langOpt;
	var bml = [];
	for (var i = 0; i < a.length; i++) {
		var b = a[i];
		if (!b) continue;
		if (b.sysImg) {
			bml.push(ImageManager.loadSystem(b.sysImg));
		}
	}
	if (!bml[bml.length - 1].isReady()) bml[bml.length - 1].addLoadListener(this.loadFlagCompleted.bind(this));
	else this._loadedFlags = true;
};

Scene_Language.prototype.loadFlagCompleted = function() {
	this._loadedFlags = true;
};

Scene_Language.prototype.create = function() {
    Scene_MenuBase.prototype.create.call(this);
    this.createLanguageWindow();
};

Scene_Language.prototype.terminate = function() {
	//reload $dataMeLanguages
	var lang = $gameTemp._MTselectedLang || MTlang;
	var fileName = master2015hp.translator.a.fileName2 + '_' + lang + '.json';
	DataManager.loadDataFile('$dataMeLanguages', fileName);
};

Scene_Language.prototype.terminateReal = function() {
	Scene_MenuBase.prototype.terminate.call(this);
};

Scene_Language.prototype.createLanguageWindow = function() {
    this._languageWindow = new Window_Language();
	this._languageWindow.setHandler('ok', this.onLangOk.bind(this));
    this._languageWindow.setHandler('cancel', this.popScene.bind(this));
    this.addWindow(this._languageWindow);
};

Scene_Language.prototype.onLangOk = function() {
	var item = this._languageWindow.item();
	if (item) {
		$gameTemp._MTselectedLang = item.name;
		var lang = $gameTemp._MTselectedLang || MTlang;
		var fileName = master2015hp.translator.a.fileName2 + '_' + lang + '.json';
		DataManager.loadDataFile('$dataMeLanguages', fileName);
		DataManager._MTselectedLang = lang;
		this._loadingLang = true;
		this._languageWindow.deactivate();
		this._languageWindow.deselect();
		this._languageWindow.close();
	} else {
		alert('invalid selection');
		this._languageWindow.activate();
	}
};

Scene_Language.prototype.updateLoadingLang = function() {
	if (!this._loadingLang) return false;
	DataManager.checkError();
	if (!window['$dataMeLanguages']) return false;
	return true;
};

Scene_Language.prototype.update = function() {
	Scene_MenuBase.prototype.update.call(this);
	if (this.updateLoadingLang()) {
		if (!$dataMeLanguages) return;//wait until finish loaded languageData
		if (master2015hp.translator.a.translateCommands) $dataSystem.terms.commands = $dataMeLanguages[0];
		this._loadingLang = false;
		this.popScene();
		return;
	}
	if (!this._languageWindow.isOpen() && this._loadedFlags) {
		this._loadedFlags = null;
		this._languageWindow.open();
		this._languageWindow.refresh();
		if(this._languageWindow.item(0)) {
			this._languageWindow.select(0);
			this._languageWindow.activate();
		}
	}
};

//-----------------------------------------------------------------------------
// Window_Language
//
// The window for changing various settings on the options screen.

function Window_Language() {
    this.initialize.apply(this, arguments);
}

Window_Language.prototype = Object.create(Window_Selectable.prototype);
Window_Language.prototype.constructor = Window_Language;

Window_Language.prototype.initialize = function() {
	var w = this.windowWidth();
	var h = this.windowHeight() - master2015hp.translator.a.langHeightOff;
	var x = (Graphics.boxWidth - w) / 2;
	var y = (Graphics.boxHeight - h) / 2;
    Window_Selectable.prototype.initialize.call(this,x,y,w,h);
	this.openness = 0;
};

Window_Language.prototype.windowWidth = function() {
    return 400;
};

Window_Language.prototype.windowHeight = function() {
    return this.fittingHeight(10);
};

Window_Language.prototype.maxCols = function() {
    return 1;
};

Window_Language.prototype.itemHeight = function() {
    return 66;
};

Window_Language.prototype.maxItems = function() {
    return master2015hp.translator.a.langOpt.length;
};

Window_Language.prototype.item = function(id) {
	if (id > -1) {
		return master2015hp.translator.a.langOpt[id];
	}
    return master2015hp.translator.a.langOpt[this.index()];
};

Window_Language.prototype.drawItem = function(index) {
	var item = master2015hp.translator.a.langOpt[index];
	if (item) {
		var rect = this.itemRect(index);
		this.drawText(item.name, rect.x, rect.y, rect.width, 'left');
		if (item.sysImg) {
			var bm = ImageManager.loadSystem(item.sysImg);
			this.contents.blt(bm, 0, 0, bm.width, bm.height, rect.width - bm.width, rect.y);
		}
	}
};

//patch Yep_CallEvent
if (Imported.YEP_CallEvent) {
	DataManager.loadCallMapData = function(mapId) {
		if (mapId == $gameMap.mapId()) {
			$callEventMap = $dataMap;
		} else if (mapId > 0) {
			var filename = 'Map%1.json'.format(mapId.padZero(3));
			this.loadDataFile('$callEventMap', filename);
		} else {
			$callEventMap = {};
			$callEventMap.data = [];
			$callEventMap.events = [];
			$callEventMap.width = 100;
			$callEventMap.height = 100;
			$callEventMap.scrollType = 3;
		}
	};
}