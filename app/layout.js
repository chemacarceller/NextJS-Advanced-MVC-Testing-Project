export default function LayoutScript() {
    window.LayoutID = Math.floor(Math.random() * 1000000000);

    console.log("Testing layout.js... LayoutID = " + window.LayoutID );
}