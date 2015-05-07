System.register(["./constants", "angular2/src/facade/lang"], function($__export) {
  "use strict";
  var ON_PUSH,
      StringWrapper,
      DirectiveIndex,
      DirectiveRecord;
  return {
    setters: [function($__m) {
      ON_PUSH = $__m.ON_PUSH;
    }, function($__m) {
      StringWrapper = $__m.StringWrapper;
    }],
    execute: function() {
      DirectiveIndex = (function() {
        function DirectiveIndex(elementIndex, directiveIndex) {
          this.elementIndex = elementIndex;
          this.directiveIndex = directiveIndex;
        }
        return ($traceurRuntime.createClass)(DirectiveIndex, {get name() {
            return (this.elementIndex + "_" + this.directiveIndex);
          }}, {});
      }());
      $__export("DirectiveIndex", DirectiveIndex);
      Object.defineProperty(DirectiveIndex, "parameters", {get: function() {
          return [[assert.type.number], [assert.type.number]];
        }});
      DirectiveRecord = (function() {
        function DirectiveRecord(directiveIndex, callOnAllChangesDone, callOnChange, changeDetection) {
          this.directiveIndex = directiveIndex;
          this.callOnAllChangesDone = callOnAllChangesDone;
          this.callOnChange = callOnChange;
          this.changeDetection = changeDetection;
        }
        return ($traceurRuntime.createClass)(DirectiveRecord, {isOnPushChangeDetection: function() {
            return StringWrapper.equals(this.changeDetection, ON_PUSH);
          }}, {});
      }());
      $__export("DirectiveRecord", DirectiveRecord);
      Object.defineProperty(DirectiveRecord, "parameters", {get: function() {
          return [[DirectiveIndex], [assert.type.boolean], [assert.type.boolean], [assert.type.string]];
        }});
    }
  };
});
//# sourceMappingURL=directive_record.js.map

//# sourceMappingURL=../../src/change_detection/directive_record.js.map