const magik = magikcraft.io;

function arrow(repeats = 10000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000, delay = 50) {
    magik.dixit('Arrow!');
    const sender = magik.getSender();
    const arrow = magik.type("entity.Arrow").class;
    
    const hurl = (thing) => () => sender.launchProjectile(thing)

    const volley = () => magik.doNTimes(hurl(arrow), repeats, delay, null);

    magik.doNTimes(volley, repeats, delay*10, null);
}