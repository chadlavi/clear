'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var styled = require('styled-components');
var styled__default = _interopDefault(styled);
var React = require('react');

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var Code = styled__default('code')(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  border: 1px solid var(--clear-border);\n  font-size: 0.9em;\n  display: inline;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);\n  border-radius: calc(var(--clear-unit) / 2);\n"], ["\n  border: 1px solid var(--clear-border);\n  font-size: 0.9em;\n  display: inline;\n  margin: 0;\n  background: var(--clear-zebra);\n  padding: calc(var(--clear-unit) / 2 - 2px) calc(var(--clear-unit) / 2 - 1px);\n  border-radius: calc(var(--clear-unit) / 2);\n"])));
var templateObject_1;

var Container = function (_a) {
    var spacing = _a.spacing, props = __rest(_a, ["spacing"]);
    return React.createElement("div", __assign({}, props));
};
var Grid = styled__default(Container)(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", "px;\n  & > div {\n    padding: ", "px;\n  }\n"], ["\n  display: flex;\n  flex-wrap: wrap;\n  padding: ", "px;\n  & > div {\n    padding: ", "px;\n  }\n"])), function (p) { return p.spacing ? (p.spacing / 2) : 0; }, function (p) { return p.spacing ? p.spacing / 2 : 0; });
var templateObject_1$1;

var colors = {
    light: {
        background: 'white',
        border: '#ddd',
        error: '#cf0303',
        link: '#55e',
        textColor: '#111',
        zebra: '#f8f8f8',
    },
    dark: {
        background: '#111',
        border: '#555',
        error: '#ff5656',
        link: '#6c6cf0',
        textColor: 'white',
        zebra: '#242424',
    }
};

var focusStyle = "\n:focus {\n  outline: none;\n  box-shadow: 0 0 0 2px var(--clear-background), 0 0 0 4px var(--clear-link);\n}\n";

var unit = 8;
var numbers = {
    breakpoint: {
        xs: 600,
        sm: 960,
        md: 1280,
        lg: 1920,
    },
    fontSize: {
        default: unit * 2,
        label: unit * 1.8,
    },
    width: {
        main: 90 * unit,
    },
    unit: unit,
};

/**
 * Creates a set of css variables for global colors and sets body style and
 * all-element focus style
 */
var CSSVariables = styled.createGlobalStyle(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  :root {\n    --clear-background: ", ";\n    --clear-border: ", ";\n    --clear-error: ", ";\n    --clear-link: ", ";\n    --clear-text-color: ", ";\n    --clear-zebra: ", ";\n    --clear-unit: ", "px;\n    --clear-font-size-default: ", "px;\n    --clear-font-size-label: ", "px;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --clear-background: ", ";\n      --clear-border: ", ";\n      --clear-error: ", ";\n      --clear-link: ", ";\n      --clear-text-color: ", ";\n      --clear-zebra: ", ";\n    }\n  }\n  "], ["\n  :root {\n    --clear-background: ", ";\n    --clear-border: ", ";\n    --clear-error: ", ";\n    --clear-link: ", ";\n    --clear-text-color: ", ";\n    --clear-zebra: ", ";\n    --clear-unit: ", "px;\n    --clear-font-size-default: ", "px;\n    --clear-font-size-label: ", "px;\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --clear-background: ", ";\n      --clear-border: ", ";\n      --clear-error: ", ";\n      --clear-link: ", ";\n      --clear-text-color: ", ";\n      --clear-zebra: ", ";\n    }\n  }\n  "])), colors.light.background, colors.light.border, colors.light.error, colors.light.link, colors.light.textColor, colors.light.zebra, numbers.unit, numbers.fontSize.default, numbers.fontSize.label, colors.dark.background, colors.dark.border, colors.dark.error, colors.dark.link, colors.dark.textColor, colors.dark.zebra);
var GlobalStyles = styled.createGlobalStyle(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-text-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"], ["\n  body {\n    margin: 0;\n    background-color: var(--clear-background);\n    color: var(--clear-text-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: var(--clear-font-size-default);\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])));
var templateObject_1$2, templateObject_2;

var Container$1 = function (_a) {
    var size = _a.size, props = __rest(_a, ["size"]);
    return React.createElement("div", __assign({}, props));
};
var GridItem = styled__default(Container$1)(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  flex-basis: calc(100% * ", " / 12);\n  width: calc(100% * ", " / 12);\n  @media only screen and (max-width: ", "px) {\n    flex-basis: 100%;\n    width: 100%;\n  }\n"], ["\n  flex-basis: calc(100% * ", " / 12);\n  width: calc(100% * ", " / 12);\n  @media only screen and (max-width: ", "px) {\n    flex-basis: 100%;\n    width: 100%;\n  }\n"])), function (p) { return p.size || 12; }, function (p) { return p.size || 12; }, numbers.breakpoint.xs);
var templateObject_1$3;

var Header = styled__default('h1')(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject([""], [""])));
var templateObject_1$4;

var Label = function (_a) {
    var disabled = _a.disabled, error = _a.error, props = __rest(_a, ["disabled", "error"]);
    return React.createElement("label", __assign({}, props));
};
var StyledLabel = styled__default(Label)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  opacity: ", ";\n  width: 100%;\n  & > span {\n    font-size: var(--clear-font-size-label);\n  }\n"], ["\n  color: ", ";\n  display: flex;\n  flex-direction: column;\n  opacity: ", ";\n  width: 100%;\n  & > span {\n    font-size: var(--clear-font-size-label);\n  }\n"])), function (p) { return p.error ? 'var(--clear-error)' : 'inherit'; }, function (p) { return p.disabled ? 0.5 : 1; });
var InputBase = function (_a) {
    var error = _a.error, label = _a.label, props = __rest(_a, ["error", "label"]);
    return React.createElement("input", __assign({}, props));
};
var StyledInput = styled__default(InputBase)(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ", "\n"], ["\n  background-color: var(--clear-background);\n  color: var(--clear-", ");\n  border: 1px solid var(--clear-", ");\n  border-radius: var(--clear-unit);\n  padding: calc(var(--clear-unit) * 1.5);\n  font-size: inherit;\n  margin: calc(var(--clear-unit) / 2) 0;\n  width: 100%;\n  -webkit-appearance: none;\n  ", "\n  ",
    "\n"])), function (p) { return p.error ? 'error' : 'textColor'; }, function (p) { return p.error ? 'error' : 'border'; }, focusStyle, function (p) { return p.error && "\n    :focus {\n      box-shadow: 0 0 0 2px var(--clear-background), 0 0 0 4px var(--clear-error);\n    }\n  "; });
var Input = function (props) {
    var label = props.label, value = props.value, other = __rest(props, ["label", "value"]);
    return (React.createElement(StyledLabel, { disabled: other.disabled, error: other.error },
        React.createElement("span", null,
            label,
            other.required ? ' (Required)' : ''),
        React.createElement(StyledInput, __assign({}, other, { value: value || ' ' }))));
};
var templateObject_1$5, templateObject_2$1;

var Anchor = function (props) {
    var _a;
    var isExternal = Boolean((_a = props.href) === null || _a === void 0 ? void 0 : _a.match(/^http/));
    return (React.createElement("a", __assign({}, props, { target: isExternal ? '_blank' : props.target, rel: isExternal ? 'noopener noreferrer' : props.rel })));
};
var Link = styled__default(Anchor)(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  color: var(--clear-link);\n  ", "\n  &[target='_blank']::after {\n    content: ' [\\2197]';\n  }\n"], ["\n  color: var(--clear-link);\n  ", "\n  &[target='_blank']::after {\n    content: ' [\\\\2197]';\n  }\n"])), focusStyle);
var templateObject_1$6;

var Page = styled__default('main')(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ", "px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-text-color);\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"], ["\nmargin: 0 auto;\nmargin-bottom: calc(var(--clear-unit) * 15);\npadding: var(--clear-unit);\nwidth: ", "px;\nbackground-color: var(--clear-background);\ncolor: var(--clear-text-color);\nfont-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\nfont-size: var(--clear-font-size-default);\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nmax-width: 100%;\n&, & * {\n  box-sizing: border-box;\n}\n"])), numbers.width.main);
var templateObject_1$7;

var Paragraph = styled__default.p(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  line-height: 1.5;\n"], ["\n  line-height: 1.5;\n"])));
var templateObject_1$8;

var Table = styled__default('table')(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"], ["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"])));
var templateObject_1$9;

var TableHead = styled__default('thead')(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  th {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"], ["\n  th {\n    font-size: var(--clear-font-size-label);\n    text-align: left;\n    padding: var(--clear-unit);\n    padding-bottom: calc(var(--clear-unit) / 2);\n  }\n"])));
var templateObject_1$a;

var TableBody = styled__default('tbody')(templateObject_1$b || (templateObject_1$b = __makeTemplateObject([""], [""])));
var templateObject_1$b;

var TableCell = styled__default('td')(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  text-align: left;\n  padding: var(--clear-unit);\n"], ["\n  text-align: left;\n  padding: var(--clear-unit);\n"])));
var templateObject_1$c;

var TableRow = styled__default('tr')(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  &:nth-child(even) {\n    td {\n      background-color: var(--clear-zebra);\n    }\n    td:first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    td:last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"], ["\n  &:nth-child(even) {\n    td {\n      background-color: var(--clear-zebra);\n    }\n    td:first-child {\n      border-radius: var(--clear-unit) 0 0 var(--clear-unit);\n    }\n    td:last-child {\n      border-radius: 0 var(--clear-unit) var(--clear-unit) 0;\n    }\n  }\n"])));
var templateObject_1$d;

var ButtonBase = function (_a) {
    var primary = _a.primary, props = __rest(_a, ["primary"]);
    return React.createElement("button", __assign({}, props));
};
var Button = styled__default(ButtonBase)(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  background: var(--clear-border);\n  border-radius: var(--clear-unit);\n  border: none;\n  color: inherit;\n  ", ";\n  cursor: pointer;\n  ", ";\n  font-size: var(--clear-font-size-label);\n  margin: 0;\n  padding: var(--clear-unit) calc(var(--clear-unit) * 2);\n  ", "\n"], ["\n  background: var(--clear-border);\n  border-radius: var(--clear-unit);\n  border: none;\n  color: inherit;\n  ",
    ";\n  cursor: pointer;\n  ",
    ";\n  font-size: var(--clear-font-size-label);\n  margin: 0;\n  padding: var(--clear-unit) calc(var(--clear-unit) * 2);\n  ", "\n"])), function (p) { return p.primary && "\n    background: var(--clear-link);\n    color: var(--clear-background);\n  "; }, function (p) { return p.disabled && "\n    cursor: not-allowed;\n    opacity: 0.5;\n  "; }, focusStyle);
var templateObject_1$e;

exports.Button = Button;
exports.CSSVariables = CSSVariables;
exports.Code = Code;
exports.GlobalStyles = GlobalStyles;
exports.Grid = Grid;
exports.GridItem = GridItem;
exports.Header = Header;
exports.Input = Input;
exports.Link = Link;
exports.Page = Page;
exports.Paragraph = Paragraph;
exports.Table = Table;
exports.TableBody = TableBody;
exports.TableCell = TableCell;
exports.TableHead = TableHead;
exports.TableRow = TableRow;
exports.colors = colors;
exports.focusStyle = focusStyle;
exports.numbers = numbers;
