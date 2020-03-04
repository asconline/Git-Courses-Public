
///////////////////////////////////////////////////////////////////////////////
//                  GLOBAL VARIABLES DEFINING STYLE                          //
///////////////////////////////////////////////////////////////////////////////

var roundRectSize = 0;


///////////////////////////////////////////////////////////////////////////////
//                         DEFINE COLOR NAMES                                //
///////////////////////////////////////////////////////////////////////////////

var KFlightblue = "#dee7f3";
var KFdarkblue = "#3969AF"
//var KForange = "#d0570a";
//var KForange = "#AA4C1D"; //"#335C85"; //"#E68A00";//"#B8860B";
var KForange = "#be5627";

///////////////////////////////////////////////////////////////////////////////
//                        MAIN ARCHITECTURE                                  //
///////////////////////////////////////////////////////////////////////////////

// Initializations.
//   initCommon()  initializations common to all applets
//   init()        applet-specific init (you must define init() yourself)
window.onload = function()
{
	initCommon();
	initApplet();
	onresizeApplet();
}

// Initializations common to all applets
function initCommon()
{
	createAppletSvg();
}

// Define main SVG
var appletSvg;
function createAppletSvg()
{
	appletSvg = d3.select("#applet").append("svg");
	updateAppletSvgSize();
}

// Get window width
function windowWidth() { return window.innerWidth; }

// Get window height
function windowHeight() { return window.innerHeight; }

// Get size of the main SVG
var appletSvgWidth;
var appletSvgHeight;

var maxSvgRatio = 0.75;
var minSvgRatio = 4;

// Update size of the main SVG
function updateAppletSvgSize()
{
	appletSvgWidth = windowWidth();
	appletSvgHeight = windowHeight()-30;

	var maxRatio = maxSvgRatio;
	if(appletSvgHeight > maxRatio * appletSvgWidth)
		appletSvgHeight = maxRatio * appletSvgWidth;
	if(appletSvgWidth > minSvgRatio * appletSvgHeight)
		appletSvgWidth = minSvgRatio * appletSvgHeight;

	appletSvg.attr("width", "" + appletSvgWidth + "px")
	   .attr("height", "" + appletSvgHeight + "px");
}

// What happens when the window is resized
window.onresize = function () { onresizeAll(); }

function onresizeAll()
{
	// Update size of main SVG
	updateAppletSvgSize();

	// Update all widgets
	widgets.forEach( function(w) {w.update();} );

	// Call onresizeApplet()
	if(typeof onresizeApplet === 'function') {
		onresizeApplet();
	}
}


///////////////////////////////////////////////////////////////////////////////
//                           FONT RESIZING                                   //
///////////////////////////////////////////////////////////////////////////////

function fontSize_(foo,w,h)
{
	switch (typeof foo) {
		case "string":
			// get value
			var value = parseFloat(foo);
			// get unit
			var unit = ( foo.match(/(px)$/) || [""] )[0];
			// compute relative value
			switch (unit) {
				case "px": return value;
				default:
					var scaling = Math.min(0.009*appletSvgWidth,0.016*appletSvgHeight);
					return 1.2*value*scaling;
			}
		case "number": // proportional
			var scaling = Math.min(0.009*appletSvgWidth,0.016*appletSvgHeight);
			return 1.2*foo*scaling;
		case "function": // custom computation from width and height
			return foo(w,h);
	}
}

function fontSize(foo,w,h)
{
	return "" + fontSize_(foo,w,h) + "px";
}

///////////////////////////////////////////////////////////////////////////////
//                         WIDGET DEFINITION                                 //
///////////////////////////////////////////////////////////////////////////////

// The list of all widgets
var widgets = [];

// Create a new widget. The argument, optional, initializes the attributes.
function Widget(attributes) {

	// Set default attributes
 	this.attr_ = {
 		// Parent
		"parent" : null,
 		// Position
		"left"           : 0,
		"top"            : 0,
		// Size
		"width"          : 1,
		"height"         : 1,
		// Margin
		"margin-left"    : 0,
		"margin-right"   : 0,
		"margin-top"     : 0,
		"margin-bottom"  : 0,
		// Padding
		"padding-left"   : 0,
		"padding-right"  : 0,
		"padding-top"    : 0,
		"padding-bottom" : 0,
		// Background
		"background-color"   : null,
		"background-opacity" : 1,
		// Border
		"border-color"       : null,
		"border-opacity"     : 1,
		"border-width"       : 1,
		"border-radius"      : 0,
		// Text
		"text"                : "",       // SVG text content. Does not support line wrapping or HTML/SVG children elements such as <b>, <tspan>, etc.
		"text-color"          : "black",
		"text-opacity"        : 1,        // not supported yet (there is no text-opacity in CSS. must use "text-color: rgba(r,g,b,a)")
		"text-align"          : "center", // left|center|right
		"text-vertical-align" : "middle", // top|middle|bottom
		// Font
		"font-size"             : 1.2,
		"font-family"           : "'Open Sans', sans-serif",
		"font-style"            : "normal", // normal|italic|oblique
		"font-variant"          : "normal", // normal|small-caps
		"font-weight"           : "400",    // normal|bold|bolder|lighter, or a number
		// Onclick
		"onclick" : null,
		// Mouseover
		"mouseover-background-color" : null,
		"mouseover-background-opacity" : null,
		"mouseover-text-color" : null,
		"mouseover-text-opacity" : null,
		"mouseover-cursor" : "default",
 	};

	// Set default visual elements
	this.elements_ = {
		group: appletSvg.append("g").classed("noselect",true),
		background: null,
		text: null
	};

	// Set default computed global geometry
	this.computedGeometry_ = {
		left: 0,
		top: 0,
		width: 0,
		height: 0
	};

	// Get the "g" SVG element associated with this widget
	this.g = function () {return this.elements_.group;};

	// Access computed geometry
	this.left          = function () {return this.computedGeometry_["left"];};
	this.top           = function () {return this.computedGeometry_["top"];};
	this.width         = function () {return this.computedGeometry_["width"];};
	this.height        = function () {return this.computedGeometry_["height"];};
	this.marginLeft    = function () {return this.computedGeometry_["margin-left"];};
	this.marginRight   = function () {return this.computedGeometry_["margin-right"];};
	this.marginTop     = function () {return this.computedGeometry_["margin-top"];};
	this.marginBottom  = function () {return this.computedGeometry_["margin-bottom"];};
	this.paddingLeft   = function () {return this.computedGeometry_["padding-left"];};
	this.paddingRight  = function () {return this.computedGeometry_["padding-right"];};
	this.paddingTop    = function () {return this.computedGeometry_["padding-top"];};
	this.paddingBottom = function () {return this.computedGeometry_["padding-bottom"];};

	// Onresize function for custom visual elements
	this.onresize = function (left, top, width, height) {};

	// Onresize function for default visual elements
	this.onresizeDefaultElements = function (left, top, width, height) {
		if(this.elements_.background) {
			this.elements_.background
				.attr("x",left)
				.attr("y",top)
				.attr("width",width)
				.attr("height",height);
		}
		if(this.elements_.text) {
    		// TODO: For now, I Assume the text is both horizontally and vertically centered.
    		//       Instead, I should check value of text-align and text-vertical-align and
    		//       compute the text-anchor position accordingly
    		var fsize = fontSize_(this.attr("font-size"),width,height);
    		var textHeight = 0.7*fsize; // empirical heuristic to get text height from font size
    		                        // Typically, stick with Open Sans for this to work
    		var textY = top + 0.5*(height+textHeight);
    		var textX = left + 0.5*width;
    		this.elements_.text
    			.attr("x",textX)
				.attr("y",textY)
    			.style("font-size", "" + fsize + "px");
		}
	};

	// Get/set attributes. Example usage:
	//   1) widget.attr("left");     // Get the attribute "left"
	//   2) widget.attr("left",0.5); // Set the attribute "left" to the value 0.5
    //   3) widget.attr({"left":0.5,"width":0.3}); // Set several attributes at once
	//
    // Both 2) and 3) return the widget, so the calls can be sequenced, as in:
    //   4) widget.attr("left",0.5)
    //            .attr("width",0.3);
    //
 	this.attr = function (name, value) {
		if(arguments.length == 1 && typeof name === "string") { // Get attribute
			return this.attr_[name];
    	}
		if(arguments.length == 1 && typeof name === "object") { // Set several attributes at once, and return this
			for (var property in name) {
	    		if (name.hasOwnProperty(property)) {
	    			this.attr(property, name[property]);
	    		}
	    	}
	    	return this;
	    }
		else if(arguments.length > 1) { // Set attribute, and return this
			this.attr_[name] = value;
			this.setAttr_(name, value); // Magic happens here. See 6 lines below.
			this.update();
			return this;
		}
	};

	// This function is automatically called, once per attribute change, whenever the
	// applet developer changes an attribute via one of:
	//   1. widget.attr("name", value);
	//   2. widget.attr({"name1":value1,"name2":value2});
	//
	// It checks the "name", and does smart things depending of it. For instance, for the
	// attribute "background-color", if the SVG rectangle does not exist yet, it creates
	// it, and sets its color to be the specified value.
	//
	// If you want to create your own class MyCustomWidget inheriting the class Widget
	// (e.g., Button, Slider, etc...), the recommended approach to set/get custom
	// attributes is to redefine the function below, add your own behaviour for
	// custom or overriden attributes, and call this.setAttrDefault_(name, value) for
	// non-overriden default attributes. See for instance the implementation of HtmlText
	// for a good and simple example on how to do this properly.
	this.setAttr_ = function (name, value) {
		this.setAttrDefault_(name,value);
	};

	// Default setAttr_(name,value), when not overidden by classes inheriting Widget.
	this.setAttrDefault_ = function (name, value) {
		switch(name) {
			// Background
			case "background-color":
			case "background-opacity":
				makeBackgroundElementIfNull_(this);
				setBackgroundColorOpacity_(this);
				break;
			// Border
			case "border-color":
			case "border-opacity":
				makeBackgroundElementIfNull_(this);
				setBorderColorOpacity_(this);
				break;
			case "border-width":
				makeBackgroundElementIfNull_(this);
				setBorderWidth_(this,value);
				break;
			case "border-radius":
				makeBackgroundElementIfNull_(this);
				setBorderRadius_(this,value);
				break;
			// Text
			case "text":
				makeTextElementIfNull_(this);
				setText_(this, value);
				break;
			case "text-color":
			case "text-opacity":
				setTextColorOpacity_(this);
				break;
			case "text-align":
				setTextAlign_(this,value);
				break;
			case "text-vertical-align":
				setTextVerticalAlign_(this,value);
				break;
			// Font
			case "font-family":
			case "font-size":
			case "font-style":
			case "font-variant":
			case "font-weight":
				setFontAttr_(this,name,value);
				break;
			// Onclick
			case "onclick":
				setOnclick_(this,value);
				break;
			case "mouseover-background-color" :
			case "mouseover-background-opacity" :
			case "mouseover-text-color" :
			case "mouseover-text-opacity" :
			case "mouseover-cursor" :
				setMouseoverStyle_(this);
				break;
		}
	};

	// Convenient function to set the geometric attributes.
	this.setGeometry = function (left, top, width, height, parent) {
		var attributes = {};
		if(left   !== undefined) attributes["left"]   = left;
		if(top    !== undefined) attributes["top"]    = top;
		if(width  !== undefined) attributes["width"]  = width;
		if(height !== undefined) attributes["height"] = height;
		if(parent !== undefined) attributes["parent"] = parent;
		return this.attr(attributes);
	};

	// Set onresize function for custom visual elements
	this.setOnresize = function (onresize) {
		this.onresize = onresize;
		this.update();
	};

	// Initialize the widget
	this.init = function () {
		this.update();
	};

	// Update the widget after attributes have changed or window have been resized
	this.update = function () {
		updateComputedGeometry_(this);
		this.onresizeDefaultElements(this.left(), this.top(), this.width(), this.height());
		this.onresize               (this.left(), this.top(), this.width(), this.height());
	};


	// Set attributes manually specified in constructor
	if (typeof attributes === "object") this.attr(attributes);

	// Initialize widget
	this.init();

	// Add widget to list of widgets
	widgets.push(this);

	// Return the widget
	return this;
}

// Widget helper functions

// Input: attribute value       e.g., foo="10%")
//        parent size           e.g., (w,h)=(640,480)
// Output: number in SVG unit   e.g., 64
//
// Input->output examples:
//   ("10px",640,640,480) -> 10   (ignore last two parameters)
//   ("10%" ,640,640,480) -> 64   (ignore last two parameters)
//   ("0.1" ,640,640,480) -> 64   (ignore last two parameters)
//   ( 0.1  ,640,640,480) -> 64   (ignore last two parameters)
//   ("10"  ,640,640,480) -> 6400 (ignore last two parameters)
//   (function(w,h){return 0.1*Math.min(w,h);},640,640,480) -> 48 (ignore 2nd parameter)
function avps2svg_ (foo, wh, w, h) {
	switch (typeof foo) {
		case "string":
			// get value
			var value = parseFloat(foo);
			// get unit
			var unit = ( foo.match(/(%|px)$/) || [""] )[0];
			// compute relative value
			switch (unit) {
				case "%":  return 0.01 * value * wh;
				case "px": return value;
				default:   return value * wh; // default to proportional
			}
		case "number": // proportional
			return foo * wh;
		case "function": // custom computation from width and height
			return foo(w,h);
	}
}

function updateComputedGeometry_ (widget) {
	// Get parent global geometry including padding
	var parent = widget.attr("parent");
	var x = parent ? ( parent.left()   + parent.paddingLeft()                          ) : 0;
	var y = parent ? ( parent.top()    + parent.paddingTop()                           ) : 0;
	var w = parent ? ( parent.width()  - parent.paddingLeft() - parent.paddingRight()  ) : appletSvgWidth;
	var h = parent ? ( parent.height() - parent.paddingTop()  - parent.paddingBottom() ) : appletSvgHeight;

	// Compute margin and padding
	var wArray = ["margin-left","margin-right","padding-left","padding-right"];
	var hArray = ["margin-top","margin-bottom","padding-top","padding-bottom"];
	for(var i=0; i<4; ++i) {
		var wAttr = wArray[i];
		var hAttr = hArray[i];
		widget.computedGeometry_[wAttr] = avps2svg_(widget.attr(wAttr),w,w,h);
		widget.computedGeometry_[hAttr] = avps2svg_(widget.attr(hAttr),h,w,h);
	}

	// Compute position and size
	widget.computedGeometry_["left"]   = x + avps2svg_(widget.attr("left"),w,w,h) + widget.marginLeft();
	widget.computedGeometry_["top"]    = y + avps2svg_(widget.attr("top"), h,w,h) + widget.marginTop();
	widget.computedGeometry_["width"]  = avps2svg_(widget.attr("width"),w,w,h) - widget.marginLeft() - widget.marginRight();
	widget.computedGeometry_["height"] = avps2svg_(widget.attr("height"),h,w,h) - widget.marginTop() - widget.marginBottom();
};

function makeBackgroundElementIfNull_(widget) {
	if(!widget.elements_.background) {
		if(widget.elements_.text) // Insert background to group, behind existing text
			widget.elements_.background = widget.elements_.group.insert("rect","text");
		else                      // Append background to group
			widget.elements_.background = widget.elements_.group.append("rect");
		setBackgroundColorOpacity_(widget);
		setBorderColorOpacity_(widget);
		setBorderWidth_(widget,widget.attr("border-width"));
		setBorderRadius_(widget,widget.attr("border-radius"));
	}
}
function setBackgroundColorOpacity_(widget) {
	if(widget.attr("background-color")) {
		widget.elements_.background.attr("fill",widget.attr("background-color"))
		                           .attr("fill-opacity",widget.attr("background-opacity"));
	}
	else {
		widget.elements_.background.attr("fill-opacity",0);
	}
}
function setBorderColorOpacity_(widget) {
	if(widget.attr("border-color")) {
		widget.elements_.background.attr("stroke",widget.attr("border-color"))
		                           .attr("stroke-opacity",widget.attr("border-opacity"));
	}
	else {
		widget.elements_.background.attr("stroke-opacity",0);
	}
}
function setBorderWidth_(widget,width) {
	widget.elements_.background.attr("stroke-width",width);
}
function setBorderRadius_(widget,radius) {
	widget.elements_.background.attr("rx",radius)
	                           .attr("ry",radius);
}
function makeTextElementIfNull_(widget) {
	if(!widget.elements_.text) {
    	widget.elements_.text = widget.elements_.group
    		.append("text");
    	setText_(widget,widget.attr("text"));
    	setTextColorOpacity_(widget);
    	setTextAlign_(widget,widget.attr("text-align"));
    	setTextVerticalAlign_(widget,widget.attr("text-vertical-align"));
    	var fontAttributes = ["font-family","font-size","font-style","font-variant","font-weight"];
    	var nFontAttributes = fontAttributes.length;
		for (var i = 0; i < nFontAttributes; i++) {
			var name = fontAttributes[i];
			var value = widget.attr(name);
    		setFontAttr_(widget,name,value);
		}
	}
}
function setText_(widget,text) {
	if(widget.elements_.text) {
		widget.elements_.text.text(text);
	}
}
function setTextColorOpacity_(widget) {
	if(widget.elements_.text) {
		if(widget.attr("text-color")) {
			widget.elements_.text.attr("fill",widget.attr("text-color"))
			                     .attr("fill-opacity",widget.attr("text-opacity"));
		}
		else {
			widget.elements_.text.attr("fill-opacity",0);
		}
	}
}
function setTextAlign_(widget,value) {
	if(widget.elements_.text) {
		// Only supported middle for now, cf. Widget.onresizeDefaultElements().
		widget.elements_.text.style("text-anchor","middle");
	}
}
function setTextVerticalAlign_(widget,value) {
	if(widget.elements_.text) {
		// Only supported center for now, cf. Widget.onresizeDefaultElements().
		widget.elements_.text.style("vertical-align",value);
	}
}
function setFontAttr_(widget,name,value) {
	if(widget.elements_.text) {
		widget.elements_.text.style(name,value);
	}
}
function setOnclick_(widget,onclick) {
	if(onclick)	{
		widget.elements_.group.on('click', onclick)
	}
	else {
		widget.elements_.group.on('click', function() {} )
	}
}
function setMouseoverStyle_(widget) {
	// Cursor
	widget.elements_.group.style("cursor", widget.attr("mouseover-cursor"));
	// Style change on mouseover
	widget.elements_.group.on('mouseover', function() {
		if(widget.attr("mouseover-background-color")) {
			widget.elements_.background.attr("fill",widget.attr("mouseover-background-color"))
		}
	});
	// Style change on mouseout
	widget.elements_.group.on('mouseout', function() {
		if(widget.attr("background-color")) {
			widget.elements_.background.attr("fill",widget.attr("background-color"))
		}
	});
}


///////////////////////////////////////////////////////////////////////////////
//                         BUTTON DEFINITION                                 //
///////////////////////////////////////////////////////////////////////////////

function Button (attributes)
{
 	// Inherit Widget
	Widget.call(this);

	// Create behaviour for custom attributes, and/or
	// override default behaviour of existing widget attributes
	this.setAttr_ = function (name, value) {
		switch(name) {
			case "button-is-enabled":
			case "button-enabled-text-color":
			case "button-enabled-background-color":
			case "button-enabled-background-opacity":
			case "button-enabled-mouseover-background-color":
			case "button-enabled-mouseover-background-opacity":
			case "button-enabled-onclick":
			case "button-disabled-text-color":
			case "button-disabled-background-color":
			case "button-disabled-background-opacity":
			case "button-disabled-mouseover-background-color":
			case "button-disabled-mouseover-background-opacity":
			case "button-disabled-onclick":
				this.setEnabled_(this.attr("button-is-enabled"));
				break;
			case "text-color":
			case "background-color":
			case "background-opacity":
			case "mouseover-background-color":
			case "mouseover-background-opacity":
			case "onclick":
				this.attr("button-enabled-" + name, value);
				break;
			default:
				this.setAttrDefault_(name, value);
				break;
		}
	};

	// Change enable state
	this.setEnabled_ = function(enabled) {
		// Useful variables for later
		if(enabled)	{
			var prefix = "button-enabled-";
			var cursor = "pointer";
		}
		else {
			var prefix = "button-disabled-";
			var cursor = "default";
		}

		// Transfer relevant button attributes to widget attributes depending on state
		var attributeNameList = ["text-color",
								 "background-color",
								 "background-opacity",
								 "mouseover-background-color",
								 "mouseover-background-opacity",
								 "onclick"];
		for(var i = 0; i<attributeNameList.length; ++i) {
			var name = attributeNameList[i];
			this.attr_[name] = this.attr_[prefix + name];
			this.setAttrDefault_(name, this.attr_[name]);
		}

		// Set mouseover cursor
		this.attr_["mouseover-cursor"] = cursor;
		this.setAttrDefault_("mouseover-cursor", cursor);
	};

	// Enable the button: clicking the button will call attr("button-enabled-onclick")
	this.enable = function () {
		if(this.isEnabled())
			return this;
		else
			return this.attr("button-is-enabled", true);
	};

	// Disable the button: clicking the button will call attr("button-disabled-onclick"), typically a no-op
	this.disable = function () {
		if(this.isEnabled())
			return this.attr("button-is-enabled", false);
		else
			return this;
	};

	// Return the enable state of the button
	this.isEnabled = function () {
		return this.attr("button-is-enabled");
	};

	// Set Button default attributes
	this.attr({
		"button-is-enabled": true,
		// Attributes when enabled
		"button-enabled-text-color"   : "#ffffff",
		"button-enabled-background-color"   : KForange,
		"button-enabled-background-opacity" : 1,
		"button-enabled-mouseover-background-color"   : d3.rgb(KForange).brighter(0.5).toString(),
		"button-enabled-mouseover-background-opacity" : 1,
		"button-enabled-onclick" : function () {alert("button clicked");},
		// Attributes when disabled
		"button-disabled-text-color"   : "#ffffff",
		"button-disabled-background-color"   : "#cccccc",
		"button-disabled-background-opacity" : 1,
		"button-disabled-mouseover-background-color"   : "#cccccc",
		"button-disabled-mouseover-background-opacity" : 1,
		"button-disabled-onclick" : null,
		// Text
		"text": "button",
		"text-color": "white",
		"font-size": 1.4,
		"border-radius": 5,
	});

	// Set user-defined attributes
	this.attr(attributes);

	// Return button
	return this;
}


///////////////////////////////////////////////////////////////////////////////
//                          FRAME DEFINITION                                 //
///////////////////////////////////////////////////////////////////////////////

function Frame (attributes)
{
 	// Inherit Widget
	Widget.call(this);

	// Set Frame default attributes
	this.attr("background-color", KForange);

	// Set user-defined attributes
	this.attr(attributes);

	// Return frame
	return this;
}


///////////////////////////////////////////////////////////////////////////////
//                               HTML TEXT                                   //
///////////////////////////////////////////////////////////////////////////////

function HtmlText (attributes)
{
	// Inherit widget with default attributes
	Widget.call(this);

	// Append <div><p></p></div> at the end of <div id="applet">...</div>
	this.div_ = d3.select("#applet")
		.append("div")
			.style("position","absolute")
			.style("display","table");
	this.text_ = this.div_
		.append("p")
			.style("display","table-cell")
			.style("margin","0")
			.style("padding","2%");

	// Create behaviour for custom attributes, and/or
	// override default behaviour of existing widget attributes
	this.setAttr_ = function (name, value) {
		switch(name) {
			case "text":
				this.text_.html(value);
				break;
			case "text-color": // Supports any CSS color, e.g., #ffffff or rgba("255,255,255,0.7")
				this.text_.style("color", value);
				break;
			case "text-opacity":
				// Not supported. Use attr("text-color","rgba(...)")" instead.
				break;
			case "text-align":
				this.div_.style("text-align", value);
				break;
			case "text-vertical-align":
				this.text_.style("vertical-align", value);
				break;
			case "font-family":
			case "font-size":
			case "font-style":
			case "font-variant":
			case "font-weight":
				this.text_.style(name, value);
				break;
			case "background-color":
			case "background-opacity":
				this.div_.style(name, value);
				break;
			default:
				this.setAttrDefault_(name, value);
				break;
		}
	};

	// Set HtmlText default attributes
	this.attr({
		"text"                : "HtmlText default text",
		"text-align"          : "left",
		"text-vertical-align" : "top",

		"text-color"   : this.attr("text-color"),   // Inherits widget default value
		"text-opacity" : this.attr("text-opacity"), // Inherits widget default value

		"font-family"  : this.attr("font-family"),  // Inherits widget default value
		"font-size"    : this.attr("font-size"),    // Inherits widget default value
		"font-style"   : this.attr("font-style"),   // Inherits widget default value
		"font-variant" : this.attr("font-variant"), // Inherits widget default value
		"font-weight"  : this.attr("font-weight")   // Inherits widget default value
	});

	// Set user-defined attributes
	this.attr(attributes);

	// Set onresize function
	this.setOnresize(function (x,y,w,h) {
		this.div_
			.style("left", "" + x + "px")
			.style("top","" + y + "px")
			.style("width", "" + w + "px")
			.style("height", "" + h + "px");
		this.text_
			.style("font-size", fontSize(this.attr("font-size"),w,h));
	});

	// Return HtmlText
	return this;
}


///////////////////////////////////////////////////////////////////////////////
//                               HTML BOX                                    //
///////////////////////////////////////////////////////////////////////////////

function HtmlBox (attributes)
{
	// Inherit widget with default attributes
	Widget.call(this);

	// Append <div><p></p></div> at the end of <div id="applet">...</div>
	this.div_ = d3.select("#applet")
		.append("div")
			.style("position","absolute");

	this.div = function () { return this.div_; };

	// Create behaviour for custom attributes, and/or
	// override default behaviour of existing widget attributes
	this.setAttr_ = function (name, value) {
		switch(name) {
			case "text":
			case "html":
				this.div_.html(value);
				break;
			case "text-color": // Supports any CSS color, e.g., #ffffff or rgba("255,255,255,0.7")
				this.div_.style("color", value);
				break;
			case "text-opacity":
				// Not supported. Use attr("text-color","rgba(...)")" instead.
				break;
			case "text-align":
				this.div_.style("text-align", value);
				break;
			case "text-vertical-align":
				this.div_.style("vertical-align", value);
				break;
			case "font-family":
			case "font-size":
			case "font-style":
			case "font-variant":
			case "font-weight":
			case "background-color":
			case "background-opacity":
				this.div_.style(name, value);
				break;

			default:
				this.setAttrDefault_(name, value);
				break;
		}
	};

	// Set HtmlText default attributes
	this.attr({
		"text-align"          : "left",
		"text-vertical-align" : "top",

		"text-color"   : this.attr("text-color"),   // Inherits widget default value
		"text-opacity" : this.attr("text-opacity"), // Inherits widget default value

		"font-family"  : this.attr("font-family"),  // Inherits widget default value
		"font-size"    : this.attr("font-size"),    // Inherits widget default value
		"font-style"   : this.attr("font-style"),   // Inherits widget default value
		"font-variant" : this.attr("font-variant"), // Inherits widget default value
		"font-weight"  : this.attr("font-weight")   // Inherits widget default value
	});

	// Set user-defined attributes
	this.attr(attributes);

	// Set onresize function
	this.setOnresize(function (x,y,w,h) {
		this.div_
			.style("left", "" + x + "px")
			.style("top","" + y + "px")
			.style("width", "" + w + "px")
			.style("height", "" + h + "px")
			.style("font-size", fontSize(this.attr("font-size"),w,h));
	});

	// Return HtmlBox
	return this;
}


///////////////////////////////////////////////////////////////////////////////
//                          SLIDER DEFINITION                                //
///////////////////////////////////////////////////////////////////////////////

function getMouseCoords() {
	return d3.mouse(appletSvg[0][0]);
}

function getMouseX() {
	return d3.mouse(appletSvg[0][0])[0];
}

function getMouseY() {
	return d3.mouse(appletSvg[0][0])[1];
}

sliderValueAtMouseDown_ = 0;
sliderMouseXAtMouseDown_ = 0;
sliderDragged_ = null;
function Slider (attributes)
{
	// Inherit widget with default attributes
	Widget.call(this);

	// Append slider bar
	this.elements_.sliderBar = this.g().append("rect")
		.style("fill", KFdarkblue);

	// Append slider indicator
	var thisSlider = this;
	this.elements_.sliderIndicator = this.g().append("g")
		.classed("noselect", true)
		.style("cursor", "pointer");

	// Add D3 drag behavior
	var drag = d3.behavior.drag()
    	.on("dragstart", function () {
			sliderDragged_ = thisSlider;
			sliderValueAtMouseDown_ = sliderDragged_.attr("slider-value");
			sliderMouseXAtMouseDown_ = getMouseX();
    	})
    	.on("drag", function () {
    		thisSlider.drag_(getMouseX()-sliderMouseXAtMouseDown_);
    	});

	this.drag_ = function (dx) {
		// Convert dx to dv
		var h = this.height();
		var w = this.width();
		var sliderIndicatorHeight = h;
		var sliderIndicatorWidth = this.attr("slider-indicator-size")*h;
		var sliderRangeW = w - sliderIndicatorWidth;
		var sliderRange  = this.attr("slider-max") - this.attr("slider-min");
		var dv = dx * sliderRange / sliderRangeW;

		// Get v
		var v = sliderValueAtMouseDown_ + dv;

		// Set value
		this.attr("slider-value", v);
	};

	this.elements_.sliderIndicator.call(drag);

	// Add caption and value to indicator
	this.elements_.sliderIndicatorRect = this.elements_.sliderIndicator.append("rect")
		.style("fill", KForange);
	this.elements_.sliderIndicatorCaption = this.elements_.sliderIndicator.append("text")
		.classed("applet-text", true)
		.style("fill", "#f9caad")
		.style("text-anchor", "middle");
	this.elements_.sliderIndicatorValue = this.elements_.sliderIndicator.append("text")
		.classed("applet-text", true)
		.style("fill", "white")
		.style("text-anchor", "middle");

	// Create behaviour for custom attributes, and/or
	// override default behaviour of existing widget attributes
	this.setAttr_ = function (name, value) {
		switch(name) {
			case "slider-caption":
				this.elements_.sliderIndicatorCaption.text(value);
				break;
			case "slider-min":
			case "slider-max":
			case "slider-precision":
			case "slider-value":
				this.setValue_(this.attr("slider-value"));
				break;
			case "slider-onvaluechanged":
			case "slider-indicator-size":
			case "slider-caption-size":
			case "slider-caption-x":
			case "slider-caption-y":
			case "slider-value-size":
			case "slider-value-x":
			case "slider-value-y":
				// will be automatically handled by update()
				break;
			default:
				this.setAttrDefault_(name, value);
				break;
		}
	};

	this.cleanedValue_ = function (v) {
		// Truncate to allowed precision
		v = v.toFixed(this.attr("slider-precision"));

		// Clamp to allowed range
		v = Math.min(this.attr("slider-max"), Math.max(this.attr("slider-min"), v));

		// Return
		return v;
	};
	this.oldValue_ = 50;
	this.setValue_ = function (v) {
		if(v !== undefined) { // Could be undefined at initialization, e.g., when calling
			                  // attr("slider-min",0) before attr("slider-value") has been set.
			v = this.cleanedValue_(v);
			this.attr_["slider-value"] = v;
			if(v !== this.oldValue_) {
				this.attr("slider-onvaluechanged")(v);
			}
			this.oldValue_ = v;
		}
	};

	// Set Slider default attributes
	this.attr({
		"slider-caption": "n",
		"slider-min": 0,
		"slider-max": 100,
		"slider-precision": 0,
		"slider-value": 50,
		"slider-onvaluechanged": function (v) {},
		"slider-indicator-size": 2.3,
		"slider-caption-size": 0.7,
		"slider-caption-x": 0.25,
		"slider-caption-y": 0.72,
		"slider-value-size": 0.7,
		"slider-value-x": 0.65,
		"slider-value-y": 0.72
	});

	// Set user-defined attributes
	this.attr(attributes);

	// Set onresize function
	this.setOnresize(function (x,y,w,h) {

		var sliderBarHeight = 0.2*h;
		var sliderBarY = y + 0.4*h;
		var sliderBarR = 0.5*sliderBarHeight;
		this.elements_.sliderBar
			.attr("x", x)
			.attr("y", sliderBarY)
			.attr("width", w)
			.attr("height", sliderBarHeight)
			.attr("rx", sliderBarR)
			.attr("ry", sliderBarR);

		var sliderIndicatorHeight = h;
		var sliderIndicatorWidth = this.attr("slider-indicator-size")*h;
		var sliderRangeW = w - sliderIndicatorWidth;
		var sliderRange  = this.attr("slider-max") - this.attr("slider-min");
		var sliderIndicatorX = x + (this.attr("slider-value") - this.attr("slider-min")) / sliderRange * sliderRangeW;
		this.elements_.sliderIndicatorRect
			.attr("x", sliderIndicatorX)
			.attr("y", y)
			.attr("width", sliderIndicatorWidth)
			.attr("height", sliderIndicatorHeight)
			.attr("rx", sliderBarR)
			.attr("ry", sliderBarR);

		this.elements_.sliderIndicatorCaption
			.style("font-size", "" + (this.attr("slider-caption-size")*sliderIndicatorHeight) + "px")
			.attr("x", sliderIndicatorX + this.attr("slider-caption-x")*sliderIndicatorWidth)
			.attr("y", y + this.attr("slider-caption-y")*sliderIndicatorHeight);

		this.elements_.sliderIndicatorValue
			.text(this.attr("slider-value").toFixed(this.attr("slider-precision")))
			.style("font-size", "" + (this.attr("slider-value-size")*sliderIndicatorHeight) + "px")
			.attr("x", sliderIndicatorX + this.attr("slider-value-x")*sliderIndicatorWidth)
			.attr("y", y + this.attr("slider-value-y")*sliderIndicatorHeight);

	});

	// Return slider
	return this;
}


///////////////////////////////////////////////////////////////////////////////
//                               TUTORIAL                                    //
///////////////////////////////////////////////////////////////////////////////

function Tutorial()
{
	// Users of Tutorial must define these callback methods
	this.displayText = function (t) {};
	this.enableNext = function () {};
	this.disableNext = function () {};
	this.enableBack = function () {};
	this.disableBack = function () {};

	// Users of Tutorial must define this data
	this.data = [{"text":"Tutorial"},{"text":"Stage 1"},{"text":"Stage 2"}];

	// Users of Tutorial must call init() after defining callbacks and data
	this.init = function () {
		this.clearHistory_();
		this.enterUnvisitedStage_(0);
	};

	// Users of Tutorial must call next() when the next button is clicked
	this.next = function () {
		if(this.isLastHistoryIndex_()) {
			///// Yay, we're going to a new stage not visited yet! /////
			// Find stage index to go to
			var stageData = this.currentStageData();
			if(stageData.hasOwnProperty("next")) {
				var nextStageIndex = this.getStageIndexFromStageId_(stageData.next);
			}
			else {
				var nextStageIndex = this.currentStageIndex() + 1;
			}
			// Check that stage index exists
			if(0 <= nextStageIndex && nextStageIndex < this.data.length) {
				// Add stage index to history, and move to it
				this.onleave_(this.currentStageIndex());
				this.enterUnvisitedStage_(nextStageIndex);
			}
		}
		else {
			///// Simply go back to already visited stage --NOT true, I think,/////
			this.goToHistoryNextIndex_();
			this.displayCurrentStageText_();
			// if(this.isLastHistoryIndex_()){  //Mike added Dec 4
			// 	this.onenter_(this.currentStageIndex);
			// 	this.updateButtonsState_();
			// };
			// this.updateButtonsState_();
		}
	};
	this.back = function () {
		///// Simply go back to already visited stage /////
		this.goToHistoryPreviousIndex_();
		this.displayCurrentStageText_();
		// this.enableNext(); //Mike change dec 4
		// this.updateButtonsState_();
	};

	// Convenient auxiliary method
	// Don't call if isLastHistoryIndex_() is not true
	this.enterUnvisitedStage_ = function (stageIndex) {
		this.appendStageIndexToHistory_(stageIndex);
		this.goToHistoryNextIndex_();
		this.displayCurrentStageText_();
		this.onenter_(stageIndex); // Called after updateText() so that onenter()
								   // can change text depending on application state
		this.updateButtonsState_(); // Called after onenter() so that condition()
									// is called after onenter()
	};

	// Change on-the-fly the id of the next stage
	// Only works before the next stage is visited yet, in which case
	// it is added in the history and cannot be changed
	this.setStageNext = function (id) {
		this.data[this.currentStageIndex()].next = id;
	};

	// Change on-the-fly the text that is displayed when visiting
	// the stage (i.e., when you will go back to it in history)
	this.setStageText = function (t) {
		this.data[this.currentStageIndex()].text = t;
	};

	// Get info about current tutorial stage
	this.currentStageIndex = function () {
		return this.history_[this.historyIndex_];
	};
	this.currentStageData = function () {
		return this.data[this.currentStageIndex()];
	};

	this.currentStageText = function () {
		return this.data[this.currentStageIndex()].text;
	};

	// Call stage.onenter(), if exists
	this.onenter_ = function (stageIndex) {
		if(typeof this.data[stageIndex].onenter === 'function') {
			this.data[stageIndex].onenter();
		}
	};

	// Call stage.onleave(), if exists
	this.onleave_ = function (stageIndex) {
		if(typeof this.data[stageIndex].onleave === 'function') {
			this.data[stageIndex].onleave();
		}
	};

	// Call stage.onpass(), if exists
	this.onpass_ = function (stageIndex) {
		if(typeof this.data[stageIndex].onpass === 'function') {
			this.data[stageIndex].onpass();
		}
	};

	// Find a stage from its id, as specified in the stage data
	this.getStageIndexFromStageId_ = function (id)
	{
		for(var i=0; i<this.data.length; ++i)
		{
			var stage = this.data[i];
			if(stage.id === id) {
				// Found
				return i;
			}
		}
		//Not Found
		return -1;
	};

	// Tutorial History
	// Notation used in comments:
	//   history_ = [4,6*,5,7]  <- stage indexes in history
	//               0 1  2 3   <- history indexes
	// means that the user has seen the -stage indexes- 4, 6, 5, 7 (in this order),
	// and that the current -history index- is 1 ( i.e. the current --tutorial index--
	// seen by the user is 6.
	// Tutorial index = position in this.data
	// History index = position in this.history_
	// Currently displayed tutorial stage is this.data[ this.history_[this.historyIndex_] ]
	this.clearHistory_ = function () { // [4,6*,5,7] -> []
		this.history_ = [];
		this.historyIndex_ = -1;
		this.lastHistoryIndexConditionPassed_ = -1;
	};
	this.appendStageIndexToHistory_ = function (i) { // [4,6*,5,7] -> [4,6*,5,7,i]
		this.history_.push(i);
	};
	this.goToHistoryIndex_ = function (j) {        // [4,6,5*,7,8,9] -> [4,6,5,7,8*,9] if j==4
		if(0 <= j && j < this.history_.length) {    //  0 1 2....j                j
			this.historyIndex_ = j;
		}
	};
	this.goToHistoryNextIndex_ = function () {     // [4,6,5*,7,8,9] -> [4,6,5,7*,8,9]
		this.goToHistoryIndex_(this.historyIndex_+1);
	};
	this.goToHistoryPreviousIndex_ = function () { // [4,6,5*,7,8,9] -> [4,6*,5,7,8,9]
		this.goToHistoryIndex_(this.historyIndex_-1);
	};
	this.goToHistoryLastIndex_ = function () {     // [4,6,5*,7,8,9] -> [4,6,5,7,8,9*]
		this.goToHistoryIndex_(this.history_.length - 1);
	};
	this.goToHistoryFirstIndex_ = function () {    // [4,6,5*,7,8,9] -> [4*,6,5,7,8,9]
		this.goToHistoryIndex_(0);
	};
	this.isLastHistoryIndex_ = function () { // [4,6*,5] -> false ; [4,6,5*] -> true
		return this.historyIndex_ == this.history_.length - 1;
	};
	this.isFirstHistoryIndex_ = function () { // [4,6*,5] -> false ; [4*,6,5] -> true
		return this.historyIndex_ == 0;
	};

	// Condition checking mechanism
	this.checkCondition_ = function () {
		if(this.currentStageData().condition()) {
			// Passed
			this.enableNext();
			this.onpass_(this.currentStageIndex());
		} else {
			// Failed
			this.disableNext();
			this.checkAgainLater_();
		}
	};

	this.checkAgainLater_ = function () {
		var that = this; // Create a closure. Needed because the function
		                 // below will be called on global scope
		setTimeout(function () { that.checkCondition_(); }, 200);
	};

	// Display text of current stage
	this.displayCurrentStageText_ = function () {
		this.displayText(this.currentStageData().text);
	}


	this.updateButtonsState_ = function () {
		// Set next button state
		if (!this.isLastHistoryIndex_())
		{
			// The next stage has already been visited
			this.enableNext();
		}
		else if (  this.currentStageIndex()==this.data.length-1 &&
			      !this.currentStageData().hasOwnProperty("next") )
		{
			// There is no next stage
			this.disableNext();
		}
		else
		{
			// Yay, there is a brand new next stage!
			if(typeof this.currentStageData().condition === 'function') {
				// Check if condition is satisfied
				this.checkCondition_();
			}
			else {
				// No condition
				this.enableNext();
			}
		}

		// Set previous button state
		if(this.isFirstHistoryIndex_())
			this.disableBack();
		else {
			if(this.currentStageIndex()==1)
			{
				this.enableBack();
			}
		}	;

	};
}

//Return the BACK and NEXT buttons of the tutorial to their default state ( for example after using them for question answers)

tutorialReturnBackNext = function()
{
	tutorialBackButton.attr("text", "<BACK" );
	tutorialNextButton.attr("text", "NEXT>" );
	tutorialNextButton.attr("border-color", "none");
	tutorialBackButton.attr("border-color", "none");
	tutorialBackButton.attr("onclick", function() { tutorial.back(); } );
	tutorialNextButton.attr("onclick", function() { tutorial.next(); } );
}

tutorialBackNextToAnswers = function(newBackText,newNextText,backNextStage,nextNextStage){
	tutorialBackButton.enable();
	tutorialBackButton.attr("text", newBackText );
	tutorialNextButton.attr("text", newNextText );
	tutorialNextButton.attr("border-color", "white");
	tutorialBackButton.attr("border-color", "white");
	tutorialBackButton.attr("onclick", function() {
				tutorial.setStageNext(backNextStage);
				tutorial.next();
	 	} );
	tutorialNextButton.attr("onclick", function() {
				tutorial.setStageNext(nextNextStage);
				tutorial.next();
	 	} );
}

///////////////////////////////////////////////////////////////////////////////
//                        GENERAL D3 IMPROVEMENTS                            //
///////////////////////////////////////////////////////////////////////////////

// Add selection.first() to D3 selections
d3.selection.prototype.first = function()
{
	return d3.select(this[0][0]);
};

// Add selection.last() to D3 selections
d3.selection.prototype.last = function()
{
	var last = this.size() - 1;
	return d3.select(this[0][last]);
};
