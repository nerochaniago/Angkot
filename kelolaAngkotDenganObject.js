function Angkot(supir, trayek, penumpang, kas) {
    this.supir = supir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang) {
        if (this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } else {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        }
    }

    this.penumpangTurun = function (namaPenumpang, bayar) {
        for (var i = 0; i < this.penumpang.length; i++) {
            if (this.penumpang[i] == namaPenumpang) {
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return this.penumpang;
            } else if (i == this.penumpang.length - 1) {
                console.log('tidak ada nama ' + namaPenumpang + ' tersebut di dalam angkot.')
            }
        }
        return this.kas;
    }

}

var angkot1 = new Angkot('nero', ['ciuyah', 'rangkasbitung'], [], 0);