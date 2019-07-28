import t0 from "../../assets/img/tileset/t0.png"
import t1 from "../../assets/img/tileset/t1.png"
import t2 from "../../assets/img/tileset/t2.png"
import t3 from "../../assets/img/tileset/t3.png"
import t4 from "../../assets/img/tileset/t4.png"
import t5 from "../../assets/img/tileset/t5.png"
import t6 from "../../assets/img/tileset/t6.png"
import t7 from "../../assets/img/tileset/t7.png"
import t8 from "../../assets/img/tileset/t8.png"
import t9 from "../../assets/img/tileset/t9.png"
import t10 from "../../assets/img/tileset/t10.png"
import t11 from "../../assets/img/tileset/t11.png"
import t12 from "../../assets/img/tileset/t12.png"

const tileset = ( value ) => {
    switch ( value ) {
        case 0:
            return t0;
        case 1:
            return t1;
        case 2:
            return t2;
        case 3:
            return t3;
        case 4:
            return t4;
        case 5:
            return t5;
        case 6:
            return t6;
        case 7:
            return t7;
        case 8:
            return t8;
        case 9:
            return t9;
        case 10:
            return t10;
        case 11:
            return t11;
        case 12:
            return t12;
        default:
            return t0;
    }
};

export default tileset;