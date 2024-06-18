/**
 * => What is JSON ?
 * - JavaScript Object Notation.
 * - Format For Sharing Data Between Server And Client.
 * - JSOM Derived From JavaScript.
 * - Alternative to XML.
 * - File Extention Is .Json.
 * => Why Json ?
 * - Easy to use and read.
 * - Used for most proramming languages and it's frameworks
 * - You can convert JSON object and vice versa
 * =>           JSON         vs          XML
    ===================================================
    = Text Based Format      = Markup Language        =
    = Lightweight            = Heavier                =
    = Does Not Use Tags      = Using Tags             =
    = Shorter                = Not Short              =
    = Can Use Arrays         = Cannot Use Arrays      =
    = Not Support Comments   = Support Comments       =
    ===================================================
*/

/* JSON object example */
{
    "widget": {
      "debug": "on",
      "window": {
        "title": "Sample Konfabulator Widget",
        "name": "main_window",
        "width": 500,
        "height": 500
      },
      "image": {
        "src": "Images/Sun.png",
        "name": "sun1",
        "hOffset": 250,
        "vOffset": 250,
        "alignment": "center"
      },
      "text": {
        "data": "Click Here",
        "size": 36,
        "style": "bold",
        "name": "text1",
        "hOffset": 250,
        "vOffset": 100,
        "alignment": "center",
        "onMouseUp": "sun1.opacity = (sun1.opacity / 100) * 90;"
      }
    }
}


