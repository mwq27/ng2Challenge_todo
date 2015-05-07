System.register(["angular2/src/facade/collection", "./parser/locals", "./constants", "./binding_record"], function($__export) {
  "use strict";
  var List,
      Locals,
      DEFAULT,
      BindingRecord,
      ProtoChangeDetector,
      ChangeDetection,
      ChangeDispatcher,
      ChangeDetector;
  return {
    setters: [function($__m) {
      List = $__m.List;
    }, function($__m) {
      Locals = $__m.Locals;
    }, function($__m) {
      DEFAULT = $__m.DEFAULT;
    }, function($__m) {
      BindingRecord = $__m.BindingRecord;
    }],
    execute: function() {
      ProtoChangeDetector = (function() {
        function ProtoChangeDetector() {}
        return ($traceurRuntime.createClass)(ProtoChangeDetector, {instantiate: function(dispatcher, bindingRecords, variableBindings, directiveRecords) {
            return null;
          }}, {});
      }());
      $__export("ProtoChangeDetector", ProtoChangeDetector);
      Object.defineProperty(ProtoChangeDetector.prototype.instantiate, "parameters", {get: function() {
          return [[assert.type.any], [List], [List], [List]];
        }});
      ChangeDetection = (function() {
        function ChangeDetection() {}
        return ($traceurRuntime.createClass)(ChangeDetection, {createProtoChangeDetector: function(name) {
            var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
            return null;
          }}, {});
      }());
      $__export("ChangeDetection", ChangeDetection);
      Object.defineProperty(ChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      ChangeDispatcher = (function() {
        function ChangeDispatcher() {}
        return ($traceurRuntime.createClass)(ChangeDispatcher, {notifyOnBinding: function(bindingRecord, value) {}}, {});
      }());
      $__export("ChangeDispatcher", ChangeDispatcher);
      Object.defineProperty(ChangeDispatcher.prototype.notifyOnBinding, "parameters", {get: function() {
          return [[BindingRecord], [assert.type.any]];
        }});
      ChangeDetector = (function() {
        function ChangeDetector() {}
        return ($traceurRuntime.createClass)(ChangeDetector, {
          addChild: function(cd) {},
          addShadowDomChild: function(cd) {},
          removeChild: function(cd) {},
          removeShadowDomChild: function(cd) {},
          remove: function() {},
          hydrate: function(context, locals, directives) {},
          dehydrate: function() {},
          markPathToRootAsCheckOnce: function() {},
          detectChanges: function() {},
          checkNoChanges: function() {}
        }, {});
      }());
      $__export("ChangeDetector", ChangeDetector);
      Object.defineProperty(ChangeDetector.prototype.addChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(ChangeDetector.prototype.addShadowDomChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(ChangeDetector.prototype.removeChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(ChangeDetector.prototype.removeShadowDomChild, "parameters", {get: function() {
          return [[ChangeDetector]];
        }});
      Object.defineProperty(ChangeDetector.prototype.hydrate, "parameters", {get: function() {
          return [[assert.type.any], [Locals], [assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=interfaces.js.map

//# sourceMappingURL=../../src/change_detection/interfaces.js.map