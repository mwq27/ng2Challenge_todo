System.register(["angular2/di", "angular2/src/facade/async", "angular2/src/facade/collection", "angular2/src/facade/lang", "../api", "./view/view", "./view/proto_view", "./view/view_factory", "./view/view_hydrator", "./compiler/compiler", "./shadow_dom/shadow_dom_strategy", "./view/proto_view_builder", "angular2/src/dom/dom_adapter", "./view/view_container"], function($__export) {
  "use strict";
  var Injectable,
      Promise,
      PromiseWrapper,
      List,
      ListWrapper,
      isBlank,
      isPresent,
      BaseException,
      api,
      RenderView,
      RenderProtoView,
      ViewFactory,
      RenderViewHydrator,
      Compiler,
      ShadowDomStrategy,
      ProtoViewBuilder,
      DOM,
      ViewContainer,
      DirectDomProtoViewRef,
      DirectDomViewRef,
      DirectDomRenderer;
  function _resolveViewContainer(vc) {
    return _resolveView(vc.view).getOrCreateViewContainer(vc.elementIndex);
  }
  function _resolveView(viewRef) {
    return isPresent(viewRef) ? viewRef.delegate : null;
  }
  function _resolveProtoView(protoViewRef) {
    return isPresent(protoViewRef) ? protoViewRef.delegate : null;
  }
  function _wrapView(view) {
    return new DirectDomViewRef(view);
  }
  function _collectComponentChildViewRefs(view) {
    var target = arguments[1] !== (void 0) ? arguments[1] : null;
    if (isBlank(target)) {
      target = [];
    }
    ListWrapper.push(target, _wrapView(view));
    ListWrapper.forEach(view.componentChildViews, (function(view) {
      if (isPresent(view)) {
        _collectComponentChildViewRefs(view, target);
      }
    }));
    return target;
  }
  return {
    setters: [function($__m) {
      Injectable = $__m.Injectable;
    }, function($__m) {
      Promise = $__m.Promise;
      PromiseWrapper = $__m.PromiseWrapper;
    }, function($__m) {
      List = $__m.List;
      ListWrapper = $__m.ListWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
      BaseException = $__m.BaseException;
    }, function($__m) {
      api = $__m;
    }, function($__m) {
      RenderView = $__m.RenderView;
    }, function($__m) {
      RenderProtoView = $__m.RenderProtoView;
    }, function($__m) {
      ViewFactory = $__m.ViewFactory;
    }, function($__m) {
      RenderViewHydrator = $__m.RenderViewHydrator;
    }, function($__m) {
      Compiler = $__m.Compiler;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      ProtoViewBuilder = $__m.ProtoViewBuilder;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      ViewContainer = $__m.ViewContainer;
    }],
    execute: function() {
      Object.defineProperty(_resolveViewContainer, "parameters", {get: function() {
          return [[api.RenderViewContainerRef]];
        }});
      Object.defineProperty(_resolveView, "parameters", {get: function() {
          return [[DirectDomViewRef]];
        }});
      Object.defineProperty(_resolveProtoView, "parameters", {get: function() {
          return [[DirectDomProtoViewRef]];
        }});
      Object.defineProperty(_wrapView, "parameters", {get: function() {
          return [[RenderView]];
        }});
      DirectDomProtoViewRef = (function($__super) {
        function DirectDomProtoViewRef(delegate) {
          $traceurRuntime.superConstructor(DirectDomProtoViewRef).call(this);
          this.delegate = delegate;
        }
        return ($traceurRuntime.createClass)(DirectDomProtoViewRef, {}, {}, $__super);
      }(api.ProtoViewRef));
      $__export("DirectDomProtoViewRef", DirectDomProtoViewRef);
      Object.defineProperty(DirectDomProtoViewRef, "parameters", {get: function() {
          return [[RenderProtoView]];
        }});
      DirectDomViewRef = (function($__super) {
        function DirectDomViewRef(delegate) {
          $traceurRuntime.superConstructor(DirectDomViewRef).call(this);
          this.delegate = delegate;
        }
        return ($traceurRuntime.createClass)(DirectDomViewRef, {}, {}, $__super);
      }(api.ViewRef));
      $__export("DirectDomViewRef", DirectDomViewRef);
      Object.defineProperty(DirectDomViewRef, "parameters", {get: function() {
          return [[RenderView]];
        }});
      DirectDomRenderer = (function($__super) {
        function DirectDomRenderer(compiler, viewFactory, viewHydrator, shadowDomStrategy) {
          $traceurRuntime.superConstructor(DirectDomRenderer).call(this);
          this._compiler = compiler;
          this._viewFactory = viewFactory;
          this._viewHydrator = viewHydrator;
          this._shadowDomStrategy = shadowDomStrategy;
        }
        return ($traceurRuntime.createClass)(DirectDomRenderer, {
          createHostProtoView: function(componentId) {
            var rootElement = DOM.createElement('div');
            var hostProtoViewBuilder = new ProtoViewBuilder(rootElement);
            var elBinder = hostProtoViewBuilder.bindElement(rootElement, 'root element');
            elBinder.setComponentId(componentId);
            elBinder.bindDirective(0);
            this._shadowDomStrategy.processElement(null, componentId, rootElement);
            return PromiseWrapper.resolve(hostProtoViewBuilder.build());
          },
          createImperativeComponentProtoView: function(rendererId) {
            var protoViewBuilder = new ProtoViewBuilder(null);
            protoViewBuilder.setImperativeRendererId(rendererId);
            return PromiseWrapper.resolve(protoViewBuilder.build());
          },
          compile: function(template) {
            return this._compiler.compile(template);
          },
          mergeChildComponentProtoViews: function(protoViewRef, protoViewRefs) {
            _resolveProtoView(protoViewRef).mergeChildComponentProtoViews(ListWrapper.map(protoViewRefs, _resolveProtoView));
          },
          createViewInContainer: function(vcRef, atIndex, protoViewRef) {
            var view = this._viewFactory.getView(_resolveProtoView(protoViewRef));
            var vc = _resolveViewContainer(vcRef);
            this._viewHydrator.hydrateViewInViewContainer(vc, view);
            vc.insert(view, atIndex);
            return _collectComponentChildViewRefs(view);
          },
          destroyViewInContainer: function(vcRef, atIndex) {
            var vc = _resolveViewContainer(vcRef);
            var view = vc.detach(atIndex);
            this._viewHydrator.dehydrateViewInViewContainer(vc, view);
            this._viewFactory.returnView(view);
          },
          insertViewIntoContainer: function(vcRef) {
            var atIndex = arguments[1] !== (void 0) ? arguments[1] : -1;
            var viewRef = arguments[2];
            _resolveViewContainer(vcRef).insert(_resolveView(viewRef), atIndex);
          },
          detachViewFromContainer: function(vcRef, atIndex) {
            _resolveViewContainer(vcRef).detach(atIndex);
          },
          createDynamicComponentView: function(hostViewRef, elementIndex, componentViewRef) {
            var hostView = _resolveView(hostViewRef);
            var componentView = this._viewFactory.getView(_resolveProtoView(componentViewRef));
            this._viewHydrator.hydrateDynamicComponentView(hostView, elementIndex, componentView);
            return _collectComponentChildViewRefs(componentView);
          },
          destroyDynamicComponentView: function(hostViewRef, elementIndex) {
            throw new BaseException('Not supported yet');
          },
          createInPlaceHostView: function(parentViewRef, hostElementSelector, hostProtoViewRef) {
            var parentView = _resolveView(parentViewRef);
            var hostView = this._viewFactory.createInPlaceHostView(hostElementSelector, _resolveProtoView(hostProtoViewRef));
            this._viewHydrator.hydrateInPlaceHostView(parentView, hostView);
            return _collectComponentChildViewRefs(hostView);
          },
          destroyInPlaceHostView: function(parentViewRef, hostViewRef) {
            var parentView = _resolveView(parentViewRef);
            var hostView = _resolveView(hostViewRef);
            this._viewHydrator.dehydrateInPlaceHostView(parentView, hostView);
          },
          setImperativeComponentRootNodes: function(parentViewRef, elementIndex, nodes) {
            var parentView = _resolveView(parentViewRef);
            var hostElement = parentView.boundElements[elementIndex];
            var componentView = parentView.componentChildViews[elementIndex];
            if (isBlank(componentView)) {
              throw new BaseException(("There is no componentChildView at index " + elementIndex));
            }
            if (isBlank(componentView.proto.imperativeRendererId)) {
              throw new BaseException("This component view has no imperative renderer");
            }
            ViewContainer.removeViewNodes(componentView);
            componentView.rootNodes = nodes;
            this._shadowDomStrategy.attachTemplate(hostElement, componentView);
          },
          setElementProperty: function(viewRef, elementIndex, propertyName, propertyValue) {
            _resolveView(viewRef).setElementProperty(elementIndex, propertyName, propertyValue);
          },
          setText: function(viewRef, textNodeIndex, text) {
            _resolveView(viewRef).setText(textNodeIndex, text);
          },
          setEventDispatcher: function(viewRef, dispatcher) {
            _resolveView(viewRef).setEventDispatcher(dispatcher);
          }
        }, {}, $__super);
      }(api.Renderer));
      $__export("DirectDomRenderer", DirectDomRenderer);
      Object.defineProperty(DirectDomRenderer, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(DirectDomRenderer, "parameters", {get: function() {
          return [[Compiler], [ViewFactory], [RenderViewHydrator], [ShadowDomStrategy]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.compile, "parameters", {get: function() {
          return [[api.ViewDefinition]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.mergeChildComponentProtoViews, "parameters", {get: function() {
          return [[api.ProtoViewRef], [assert.genericType(List, api.ProtoViewRef)]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.createViewInContainer, "parameters", {get: function() {
          return [[api.RenderViewContainerRef], [assert.type.number], [api.ProtoViewRef]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.destroyViewInContainer, "parameters", {get: function() {
          return [[api.RenderViewContainerRef], [assert.type.number]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.insertViewIntoContainer, "parameters", {get: function() {
          return [[api.RenderViewContainerRef], [], [api.ViewRef]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.detachViewFromContainer, "parameters", {get: function() {
          return [[api.RenderViewContainerRef], [assert.type.number]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.createDynamicComponentView, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.number], [api.ProtoViewRef]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.destroyDynamicComponentView, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.number]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.createInPlaceHostView, "parameters", {get: function() {
          return [[api.ViewRef], [], [api.ProtoViewRef]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.destroyInPlaceHostView, "parameters", {get: function() {
          return [[api.ViewRef], [api.ViewRef]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.setImperativeComponentRootNodes, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.number], [List]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.setElementProperty, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.number], [assert.type.string], [assert.type.any]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.setText, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.number], [assert.type.string]];
        }});
      Object.defineProperty(DirectDomRenderer.prototype.setEventDispatcher, "parameters", {get: function() {
          return [[api.ViewRef], [assert.type.any]];
        }});
    }
  };
});
//# sourceMappingURL=direct_dom_renderer.js.map

//# sourceMappingURL=../../../src/render/dom/direct_dom_renderer.js.map