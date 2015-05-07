System.register(["angular2/di", "angular2/src/facade/lang", "angular2/src/facade/collection", "angular2/src/dom/dom_adapter", "../shadow_dom/content_tag", "../shadow_dom/shadow_dom_strategy", "angular2/src/render/dom/events/event_manager", "./proto_view", "./view", "../util"], function($__export) {
  "use strict";
  var OpaqueToken,
      Inject,
      Injectable,
      int,
      isPresent,
      isBlank,
      BaseException,
      ListWrapper,
      MapWrapper,
      Map,
      StringMapWrapper,
      List,
      DOM,
      Content,
      ShadowDomStrategy,
      EventManager,
      pvModule,
      viewModule,
      NG_BINDING_CLASS_SELECTOR,
      NG_BINDING_CLASS,
      VIEW_POOL_CAPACITY,
      ViewFactory;
  return {
    setters: [function($__m) {
      OpaqueToken = $__m.OpaqueToken;
      Inject = $__m.Inject;
      Injectable = $__m.Injectable;
    }, function($__m) {
      int = $__m.int;
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
      BaseException = $__m.BaseException;
    }, function($__m) {
      ListWrapper = $__m.ListWrapper;
      MapWrapper = $__m.MapWrapper;
      Map = $__m.Map;
      StringMapWrapper = $__m.StringMapWrapper;
      List = $__m.List;
    }, function($__m) {
      DOM = $__m.DOM;
    }, function($__m) {
      Content = $__m.Content;
    }, function($__m) {
      ShadowDomStrategy = $__m.ShadowDomStrategy;
    }, function($__m) {
      EventManager = $__m.EventManager;
    }, function($__m) {
      pvModule = $__m;
    }, function($__m) {
      viewModule = $__m;
    }, function($__m) {
      NG_BINDING_CLASS_SELECTOR = $__m.NG_BINDING_CLASS_SELECTOR;
      NG_BINDING_CLASS = $__m.NG_BINDING_CLASS;
    }],
    execute: function() {
      VIEW_POOL_CAPACITY = 'render.ViewFactory.viewPoolCapacity';
      $__export("VIEW_POOL_CAPACITY", VIEW_POOL_CAPACITY);
      ViewFactory = (function() {
        function ViewFactory(poolCapacityPerProtoView, eventManager, shadowDomStrategy) {
          this._poolCapacityPerProtoView = poolCapacityPerProtoView;
          this._pooledViewsPerProtoView = MapWrapper.create();
          this._eventManager = eventManager;
          this._shadowDomStrategy = shadowDomStrategy;
        }
        return ($traceurRuntime.createClass)(ViewFactory, {
          createInPlaceHostView: function(hostElementSelector, hostProtoView) {
            return this._createView(hostProtoView, hostElementSelector);
          },
          getView: function(protoView) {
            var pooledViews = MapWrapper.get(this._pooledViewsPerProtoView, protoView);
            if (isPresent(pooledViews) && pooledViews.length > 0) {
              return ListWrapper.removeLast(pooledViews);
            }
            return this._createView(protoView, null);
          },
          returnView: function(view) {
            if (view.hydrated) {
              throw new BaseException('View is still hydrated');
            }
            var protoView = view.proto;
            var pooledViews = MapWrapper.get(this._pooledViewsPerProtoView, protoView);
            if (isBlank(pooledViews)) {
              pooledViews = [];
              MapWrapper.set(this._pooledViewsPerProtoView, protoView, pooledViews);
            }
            if (pooledViews.length < this._poolCapacityPerProtoView) {
              ListWrapper.push(pooledViews, view);
            }
          },
          _createView: function(protoView, inplaceElement) {
            if (isPresent(protoView.imperativeRendererId)) {
              return new viewModule.RenderView(protoView, [], [], [], []);
            }
            var rootElementClone = isPresent(inplaceElement) ? inplaceElement : DOM.importIntoDoc(protoView.element);
            var elementsWithBindingsDynamic;
            if (protoView.isTemplateElement) {
              elementsWithBindingsDynamic = DOM.querySelectorAll(DOM.content(rootElementClone), NG_BINDING_CLASS_SELECTOR);
            } else {
              elementsWithBindingsDynamic = DOM.getElementsByClassName(rootElementClone, NG_BINDING_CLASS);
            }
            var elementsWithBindings = ListWrapper.createFixedSize(elementsWithBindingsDynamic.length);
            for (var binderIdx = 0; binderIdx < elementsWithBindingsDynamic.length; ++binderIdx) {
              elementsWithBindings[binderIdx] = elementsWithBindingsDynamic[binderIdx];
            }
            var viewRootNodes;
            if (protoView.isTemplateElement) {
              var childNode = DOM.firstChild(DOM.content(rootElementClone));
              viewRootNodes = [];
              while (childNode != null) {
                ListWrapper.push(viewRootNodes, childNode);
                childNode = DOM.nextSibling(childNode);
              }
            } else {
              viewRootNodes = [rootElementClone];
            }
            var binders = protoView.elementBinders;
            var boundTextNodes = [];
            var boundElements = ListWrapper.createFixedSize(binders.length);
            var contentTags = ListWrapper.createFixedSize(binders.length);
            for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
              var binder = binders[binderIdx];
              var element = void 0;
              if (binderIdx === 0 && protoView.rootBindingOffset === 1) {
                element = rootElementClone;
              } else {
                element = elementsWithBindings[binderIdx - protoView.rootBindingOffset];
              }
              boundElements[binderIdx] = element;
              var childNodes = DOM.childNodes(DOM.templateAwareRoot(element));
              var textNodeIndices = binder.textNodeIndices;
              for (var i = 0; i < textNodeIndices.length; i++) {
                ListWrapper.push(boundTextNodes, childNodes[textNodeIndices[i]]);
              }
              var contentTag = null;
              if (isPresent(binder.contentTagSelector)) {
                contentTag = new Content(element, binder.contentTagSelector);
              }
              contentTags[binderIdx] = contentTag;
            }
            var view = new viewModule.RenderView(protoView, viewRootNodes, boundTextNodes, boundElements, contentTags);
            for (var binderIdx = 0; binderIdx < binders.length; binderIdx++) {
              var binder = binders[binderIdx];
              var element = boundElements[binderIdx];
              if (binder.hasStaticComponent()) {
                var childView = this._createView(binder.nestedProtoView, null);
                ViewFactory.setComponentView(this._shadowDomStrategy, view, binderIdx, childView);
              }
              if (isPresent(binder.eventLocals) && isPresent(binder.localEvents)) {
                for (var i = 0; i < binder.localEvents.length; i++) {
                  this._createEventListener(view, element, binderIdx, binder.localEvents[i].name, binder.eventLocals);
                }
              }
            }
            return view;
          },
          _createEventListener: function(view, element, elementIndex, eventName, eventLocals) {
            this._eventManager.addEventListener(element, eventName, (function(event) {
              view.dispatchEvent(elementIndex, eventName, event);
            }));
          }
        }, {setComponentView: function(shadowDomStrategy, hostView, elementIndex, componentView) {
            var element = hostView.boundElements[elementIndex];
            var lightDom = shadowDomStrategy.constructLightDom(hostView, componentView, element);
            shadowDomStrategy.attachTemplate(element, componentView);
            hostView.lightDoms[elementIndex] = lightDom;
            hostView.componentChildViews[elementIndex] = componentView;
          }});
      }());
      $__export("ViewFactory", ViewFactory);
      Object.defineProperty(ViewFactory, "annotations", {get: function() {
          return [new Injectable()];
        }});
      Object.defineProperty(ViewFactory, "parameters", {get: function() {
          return [[new Inject(VIEW_POOL_CAPACITY)], [EventManager], [ShadowDomStrategy]];
        }});
      Object.defineProperty(ViewFactory.prototype.createInPlaceHostView, "parameters", {get: function() {
          return [[], [pvModule.RenderProtoView]];
        }});
      Object.defineProperty(ViewFactory.prototype.getView, "parameters", {get: function() {
          return [[pvModule.RenderProtoView]];
        }});
      Object.defineProperty(ViewFactory.prototype.returnView, "parameters", {get: function() {
          return [[viewModule.RenderView]];
        }});
      Object.defineProperty(ViewFactory.prototype._createView, "parameters", {get: function() {
          return [[pvModule.RenderProtoView], []];
        }});
      Object.defineProperty(ViewFactory.setComponentView, "parameters", {get: function() {
          return [[ShadowDomStrategy], [viewModule.RenderView], [assert.type.number], [viewModule.RenderView]];
        }});
    }
  };
});
//# sourceMappingURL=view_factory.js.map

//# sourceMappingURL=../../../../src/render/dom/view/view_factory.js.map