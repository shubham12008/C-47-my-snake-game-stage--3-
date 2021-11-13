class Snake {

    constructor(){
        this.len =1;
        this.body = [];
        this.body[0] = createVector(10,10); 
        this.xdir = 0;
        this.ydir = 0;
}

setDir(x,y){
    this.xdir = x;
    this.ydir = y;
}

update(){
    let head = this.body[this.body.length-1].copy();
    this.body.shift();
    head.x += this.xdir;
    head.y += this.ydir;
    this.body.push(head);
}

grow(){
    let head = this.body[this.body.length-1].copy();
    this.len++;
    this.body.push(head);
}

eat(pos){
    let x = this.body[this.body.length-1].x;
    let y = this.body[this.body.length-1].y;
    if (x == pos.x && y == pos.y) {
       this.grow();
       score = score+1
        return true;
    }
    return false; 
}

show(){
    for(let i = 0; i < this.body.length; i++){
    fill(43,151,216);
    noStroke();
    rect( this.body[i].x, this.body[i].y, 1, 1);
} 
}

at_the_edge(){
    if(this.body.x >= 20 ){
        this.body.x = 0;
    }
   
}

}