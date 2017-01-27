/**
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
*/

(function($) {
    var filter_definitions = {};
    var filter_class;
    var filterable_class;
    var attribute_name;
    var value_name;
    var group_name;
    var toggle_class_matched;
    var toggle_class_nomatched;
    var root_element;
    var debug_element_id;

    var registerListeners = function() {
        $("." + filter_class).on("click", doFilter);
    };

    var doFilter = function() {
        filter_definitions = {};
        $('.' + filter_class).each(function(i) {
            var filter = $(this);
            if (filter.prop("checked")) {
                var attribute = filter.data(attribute_name);
                var value = filter.data(value_name);
                var group = filter.data(group_name);
                var filter_string = "[data-" + attribute + "='" + value + "']";
                if (typeof filter_definitions[group] === "undefined") {
                    filter_definitions[group] = filter_string;
                } else {
                    filter_definitions[group] += ", " + filter_string;
                }
            }
        });
        var all = root_element.find('.' + filterable_class);
        $.each(filter_definitions, function(k, v) {
            all = $(all).filter(v);
        });

        $(".filterable").removeClass(toggle_class_matched);
        $(".filterable").addClass(toggle_class_nomatched);

        $(all).removeClass(toggle_class_nomatched);
        $(all).addClass(toggle_class_matched);
        $("#" + debug_element_id).html(JSON.stringify(filter_definitions));
    }

    $.fn.demano = function(config) {
        //return this.each(function() {
        root_element = this;
        config = config || {};
        filter_class = config.filter_class || "filter";
        filterable_class = config.filterable_class || "filterable";
        attribute_name = config.attribute_name || "attribute";
        value_name = config.value_name || "value";
        group_name = config.group_name || "group";
        toggle_class_matched = config.toggle_class_matched || "on";
        toggle_class_nomatched = config.toggle_class_nomatched || "off";
        debug_element_id = config.debug_element_id || null;
        registerListeners();
        doFilter();
        //});
        return this;
    };
}(jQuery));

$(".container").demano({debug_element_id: "filters_text"});
