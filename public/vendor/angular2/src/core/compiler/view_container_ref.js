System.register(["angular2/src/facade/collection", "angular2/di", "angular2/src/core/compiler/element_injector", "angular2/src/facade/lang", "./view", "./view_manager"], function($__export) {
  "use strict";
  var ListWrapper,
      MapWrapper,
      List,
      Injector,
      eiModule,
      isPresent,
      isBlank,
      viewModule,
      avmModule,
      ViewContainerRef;
  return {
    setters: [function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      List = $__m.List;
    }, function($__m) {
      Injector = $__m.Injector;
    }, function($__m) {
      eiModule = $__m;
    }, function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      avmModule = $__m;
    }],
    execute: function() {
      ViewContainerRef = (function() {
        function ViewContainerRef(viewManager, location, defaultProtoView) {
          this._viewManager = viewManager;
          this._location = location;
          this._defaultProtoView = defaultProtoView;
        }
        return ($traceurRuntime.createClass)(ViewContainerRef, {
          _getViews: function() {
            var vc = this._location.hostView.viewContainers[this._location.boundElementIndex];
            return isPresent(vc) ? vc.views : [];
          },
          clear: function() {
            for (var i = this.length - 1; i >= 0; i--) {
              this.remove(i);
            }
          },
          get: function(index) {
            return this._getViews()[index];
          },
          get length() {
            return this._getViews().length;
          },
          create: function() {
            var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
            var protoView = arguments[1] !== (void 0) ? arguments[1] : null;
            var injector = arguments[2] !== (void 0) ? arguments[2] : null;
            if (atIndex == -1)
              atIndex = this.length;
            if (isBlank(protoView)) {
              protoView = this._defaultProtoView;
            }
            return this._viewManager.createViewInContainer(this._location, atIndex, protoView, injector);
          },
          insert: function(view) {
            var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
            if (atIndex == -1)
              atIndex = this.length;
            return this._viewManager.attachViewInContainer(this._location, atIndex, view);
          },
          indexOf: function(view) {
            return ListWrapper.indexOf(this._getViews(), view);
          },
          remove: function() {
            var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
            if (atIndex == -1)
              atIndex = this.length - 1;
            this._viewManager.destroyViewInContainer(this._location, atIndex);
          },
          detach: function() {
            var atIndex = arguments[0] !== (void 0) ? arguments[0] : -1;
            if (atIndex == -1)
              atIndex = this.length - 1;
            return this._viewManager.detachViewInContainer(this._location, atIndex);
          }
        }, {});
      }());
      $__export("ViewContainerRef", ViewContainerRef);
      Object.defineProperty(ViewContainerRef, "parameters", {get: function() {
          return [[avmModule.AppViewManager], [eiModule.ElementRef], [viewModule.AppProtoView]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.get, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.create, "parameters", {get: function() {
          return [[assert.type.number], [viewModule.AppProtoView], [Injector]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.insert, "parameters", {get: function() {
          return [[viewModule.AppView], [assert.type.number]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.indexOf, "parameters", {get: function() {
          return [[viewModule.AppView]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.remove, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ViewContainerRef.prototype.detach, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=view_container_ref.js.map

//# sourceMappingURL=../../../src/core/compiler/view_container_ref.js.map