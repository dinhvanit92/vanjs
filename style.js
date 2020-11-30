function main() {
    let a = document.getElementById("text").value;
    let k = covert(a)
    document.getElementById("ketqua").innerHTML = k;
}

function covert(a) {
    return k = a.split('').sort().join('');
}

function covert1() {
    let a = document.getElementById("text").value;
    let k = a.split(' ');
    let ketqua = [];
    for (let x = 0; x < k.length; x++) {
        ketqua.push(k[x].charAt(0).toUpperCase()+k[x].slice(1));
    }
    console.log(ketqua)
    let kq = ketqua.join(' ');
    document.getElementById("ketqua").innerHTML = kq;
}
function covert2() {
    let a = document.getElementById("text1").value;
    let b = document.getElementById("text2").value;
    let d = a.split(',');
    let e = b.split(',');
    // console.log(d.length);
    if (d.length>e.length) {
        let i = d.length
        let m = d.length-e.length
        let newarr = [];
        for (let s = 0; s < m; s++) {
            newarr.push(0);
        }
        let w = e.concat(newarr)
        // console.log(w)
        let arr =[];
        
        for (let k = 0; k < i; k++) {
            // console.log(+d[k] + +w[k]);
           arr.push(+d[k] + +w[k]);
        }
        document.getElementById("ketqua").innerHTML = arr;
        // console.log(arr)
    }else{
        let i = e.length
        let m = e.length-d.length
        let newarr = [];
        for (let s = 0; s < m; s++) {
            newarr.push(0);
        }
        let w = d.concat(newarr)
        // console.log(w)
        let arr =[];
        for (let k = 0; k < i; k++) {
            // console.log(+d[k] + +w[k]);
           arr.push(+e[k] + +w[k]);
        }
        // console.log(arr)
        document.getElementById("ketqua").innerHTML = arr;
    }


}
function covert3() {
    let a = document.getElementById("text").value;
    let k = a.split(',');
    let arr = [];
    k.forEach(element => {
       let i = +element;
        if (i) {
            arr.push(i)
        }
    });
    document.getElementById("ketqua").innerHTML = arr;
    

}
function covert4() {
    // let a = document.getElementById("text").value;
    var student =  { 
        name : "David Rayy", 
        sclass : "VI", 
        rollno : 12  };
    let arr = Object.keys(student).toString();
    document.getElementById("ketqua").innerHTML = arr;
}

function covert5() {
    let a = document.getElementById("text").value;
    let m = a.split('');
    // console.log(m);
    var arr = [];
    for (let i = 0; i < m.length; i++) {
        for (let k = i+1; k < m.length+1; k++) {
           let kq =  arr.push(this.slice(i,k));
        }
    }
    console.log(kq);
}