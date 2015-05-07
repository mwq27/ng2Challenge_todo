System.register(["./proto_change_detector", "./pipes/pipe_registry", "./pipes/iterable_changes", "./pipes/keyvalue_changes", "./pipes/async_pipe", "./pipes/null_pipe", "./constants", "./interfaces", "angular2/di"], function($__export) {
  "use strict";
  var DynamicProtoChangeDetector,
      JitProtoChangeDetector,
      PipeRegistry,
      IterableChangesFactory,
      KeyValueChangesFactory,
      AsyncPipeFactory,
      NullPipeFactory,
      DEFAULT,
      ChangeDetection,
      ProtoChangeDetector,
      Injectable,
      keyValDiff,
      iterableDiff,
      async,
      defaultPipes,
      DynamicChangeDetection,
      JitChangeDetection,
      defaultPipeRegistry;
  return {
    setters: [function($__m) {
      DynamicProtoChangeDetector = $__m.DynamicProtoChangeDetector;
      JitProtoChangeDetector = $__m.JitProtoChangeDetector;
    }, function($__m) {
      PipeRegistry = $__m.PipeRegistry;
    }, function($__m) {
      IterableChangesFactory = $__m.IterableChangesFactory;
    }, function($__m) {
      KeyValueChangesFactory = $__m.KeyValueChangesFactory;
    }, function($__m) {
      AsyncPipeFactory = $__m.AsyncPipeFactory;
    }, function($__m) {
      NullPipeFactory = $__m.NullPipeFactory;
    }, function($__m) {
      DEFAULT = $__m.DEFAULT;
    }, function($__m) {
      ChangeDetection = $__m.ChangeDetection;
      ProtoChangeDetector = $__m.ProtoChangeDetector;
    }, function($__m) {
      Injectable = $__m.Injectable;
    }],
    execute: function() {
      keyValDiff = [new KeyValueChangesFactory(), new NullPipeFactory()];
      $__export("keyValDiff", keyValDiff);
      iterableDiff = [new IterableChangesFactory(), new NullPipeFactory()];
      $__export("iterableDiff", iterableDiff);
      async = [new AsyncPipeFactory(), new NullPipeFactory()];
      $__export("async", async);
      defaultPipes = {
        "iterableDiff": iterableDiff,
        "keyValDiff": keyValDiff,
        "async": async
      };
      $__export("defaultPipes", defaultPipes);
      DynamicChangeDetection = (function($__super) {
        function DynamicChangeDetection(registry) {
          $traceurRuntime.superConstructor(DynamicChangeDetection).call(this);
          this.registry = registry;
        }
        return ($traceurRuntime.createClass)(DynamicChangeDetection, {createProtoChangeDetector: function(name) {
            var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
            return new DynamicProtoChangeDetector(this.registry, changeControlStrategy);
          }}, {}, $__super);
      }(ChangeDetection));
      $__export("DynamicChangeDetection", DynamicChangeDetection);
      Object.defineProperty(DynamicChangeDetection, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DynamicChangeDetection, "parameters", {get: function() {
          return [[PipeRegistry]];
        }});
      Object.defineProperty(DynamicChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      JitChangeDetection = (function($__super) {
        function JitChangeDetection(registry) {
          $traceurRuntime.superConstructor(JitChangeDetection).call(this);
          this.registry = registry;
        }
        return ($traceurRuntime.createClass)(JitChangeDetection, {createProtoChangeDetector: function(name) {
            var changeControlStrategy = arguments[1] !== (void 0) ? arguments[1] : DEFAULT;
            return new JitProtoChangeDetector(this.registry, changeControlStrategy);
          }}, {}, $__super);
      }(ChangeDetection));
      $__export("JitChangeDetection", JitChangeDetection);
      Object.defineProperty(JitChangeDetection, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(JitChangeDetection, "parameters", {get: function() {
          return [[PipeRegistry]];
        }});
      Object.defineProperty(JitChangeDetection.prototype.createProtoChangeDetector, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.string]];
        }});
      defaultPipeRegistry = new PipeRegistry(defaultPipes);
      $__export("defaultPipeRegistry", defaultPipeRegistry);
    }
  };
});
//# sourceMappingURL=change_detection.js.map

//# sourceMappingURL=../../src/change_detection/change_detection.js.map