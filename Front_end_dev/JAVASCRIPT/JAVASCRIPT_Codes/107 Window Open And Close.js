/**
 * - BOM [Browser Object Model]
 * - open(URL, NAME | TARGET, WIN FEATURES, HOSTORY REPLACE)
 * - close()
 * - windows Features
 * 
 * --- left[Num]
 * --- top [Num]
 * --- height [Num]
 * --- menubar [yes || no]
 */

setTimeout(() => {
    window.open(
        "https://google.com",
        "_blank",
        "width=400, height=400, left=200, top=10"
    );
}, 2000);
