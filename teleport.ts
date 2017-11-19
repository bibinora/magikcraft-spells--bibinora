const magik = magikcraft.io;

function teleport(name = "place.default") {
    const there = magik.memento.getItem(name);
    if (there) {
        magik.ianuae(there);
    } else {
        const here = magik.hic();
        magik.memento("place.default", here);
    }
}