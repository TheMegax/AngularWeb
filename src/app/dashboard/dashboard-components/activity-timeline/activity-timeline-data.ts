export interface Activity{
    name:string;
    image:string;
    commentTime:string;
    comment:string;

    bottomImage:string;
    buttonColor:string;

}

export const activities:Activity[]=[
    {
        name:'Ministerio de Salud',
        image:'assets/images/News/unnamed.jpg',
        commentTime:'Hace 3 minutos.',
        comment:'Campaña Invierno 2023: Cuidémonos de las enfermedades respiratorias https://www.minsal.cl/campana-enfermedades-respiratorias/',

        bottomImage:'assets/images/News/Campana-InviernoMASCARILLA_Banners-Web_660x200.png',
        buttonColor:''



    }
]
