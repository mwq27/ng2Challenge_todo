System.register(["angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "./view"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      BaseException,
      ListWrapper,
      MapWrapper,
      List,
      DOM,
      viewModule,
      ViewContainer;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      List = $__m.List;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      viewModule = $__m;
    }],
    execute: function() {
      ViewContainer = (function() {
        function ViewContainer(parentView, boundElementIndex) {
          this.parentView = parentView;
          this.boundElementIndex = boundElementIndex;
          this.views = [];
        }
        return ($traceurRuntime.createClass)(ViewContainer, {
          get: function(index) {
            return this.views[index];
          },
          size: function() {
            return this.views.length;
          },
          _siblingToInsertAfter: function(index) {
            if (index == 0)
              return this.parentView.boundElements[this.boundElementIndex];
            return ListWrapper.last(this.views[index - 1].rootNodes);
          },
          _checkHydrated: function() {
            if (!this.parentView.hydrated)
              throw new BaseException('Cannot change dehydrated ViewContainer');
          },
          _getDirectParentLightDom: function() {
            return this.parentView.getDirectParentLightDom(this.boundElementIndex);
          },
          clear: function() {
            this._checkHydrated();
            for (var i = this.views.length - 1; i >= 0; i--) {
              this.detach(i);
            }
            if (isPresent(this._getDirectParentLightDom())) {
              this._getDirectParentLightDom().redistribute();
            }
          },
          insert: function(view) {
            var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
            this._checkHydrated();
            if (atIndex == -1)
              atIndex = this.views.length;
            ListWrapper.insert(this.views, atIndex, view);
            if (isBlank(this._getDirectParentLightDom())) {
              ViewContainer.moveViewNodesAfterSibling(this._siblingToInsertAfter(atIndex), view);
            } else {
              this._getDirectParentLightDom().redistribute();
            }
            if (isPresent(this.parentView.hostLightDom)) {
              this.parentView.hostLightDom.redistribute();
            }
            return view;
          },
          detach: function(atIndex) {
            this._checkHydrated();
            var detachedView = this.get(atIndex);
            ListWrapper.removeAt(this.views, atIndex);
            if (isBlank(this._getDirectParentLightDom())) {
              ViewContainer.removeViewNodes(detachedView);
            } else {
              this._getDirectParentLightDom().redistribute();
            }
            if (isPresent(this.parentView.hostLightDom)) {
              this.parentView.hostLightDom.redistribute();
            }
            return detachedView;
          },
          contentTagContainers: function() {
            return this.views;
          },
          nodes: function() {
            var r = [];
            for (var i = 0; i < this.views.length; ++i) {
              r = ListWrapper.concat(r, this.views[i].rootNodes);
            }
            return r;
          }
        }, {
          moveViewNodesAfterSibling: function(sibling, view) {
            for (var i = view.rootNodes.length - 1; i >= 0; --i) {
              DOM.insertAfter(sibling, view.rootNodes[i]);
            }
          },
          removeViewNodes: function(view) {
            var len = view.rootNodes.length;
            if (len == 0)
              return ;
            var parent = view.rootNodes[0].parentNode;
            for (var i = len - 1; i >= 0; --i) {
              DOM.removeChild(parent, view.rootNodes[i]);
            }
          }
        });
      }());
      $__export("ViewContainer", ViewContainer);
      Object.defineProperty(ViewContainer, "parameters", {get: function() {
          return [[viewModule.RenderView], [assert.type.number]];
        }});
      Object.defineProperty(ViewContainer.prototype.get, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ViewContainer.prototype._siblingToInsertAfter, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
      Object.defineProperty(ViewContainer.prototype.detach, "parameters", {get: function() {
          return [[assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=view_container.js.map

//# sourceMappingURL=../../../../src/render/dom/view/view_container.js.map