/*
   Created with ExtForge
   https://jwklong.github.io/extforge
*/
(async function(Scratch) {
    const variables = {};


    if (!Scratch.extensions.unsandboxed) {
        alert("This extension needs to be unsandboxed to run!")
        return
    }

    const ExtForge = {
        Broadcasts: new function() {
            this.raw_ = {};
            this.register = (name, blocks) => {
                this.raw_[name] = blocks;
            };
            this.execute = async (name) => {
                if (this.raw_[name]) {
                    await this.raw_[name]();
                };
            };
        },

        Variables: new function() {
            this.raw_ = {};
            this.set = (name, value) => {
                this.raw_[name] = value;
            };
            this.get = (name) => {
                return this.raw_[name] ?? null;
            }
        },

        Vector: class {
            constructor(x, y) {
                this.x = x;
                this.y = y;
            }

            static from(v) {
                if (v instanceof ExtForge.Vector) return v
                if (v instanceof Array) return new ExtForge.Vector(Number(v[0]), Number(v[1]))
                if (v instanceof Object) return new ExtForge.Vector(Number(v.x), Number(v.y))
                return new ExtForge.Vector()
            }

            add(v) {
                return new Vector(this.x + v.x, this.y + v.y);
            }

            set(x, y) {
                return new Vector(x ?? this.x, y ?? this.y)
            }
        },

        Utils: {
            setList: (list, index, value) => {
                [...list][index] = value;
                return list;
            },
            lists_foreach: {
                index: [0],
                value: [null],
                depth: 0
            },
            countString: (x, y) => {
                return y.length == 0 ? 0 : x.split(y).length - 1
            }
        }
    }

    class Extension {
        getInfo() {
            return {
                "id": "texeID",
                "name": "Texe",
                "color1": "#0c4535",
                "blocks": [{
                    "opcode": "block_5211a71bddf6418b",
                    "text": "+function [b8322110f4529fab]",
                    "blockType": "command",
                    "arguments": {
                        "b8322110f4529fab": {
                            "type": "string"
                        }
                    }
                }]
            }
        }
        async block_5211a71bddf6418b(args) {
            eval(args["b8322110f4529fab"])
        }
    }

    let extension = new Extension();
    // code compiled from extforge
    Scratch.vm.on('PROJECT_RUN_START', (async () => {
        await extension["block_5211a71bddf6418b"]({
            "b8322110f4529fab": String("// script.js const htmlCode = document.getElementById('htmlCode'); const cssCode = document.getElementById('cssCode'); const jsCode = document.getElementById('jsCode'); const previewFrame = document.getElementById('preview');  const updatePreview = () => {     // Get the content of each editor     const html = htmlCode.value;     const css = cssCode.value;     const js = jsCode.value;      // Construct the full HTML content for the iframe     const content = `         <!DOCTYPE html>         <html>         <head>             <style>${css}</style>         </head>         <body>             ${html}             <script>${js}</script>         </body>         </html>     `;      // Write the content to the iframe     const iframeDoc = previewFrame.contentWindow.document;     iframeDoc.open();     iframeDoc.write(content);     iframeDoc.close(); };  // Event listeners to update the preview whenever code changes htmlCode.addEventListener('input', updatePreview); cssCode.addEventListener('input', updatePreview); jsCode.addEventListener('input', updatePreview);  // Initial call to display empty content or default code updatePreview();")
        })
    }));

    Scratch.extensions.register(extension);
})(Scratch);
