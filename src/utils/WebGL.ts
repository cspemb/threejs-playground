class WebGL {
  static isWebGLAvailable() {
    try {
      const canvas = document.createElement("canvas");
      return !!(
        window.WebGLRenderingContext &&
        (canvas.getContext("webgl") || canvas.getContext("experimental-webgl"))
      );
    } catch (e) {
      return false;
    }
  }

  static isWebGL2Available() {
    try {
      const canvas = document.createElement("canvas");
      return !!(window.WebGL2RenderingContext && canvas.getContext("webgl2"));
    } catch (e) {
      return false;
    }
  }

  static getWebGLErrorMessage() {
    return this.getErrorMessage(1);
  }

  static getWebGL2ErrorMessage() {
    return this.getErrorMessage(2);
  }

  static getErrorMessage(version: number) {
    const versions = [
      { name: "WebGL", context: window.WebGLRenderingContext },
      { name: "WebGL 2", context: window.WebGL2RenderingContext },
    ];

    return `Unfortunately, your ${
      versions[version].context ? "graphics card" : "browser"
    } does not seem to support ${
      versions[version].name
    } which is required for this page to function.`;
  }
}

export default WebGL;
