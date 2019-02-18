(() => {

  makeEditorFullWidth();
  addCodeMirrorStyle();

  function makeEditorFullWidth() {
    const scriptingCode = document.getElementById('ctl00_cph1_tab1').children[1];
    const codeEditor = scriptingCode.children[1].children[0].children[3];
    codeEditor.removeChild(codeEditor.children[0]);
    codeEditor.children[0].colSpan = 3
  }

  function addCodeMirrorStyle() {
    const style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = `
    .CodeMirror {
      border: 1px solid #eee;
      height: auto;
    }
    `;
    document.getElementsByTagName('body')[0].appendChild(style);
  }

})()