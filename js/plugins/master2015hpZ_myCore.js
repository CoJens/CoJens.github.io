//===============================================================================
// master2015hpZ_myCore.js
// by master2015hp
// 2021.05.02
//===============================================================================
/*:
 * @plugindesc install me above all of other master2015hp plugins
 * @author master2015hp
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
 *
 * -------------------------------------------------------------------------------
 * ✧ INSTRUCTION
 * ===============================================================================
 * - Install me above all of other master2015hp plugins.
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
 * Copyright (c) 2020, Isabella Ava
 * Contact me at gmail: master2015hp
 *
 * -------------------------------------------------------------------------------
 * Version History
 * ===============================================================================
 * 2021/05/02 v1.0.0 - Initial release
 */
var master2015hp = master2015hp || {};
master2015hp.mCore = master2015hp.mCore || {};

///Easing
/*
t = current Time (suppose to change over time); d = end Time;
b = start Position; c = (end pos - start pos)
- assume that we want to move x = 50 to x = 80 in 20 frames
  we will have t = 0; d = 20; b = 50; c = 30;
ex: sprite[0].x = EasingFunctions['linear'](0, 50, 30, 20)
*/
master2015hp.mCore.easY = 
{
	linear: function(t, b, c, d) {
		return c*(t/d) + b;
	},
	easeInQuad: function (t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (c==0||t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (c==0||t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (c==0||t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (t, b, c, d) {
		return c - this.easeOutBounce(d-t, 0, c, d) + b;
	},
	easeOutBounce: function (t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (t, b, c, d) {
		if (t < d/2) return this.easeInBounce(t*2, 0, c, d) * .5 + b;
		return this.easeOutBounce(t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
};

///START === 2d array shortest path finding
master2015hp.mCore._matrix = [
  [0, 1, 0, 1, 0],
  [0, 0, 1, 0, 0],
  [0, 0, 1, 1, 0],
  [0, 0, 0, 0, 0],
  [0, 1, 0, 1, 0]
];
//multi dimension array
//master2015hp.mCore._matrix[y][x] (array1[x])
//master2015hp.mCore._matrix[0][1] = 1
//master2015hp.mCore._matrix[1][1] = 0

var start = [4, 0];
var end = [3, 4];

function findWay(position, end) {
  var queue = [];

  master2015hp.mCore._matrix[position[0]][position[1]] = 1;
  queue.push([position]); // store the 1st node

  while (queue.length > 0) {
    var path = queue.shift(); // get the path out of the queue
    var pos = path[path.length-1]; // ... and then the last position from it
    var direction = [
      [pos[0] + 1, pos[1]],
      [pos[0], pos[1] + 1],
      [pos[0] - 1, pos[1]],
      [pos[0], pos[1] - 1]
    ];

    for (var i = 0; i < direction.length; i++) {
      // Perform this check first:
      if (direction[i][0] == end[0] && direction[i][1] == end[1]) {
        // return the path that led to the find
        return path.concat([end]); 
      }
      
      if (direction[i][0] < 0 || direction[i][0] >= master2015hp.mCore._matrix[0].length 
          || direction[i][1] < 0 || direction[i][1] >= master2015hp.mCore._matrix[0].length 
          || master2015hp.mCore._matrix[direction[i][0]][direction[i][1]] != 0) { 
        continue;
      }

	  //mark as visited
	  master2015hp.mCore._matrix[direction[i][0]][direction[i][1]] = 1;
      //extend and push the path on the queue
      queue.push(path.concat([direction[i]])); 
    }
  }
}

// var path = findWay(start, end);
// console.log(JSON.stringify(path));
///END === 2d array shortest path finding

//parse nested data
master2015hp.mCore.JSONparse = function(string) {
	try {
		return JSON.parse(string, function(key, value) {
			try {
				return master2015hp.mCore.JSONparse(value);
			} catch(e) {
				return value;
			}
		}.bind(this));
	} catch(e) {
		return string;
	}
};

//text wrap by specifying max number of letters to draw
master2015hp.mCore.wrapText = function(t, maxLength) {
	var reg1 = new RegExp(`(?![^\\n]{1,${maxLength}}$)([^\\n]{1,${maxLength}})\\s`, 'g');
	return t.replace(reg1, '$1\n');
};

//shuffle an array
master2015hp.mCore.shuffleArray = function(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
	return array;
};

//extract nested array
master2015hp.mCore.extractNestedArray = function(a) {
	if (!Array.isArray(a)) return [a];
	if (Array.isArray(a[0])) return master2015hp.mCore.extractNestedArray(a[0]);
	return a;
};

//get correct path to load data fs, only work for Window platform
function getGameRootPath(filePath) {
	var fs       = require('fs');
	var path     = require('path');
	filePath = filePath || "";
	var filePath = path.join(path.dirname(process.mainModule.filename), filePath);
	return filePath;
};

function checkFilePathExist(filePath) {
	var fs = require('fs');
	var path = getGameRootPath(filePath);
	if (!fs.existsSync(path)) {
		var txt = "couldn't find " + path;
		alert(txt);
		return false;
	}
	return true;
};

function writeDataFilePath(filePath, data) {
	var fs = require('fs');
	var path = getGameRootPath(filePath);
	fs.writeFileSync(filePath, data);
};

function createDirPath(name) {
	var fs = require('fs');
	var path = getGameRootPath();
	path = path + name;
	if (!fs.existsSync(path)) fs.mkdirSync(path);
};

///My Scrollable Window
function Window_Scrollable() {
    this.initialize(...arguments);
}

Window_Scrollable.prototype = Object.create(Window_Base.prototype);
Window_Scrollable.prototype.constructor = Window_Scrollable;

Window_Scrollable.prototype.initialize = function(x,y,w,h) {
    Window_Base.prototype.initialize.call(this, x,y,w,h);
    this._scrollX = 0;
    this._scrollY = 0;
    this._scrollBaseX = 0;
    this._scrollBaseY = 0;
	this.innerWidth = this.width - this.padding * 2;
	this.innerHeight = this.height - this.padding * 2;
    this.clearScrollStatus();
};

Window_Scrollable.prototype.clearScrollStatus = function() {
    this._scrollTargetX = 0;
    this._scrollTargetY = 0;
    this._scrollDuration = 0;
    this._scrollAccelX = 0;
    this._scrollAccelY = 0;
    this._scrollTouching = false;
    this._scrollLastTouchX = 0;
    this._scrollLastTouchY = 0;
    this._scrollLastCursorVisible = false;
};

Window_Scrollable.prototype.scrollX = function() {
    return this._scrollX;
};

Window_Scrollable.prototype.scrollY = function() {
    return this._scrollY;
};

Window_Scrollable.prototype.scrollBaseX = function() {
    return this._scrollBaseX;
};

Window_Scrollable.prototype.scrollBaseY = function() {
    return this._scrollBaseY;
};

Window_Scrollable.prototype.overallWidth = function() {
    //this to be redefine
};

Window_Scrollable.prototype.overallHeight = function() {
    //this to be redefine
};

Window_Scrollable.prototype.scrollBlockWidth = function() {
    // return this.itemWidth();
	return 1;
};

Window_Scrollable.prototype.scrollBlockHeight = function() {
    // return this.itemHeight();
	return 1;
};

Window_Scrollable.prototype.maxScrollX = function() {
    return Math.max(0, this.overallWidth() - this.innerWidth);
};

Window_Scrollable.prototype.maxScrollY = function() {
    return Math.max(0, this.overallHeight() - this.innerHeight);
};

Window_Scrollable.prototype.scrollTo = function(x, y) {
    const scrollX = x.clamp(0, this.maxScrollX());
    const scrollY = y.clamp(0, this.maxScrollY());
    if (this._scrollX !== scrollX || this._scrollY !== scrollY) {
        this._scrollX = scrollX;
        this._scrollY = scrollY;
        this.updateOrigin();
    }
};

Window_Scrollable.prototype.scrollBy = function(x, y) {
    this.scrollTo(this._scrollX + x, this._scrollY + y);
};

Window_Scrollable.prototype.smoothScrollTo = function(x, y) {
    this._scrollTargetX = x.clamp(0, this.maxScrollX());
    this._scrollTargetY = y.clamp(0, this.maxScrollY());
    this._scrollDuration = Input.keyRepeatInterval;
};

Window_Scrollable.prototype.smoothScrollBy = function(x, y) {
    if (this._scrollDuration === 0) {
        this._scrollTargetX = this.scrollX();
        this._scrollTargetY = this.scrollY();
    }
    this.smoothScrollTo(this._scrollTargetX + x, this._scrollTargetY + y);
};

Window_Scrollable.prototype.setScrollAccel = function(x, y) {
    this._scrollAccelX = x;
    this._scrollAccelY = y;
};

Window_Scrollable.prototype.smoothScrollDown = function(n) {
    this.smoothScrollBy(0, this.lineHeight() * n);
};

Window_Scrollable.prototype.smoothScrollUp = function(n) {
    this.smoothScrollBy(0, -this.lineHeight() * n);
};

Window_Scrollable.prototype.update = function() {
    Window_Base.prototype.update.call(this);
    this.processWheelScroll();
    this.processTouchScroll();
    this.updateSmoothScroll();
    this.updateScrollAccel();
    this.updateArrows();
    this.updateOrigin();
};

Window_Scrollable.prototype.processWheelScroll = function() {
    if (this.isWheelScrollEnabled() && this.isTouchedInsideFrame()) {
        const threshold = 20;
        if (TouchInput.wheelY >= threshold) {
            this.smoothScrollDown(1);
        }
        if (TouchInput.wheelY <= -threshold) {
            this.smoothScrollUp(1);
        }
    }
};

Window_Scrollable.prototype.processTouchScroll = function() {
    if (this.isTouchScrollEnabled()) {
        if (TouchInput.isTriggered() && this.isTouchedInsideFrame()) {
            this.onTouchScrollStart();
        }
        if (this._scrollTouching) {
            if (TouchInput.isReleased()) {
                this.onTouchScrollEnd();
            } else if (TouchInput.isMoved()) {
                this.onTouchScroll();
            }
        }
    }
};

Window_Scrollable.prototype.isWheelScrollEnabled = function() {
    return this.isScrollEnabled();
};

Window_Scrollable.prototype.isTouchScrollEnabled = function() {
    return this.isScrollEnabled();
};

Window_Scrollable.prototype.isScrollEnabled = function() {
	if (!this.active) return false;
    return true;
};

Window_Scrollable.prototype.isTouchedInsideFrame = function() {
    var x = this.canvasToLocalX(TouchInput.x);
    var y = this.canvasToLocalY(TouchInput.y);
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
};

Window_Scrollable.prototype.onTouchScrollStart = function() {
    this._scrollTouching = true;
    this._scrollLastTouchX = TouchInput.x;
    this._scrollLastTouchY = TouchInput.y;
    this._scrollLastCursorVisible = this.cursorVisible;
    this.setScrollAccel(0, 0);
};

Window_Scrollable.prototype.onTouchScroll = function() {
    const accelX = this._scrollLastTouchX - TouchInput.x;
    const accelY = this._scrollLastTouchY - TouchInput.y;
    this.setScrollAccel(accelX, accelY);
    this._scrollLastTouchX = TouchInput.x;
    this._scrollLastTouchY = TouchInput.y;
    this.cursorVisible = false;
};

Window_Scrollable.prototype.onTouchScrollEnd = function() {
    this._scrollTouching = false;
    this.cursorVisible = this._scrollLastCursorVisible;
};

Window_Scrollable.prototype.updateSmoothScroll = function() {
    if (this._scrollDuration > 0) {
        const d = this._scrollDuration;
        const deltaX = (this._scrollTargetX - this._scrollX) / d;
        const deltaY = (this._scrollTargetY - this._scrollY) / d;
        this.scrollBy(deltaX, deltaY);
        this._scrollDuration--;
    }
};

Window_Scrollable.prototype.updateScrollAccel = function() {
    if (this._scrollAccelX !== 0 || this._scrollAccelY !== 0) {
        this.scrollBy(this._scrollAccelX, this._scrollAccelY);
        this._scrollAccelX *= 0.92;
        this._scrollAccelY *= 0.92;
        if (Math.abs(this._scrollAccelX) < 1) {
            this._scrollAccelX = 0;
        }
        if (Math.abs(this._scrollAccelY) < 1) {
            this._scrollAccelY = 0;
        }
    }
};

Window_Scrollable.prototype.updateArrows = function() {
    this.downArrowVisible = this._scrollY < this.maxScrollY();
    this.upArrowVisible = this._scrollY > 0;
};

Window_Scrollable.prototype.updateOrigin = function() {
    this.origin.x = this._scrollX;
    this.origin.y = this._scrollY;
    if (this._scrollBaseX != this._scrollX || this._scrollBaseY != this._scrollY) {
        this.updateScrollBase(this._scrollX, this._scrollY);
        this.paint();
    }
};

Window_Scrollable.prototype.updateScrollBase = function(baseX, baseY) {
    const deltaX = baseX - this._scrollBaseX;
    const deltaY = baseY - this._scrollBaseY;
    this._scrollBaseX = baseX;
    this._scrollBaseY = baseY;
    // this.moveCursorBy(-deltaX, -deltaY);
    // this.moveInnerChildrenBy(-deltaX, -deltaY);
};

Window_Scrollable.prototype.paint = function() {
    // to be overridden
};