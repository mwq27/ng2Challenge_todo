System.register(["angular2/di"], function($__export) {
  "use strict";
  var OpaqueToken,
      appComponentRefToken,
      appChangeDetectorToken,
      appElementToken,
      appComponentAnnotatedTypeToken,
      appDocumentToken;
  return {
    setters: [function($__m) {
      OpaqueToken = $__m.OpaqueToken;
    }],
    execute: function() {
      appComponentRefToken = new OpaqueToken('ComponentRef');
      $__export("appComponentRefToken", appComponentRefToken);
      appChangeDetectorToken = new OpaqueToken('AppChangeDetector');
      $__export("appChangeDetectorToken", appChangeDetectorToken);
      appElementToken = new OpaqueToken('AppElement');
      $__export("appElementToken", appElementToken);
      appComponentAnnotatedTypeToken = new OpaqueToken('AppComponentAnnotatedType');
      $__export("appComponentAnnotatedTypeToken", appComponentAnnotatedTypeToken);
      appDocumentToken = new OpaqueToken('AppDocument');
      $__export("appDocumentToken", appDocumentToken);
    }
  };
});
//# sourceMappingURL=application_tokens.js.map

//# sourceMappingURL=../../src/core/application_tokens.js.map