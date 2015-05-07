System.register([], function($__export) {
  "use strict";
  var NO_CHANGE,
      Pipe;
  return {
    setters: [],
    execute: function() {
      NO_CHANGE = new Object();
      $__export("NO_CHANGE", NO_CHANGE);
      Pipe = (function() {
        function Pipe() {}
        return ($traceurRuntime.createClass)(Pipe, {
          supports: function(obj) {
            return false;
          },
          onDestroy: function() {},
          transform: function(value) {
            return null;
          }
        }, {});
      }());
      $__export("Pipe", Pipe);
      Object.defineProperty(Pipe.prototype.transform, "parameters", {get: function() {
          return [[assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=pipe.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/pipe.js.map