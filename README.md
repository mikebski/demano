# Demano - Filtering for JQuery

## License ##

Copyright (c) 2014–2017 Mike Baranski <http://www.mikeski.net>

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

## About ##

Demano is a JQuery plugin to assist multiple filtering options on a page.  The general idea is that you create groups of filters and have a number of objects on the page that have CSS styles applied to them based on the filter selections.  See the [local demo](https://jsfiddle.net/mbaranski/q2rarzfn/ "Demano Example") for an example.

## Demos ##

There are 2 easy demos, to see this in action you can view the [lcoal demo](https://jsfiddle.net/mbaranski/q2rarzfn/ "Demano Example") or you can see an interactive demo at [jsfiddle.net](https://jsfiddle.net/mbaranski/q2rarzfn/ "JSFiddle Demano")

## Quickstart ##

`bower install demano` to install, then include `jquery.demano.js` in your script.  Make sure you also include JQuery.

Use demano by putting all your filters and filterable items inside a containing element with an id, and then do `$("#container_div_id").demano()`

That's it.

## Installation ##

`bower install demano`

Install however else you choose.  The only dependency is `jquery.demano.js` in the `js/main` directory of this repo.

## Usage ##

Demano filters act on groups of `filterable` elements.  Each element with the `filterable` class may also specify any `data-something` attributes with values to be filtered on.

Filters are created in groups, with each group filtering on a specific `data-` attribute.  For filters, a checkbox is created and given the following attributes:

* `data-attribute`
* `data-value`
* `data-group`

Filters with the same `data-group` are logical `OR` filters when multiple ones are selected.  Filters with different data groups can be though of as `AND` filters when filters from more than 1 group are selected.

The filter, when checked, will find all of the `filterable` elements with a matching attribute.  Giving multiple filters with the same group creates a logical `OR` condition.  That is, if 2 filters are created with `data-group="cats"`, `data-attribute="category"` and `data-value="Group 1"` for the first and `data-value="Group 2"` for the second, it would match all `filterable` elements that have `data-category=="Group 1" || data-category="Group 2"`.

    	<input
		  class="filter"
		  name="a"
		  data-attribute="category"
		  data-value="Group 1"
		  data-group="cats"
	 />
         <input
	         id="b"
	         class="filter"
	         type="checkbox"
	         name="b"
	         data-value="Group 2"
	 />
	<div class="filterable" data-category="Group 1"> a </div>
	<div class="filterable" data-category="Group 1"> b </div>
	<div class="filterable" data-category="Group 2"> c </div>

See the [lcoal demo](https://jsfiddle.net/mbaranski/q2rarzfn/ "Demano Example") for an example.

## Configuration Options
The following options are available.  Pass them as an object to the `demano` function, or use the (IMO) sensible default values

|Option | Values | Default Value | Description |
--------|--------|---------------|-------------|
| `filter_class` | String | `filter` | Class of the checkboxes that contain the filter definition |
| `filterable_class` | String | `filterable` | class of the checkboxes that are filtered |
| `attribute_name` | String | `attribute` | Name of the attribute that this filter uses to find the `filterable` attribute to search |
| `value_name` | String | `value`  | Value to match.  In other words, with `attribute_name` above this is what the attribute value equals |
| `group_name` | String | `group` | The group name of this filter to create logical `OR` conditions with other filters that have the same group |
| `toggle_class_matched` | String | `on` | Class to assign to `filterable` elements that are matches |
| `toggle_class_nomatched` | String | `off` | Class to assign to `filterable` elements that are not matches |
| `debug_element_id` | String | `null` | ID of an element to display the JSON value of the current filter state.  Helpful for debugging and defaults to `null`.  The [lcoal demo](https://jsfiddle.net/mbaranski/q2rarzfn/ "Demano Example") uses this feature |
