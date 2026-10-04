export default function LayoutScript() {
    if (window.LayoutID == undefined) window.LayoutID = window.LayoutID = Math.floor(Math.random() * 1000000000);
    console.log(" => layout.js... LayoutID = " + window.LayoutID );
}