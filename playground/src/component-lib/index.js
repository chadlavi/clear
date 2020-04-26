/* eslint-disable */
import styled, { createGlobalStyle } from 'styled-components';
import { createElement } from 'react';

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

var CSSBaseline = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  :root {\n    --background: ", ";\n    --border: ", ";\n    --error: ", ";\n    --link: ", ";\n    --text-color: ", ";\n    --zebra: ", ";\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --background: ", ";\n      --border: ", ";\n      --error: ", ";\n      --link: ", ";\n      --text-color: ", ";\n      --zebra: ", ";\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--link);\n  }\n\n  body {\n    margin: 0;\n    background-color: var(--background);\n    color: var(--text-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: ", "px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"], ["\n  :root {\n    --background: ", ";\n    --border: ", ";\n    --error: ", ";\n    --link: ", ";\n    --text-color: ", ";\n    --zebra: ", ";\n  }\n\n  @media (prefers-color-scheme: dark) {\n    :root {\n      --background: ", ";\n      --border: ", ";\n      --error: ", ";\n      --link: ", ";\n      --text-color: ", ";\n      --zebra: ", ";\n    }\n  }\n\n  * {\n    box-sizing: border-box;\n  }\n\n  *:focus {\n    outline: none;\n    box-shadow: 0 0 0 2px var(--background), 0 0 0 4px var(--link);\n  }\n\n  body {\n    margin: 0;\n    background-color: var(--background);\n    color: var(--text-color);\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;\n    font-size: ", "px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n"])), colors.light.background, colors.light.background, colors.light.error, colors.light.link, colors.light.textColor, colors.light.zebra, colors.dark.background, colors.dark.border, colors.dark.error, colors.dark.link, colors.dark.textColor, colors.dark.zebra, numbers.fontSize.default);
var templateObject_1;

var StyledDiv = function (props) {
    var Div = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n    display: flex;\n    flex-wrap: wrap;\n    padding: ", "px;\n    & > div {\n      padding: ", "px;\n    }\n  "], ["\n    display: flex;\n    flex-wrap: wrap;\n    padding: ", "px;\n    & > div {\n      padding: ", "px;\n    }\n  "])), props.spacing ? props.spacing / 2 : 0, props.spacing ? props.spacing / 2 : 0);
    return createElement(Div, null, props.children);
};
var Grid = function (props) {
    return (createElement(StyledDiv, __assign({}, props)));
};
var templateObject_1$1;

var StyledDiv$1 = function (props) {
    var Div = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n    display: flex;\n    flex-basis: calc(100% * ", " / 12);\n    width: calc(100% * ", " / 12);\n    @media only screen and (max-width: ", "px) {\n      flex-basis: 100%;\n      width: 100%;\n    }\n  "], ["\n    display: flex;\n    flex-basis: calc(100% * ", " / 12);\n    width: calc(100% * ", " / 12);\n    @media only screen and (max-width: ", "px) {\n      flex-basis: 100%;\n      width: 100%;\n    }\n  "])), props.size, props.size, numbers.breakpoint.xs);
    return createElement(Div, null, props.children);
};
var GridItem = function (props) {
    var children = props.children, size = props.size;
    return (createElement(StyledDiv$1, { size: size || 12 }, children));
};
var templateObject_1$2;

var StyledLabel = styled.label(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n    color: ", ";\n    display: flex;\n    flex-direction: column;\n    opacity: ", ";\n    width: 100%;\n    & > span {\n      font-size: ", "px;\n    }\n  "], ["\n    color: ", ";\n    display: flex;\n    flex-direction: column;\n    opacity: ", ";\n    width: 100%;\n    & > span {\n      font-size: ", "px;\n    }\n  "])), function (p) { return p.error ? 'var(--error)' : 'inherit'; }, function (p) { return p.disabled ? 0.5 : 1; }, numbers.fontSize.label);
var StyledInput = styled.input(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background-color: var(--background);\n  color: var(--", ");\n  border: 1px solid var(--", ");\n  border-radius: ", "px;\n  padding: ", "px;\n  font-size: inherit;\n  margin: ", "px 0;\n  width: 100%;\n  -webkit-appearance: none;\n"], ["\n  background-color: var(--background);\n  color: var(--", ");\n  border: 1px solid var(--", ");\n  border-radius: ", "px;\n  padding: ", "px;\n  font-size: inherit;\n  margin: ", "px 0;\n  width: 100%;\n  -webkit-appearance: none;\n"])), function (p) { return p.error ? 'error' : 'textColor'; }, function (p) { return p.error ? 'error' : 'border'; }, numbers.unit, numbers.unit * 1.5, numbers.unit / 2);
var Input = function (props) {
    var label = props.label, value = props.value, other = __rest(props, ["label", "value"]);
    return (createElement(StyledLabel, { disabled: other.disabled, error: other.error },
        createElement("span", null, label),
        createElement(StyledInput, __assign({}, other, { value: value || ' ' }))));
};
var templateObject_1$3, templateObject_2;

var StyledLink = styled.a(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  color: var(--link);\n  &[target='_blank']::after {\n    content: ' [\\2197]';\n  }\n"], ["\n  color: var(--link);\n  &[target='_blank']::after {\n    content: ' [\\\\2197]';\n  }\n"])));
var Link = function (props) {
    var external = props.external, other = __rest(props, ["external"]);
    return (createElement(StyledLink, __assign({}, other, { target: external ? '_blank' : other.target, title: other.title || other.href })));
};
var templateObject_1$4;

var StyledPage = styled.main(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\nmargin: 0 auto;\npadding: ", "px;\nwidth: ", "px;\nmax-width: 100%;\n"], ["\nmargin: 0 auto;\npadding: ", "px;\nwidth: ", "px;\nmax-width: 100%;\n"])), numbers.unit, numbers.width.main);
var Page = function (props) { return (createElement(StyledPage, __assign({}, props))); };
var templateObject_1$5;

var StyledTable = styled.table(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"], ["\n  border-collapse: collapse;\n  flex-basis: 100%;\n  width: 100%;\n"])));
var Table = function (props) { return (createElement(StyledTable, __assign({}, props))); };
var templateObject_1$6;

var StyledTableHead = styled.thead(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject([""], [""])));
var TableHead = function (props) { return (createElement(StyledTableHead, __assign({}, props))); };
var templateObject_1$7;

var StyledTableBody = styled.tbody(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject([""], [""])));
var TableBody = function (props) { return (createElement(StyledTableBody, __assign({}, props))); };
var templateObject_1$8;

var StyledTd = styled.td(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  text-align: left;\n  padding: ", "px;\n"], ["\n  text-align: left;\n  padding: ", "px;\n"])), numbers.unit);
var Td = function (props) { return (createElement(StyledTd, __assign({}, props))); };
var templateObject_1$9;

var StyledTh = styled.th(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  font-weight: normal;\n  font-size: 0.8rem;\n  padding-bottom: 0;\n  text-align: left;\n  padding: 8px;\n"], ["\n  font-weight: normal;\n  font-size: 0.8rem;\n  padding-bottom: 0;\n  text-align: left;\n  padding: 8px;\n"])));
var Th = function (props) { return (createElement(StyledTh, __assign({}, props))); };
var templateObject_1$a;

var StyledTr = styled.tr(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  &:nth-child(even) td {\n    background-color: var(--zebra);\n  }\n  &:nth-child(even) td:first-child {\n    border-radius: ", "px 0 0 ", "px;\n  }\n  &:nth-child(even) td:last-child {\n    border-radius: 0 ", "px ", "px 0;\n  }\n"], ["\n  &:nth-child(even) td {\n    background-color: var(--zebra);\n  }\n  &:nth-child(even) td:first-child {\n    border-radius: ", "px 0 0 ", "px;\n  }\n  &:nth-child(even) td:last-child {\n    border-radius: 0 ", "px ", "px 0;\n  }\n"])), numbers.unit, numbers.unit, numbers.unit, numbers.unit);
var Tr = function (props) { return (createElement(StyledTr, __assign({}, props))); };
var templateObject_1$b;

export { CSSBaseline, Grid, GridItem, Input, Link, Page, Table, TableBody, TableHead, Td, Th, Tr };
