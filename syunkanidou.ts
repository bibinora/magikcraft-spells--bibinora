const magik = magikcraft.io;

function syunkanidou() {
	const there = magik.memento.getItem();
    if(there){
     magik.ianuae(there);
    }else{
        const there = magik.hic();
        magik.memento(there);
    }
}
