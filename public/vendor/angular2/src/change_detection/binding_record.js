System.register(["angular2/src/facade/lang", "angular2/src/reflection/types", "./parser/ast", "./directive_record"], function($__export) {
  "use strict";
  var isPresent,
      isBlank,
      SetterFn,
      AST,
      DirectiveIndex,
      DirectiveRecord,
      DIRECTIVE,
      ELEMENT,
      TEXT_NODE,
      BindingRecord;
  return {
    setters: [function($__m) {
      isPresent = $__m.isPresent;
      isBlank = $__m.isBlank;
    }, function($__m) {
      SetterFn = $__m.SetterFn;
    }, function($__m) {
      AST = $__m.AST;
    }, function($__m) {
      DirectiveIndex = $__m.DirectiveIndex;
      DirectiveRecord = $__m.DirectiveRecord;
    }],
    execute: function() {
      DIRECTIVE = "directive";
      ELEMENT = "element";
      TEXT_NODE = "textNode";
      BindingRecord = (function() {
        function BindingRecord(mode, implicitReceiver, ast, elementIndex, propertyName, setter, directiveRecord) {
          this.mode = mode;
          this.implicitReceiver = implicitReceiver;
          this.ast = ast;
          this.elementIndex = elementIndex;
          this.propertyName = propertyName;
          this.setter = setter;
          this.directiveRecord = directiveRecord;
        }
        return ($traceurRuntime.createClass)(BindingRecord, {
          callOnChange: function() {
            return isPresent(this.directiveRecord) && this.directiveRecord.callOnChange;
          },
          isOnPushChangeDetection: function() {
            return isPresent(this.directiveRecord) && this.directiveRecord.isOnPushChangeDetection();
          },
          isDirective: function() {
            return this.mode === DIRECTIVE;
          },
          isElement: function() {
            return this.mode === ELEMENT;
          },
          isTextNode: function() {
            return this.mode === TEXT_NODE;
          }
        }, {
          createForDirective: function(ast, propertyName, setter, directiveRecord) {
            return new BindingRecord(DIRECTIVE, 0, ast, 0, propertyName, setter, directiveRecord);
          },
          createForElement: function(ast, elementIndex, propertyName) {
            return new BindingRecord(ELEMENT, 0, ast, elementIndex, propertyName, null, null);
          },
          createForHostProperty: function(directiveIndex, ast, propertyName) {
            return new BindingRecord(ELEMENT, directiveIndex, ast, directiveIndex.elementIndex, propertyName, null, null);
          },
          createForTextNode: function(ast, elementIndex) {
            return new BindingRecord(TEXT_NODE, 0, ast, elementIndex, null, null, null);
          }
        });
      }());
      $__export("BindingRecord", BindingRecord);
      Object.defineProperty(BindingRecord, "parameters", {get: function() {
          return [[assert.type.string], [assert.type.any], [AST], [assert.type.number], [assert.type.string], [SetterFn], [DirectiveRecord]];
        }});
      Object.defineProperty(BindingRecord.createForDirective, "parameters", {get: function() {
          return [[AST], [assert.type.string], [SetterFn], [DirectiveRecord]];
        }});
      Object.defineProperty(BindingRecord.createForElement, "parameters", {get: function() {
          return [[AST], [assert.type.number], [assert.type.string]];
        }});
      Object.defineProperty(BindingRecord.createForHostProperty, "parameters", {get: function() {
          return [[DirectiveIndex], [AST], [assert.type.string]];
        }});
      Object.defineProperty(BindingRecord.createForTextNode, "parameters", {get: function() {
          return [[AST], [assert.type.number]];
        }});
    }
  };
});
//# sourceMappingURL=binding_record.js.map

//# sourceMappingURL=../../src/change_detection/binding_record.js.map