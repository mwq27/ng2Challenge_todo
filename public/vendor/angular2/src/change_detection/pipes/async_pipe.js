System.register(["angular2/src/facade/async", "angular2/src/facade/lang", "./pipe", "../change_detector_ref"], function($__export) {
  "use strict";
  var Observable,
      ObservableWrapper,
      isBlank,
      isPresent,
      Pipe,
      NO_CHANGE,
      ChangeDetectorRef,
      AsyncPipe,
      AsyncPipeFactory;
  return {
    setters: [function($__m) {
      Observable = $__m.Observable;
      ObservableWrapper = $__m.ObservableWrapper;
    }, function($__m) {
      isBlank = $__m.isBlank;
      isPresent = $__m.isPresent;
    }, function($__m) {
      Pipe = $__m.Pipe;
      NO_CHANGE = $__m.NO_CHANGE;
    }, function($__m) {
      ChangeDetectorRef = $__m.ChangeDetectorRef;
    }],
    execute: function() {
      AsyncPipe = (function($__super) {
        function AsyncPipe(ref) {
          $traceurRuntime.superConstructor(AsyncPipe).call(this);
          this._ref = ref;
          this._latestValue = null;
          this._latestReturnedValue = null;
          this._subscription = null;
          this._observable = null;
        }
        return ($traceurRuntime.createClass)(AsyncPipe, {
          supports: function(obs) {
            return ObservableWrapper.isObservable(obs);
          },
          onDestroy: function() {
            if (isPresent(this._subscription)) {
              this._dispose();
            }
            ;
          },
          transform: function(obs) {
            if (isBlank(this._subscription)) {
              this._subscribe(obs);
              return null;
            }
            if (obs !== this._observable) {
              this._dispose();
              return this.transform(obs);
            }
            if (this._latestValue === this._latestReturnedValue) {
              return NO_CHANGE;
            } else {
              this._latestReturnedValue = this._latestValue;
              return this._latestValue;
            }
          },
          _subscribe: function(obs) {
            var $__0 = this;
            this._observable = obs;
            this._subscription = ObservableWrapper.subscribe(obs, (function(value) {
              return $__0._updateLatestValue(value);
            }), (function(e) {
              throw e;
            }));
          },
          _dispose: function() {
            ObservableWrapper.dispose(this._subscription);
            this._latestValue = null;
            this._latestReturnedValue = null;
            this._subscription = null;
            this._observable = null;
          },
          _updateLatestValue: function(value) {
            this._latestValue = value;
            this._ref.requestCheck();
          }
        }, {}, $__super);
      }(Pipe));
      $__export("AsyncPipe", AsyncPipe);
      Object.defineProperty(AsyncPipe, "parameters", {get: function() {
          return [[ChangeDetectorRef]];
        }});
      Object.defineProperty(AsyncPipe.prototype.transform, "parameters", {get: function() {
          return [[Observable]];
        }});
      Object.defineProperty(AsyncPipe.prototype._subscribe, "parameters", {get: function() {
          return [[Observable]];
        }});
      Object.defineProperty(AsyncPipe.prototype._updateLatestValue, "parameters", {get: function() {
          return [[Object]];
        }});
      AsyncPipeFactory = (function() {
        function AsyncPipeFactory() {}
        return ($traceurRuntime.createClass)(AsyncPipeFactory, {
          supports: function(obs) {
            return ObservableWrapper.isObservable(obs);
          },
          create: function(cdRef) {
            return new AsyncPipe(cdRef);
          }
        }, {});
      }());
      $__export("AsyncPipeFactory", AsyncPipeFactory);
    }
  };
});
//# sourceMappingURL=async_pipe.js.map

//# sourceMappingURL=../../../src/change_detection/pipes/async_pipe.js.map