import { Plugin, MarkdownView } from 'obsidian';

export default class UnderlinePlugin extends Plugin {
  async onload() {
    console.log('Loading Underline Plugin...');

    // Register underline command
    this.addCommand({
      id: 'insert-underline',
      name: 'Insert <ins>',
      callback: () => {
        const view = this.app.workspace.getActiveViewOfType(MarkdownView);
        if (view) {
          const editor = view.editor;
          const selection = editor.getSelection();
          editor.replaceSelection(`<ins>${selection}</ins>`);
        }
      },
      hotkeys: [
        {
          modifiers: ['Mod'],
          key: 'u',
        },
      ],
    });
  }

  onunload() {
    console.log('Unloading Underline Plugin...');
  }
}

// Removed commands for:
// - <center>text</center>: cmd/ctrl+Shift+C
// - [[#heading]]: cmd/ctrl+#
// - [[#^block]]: cmd/ctrl+^
