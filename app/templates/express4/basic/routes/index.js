/**
 * Module dependencies
 */

var friendsList = [
    {
        'age' : 30,
        'eyeColor' :'green',
        'name' :'Slater Blackwell',
        'gender' :'male',
        'company' :'CIRCUM',
        'email' :'slaterblackwell@circum.com',
        'phone' :'+1 (901) 572-2607',
        'address' :'791 Rogers Avenue, Gilmore, Colorado, 3796',
        'about' :'Cillum esse ex sunt velit mollit incididunt magna aute ex ut eu eiusmod id qui. Do ea nisi voluptate esse fugiat id quis excepteur culpa magna cillum. Amet quis duis cupidatat cupidatat do ex. Do aliquip veniam consectetur nostrud irure incididunt ut est labore adipisicing consequat anim proident.\r\n'
    },
    {
        'age' : 33,
        'eyeColor' :'green',
        'name' :'Minnie Bird',
        'gender' :'female',
        'company' :'RAMEON',
        'email' :'minniebird@rameon.com',
        'phone' :'+1 (910) 505-2397',
        'address' :'396 Pineapple Street, Wyano, Kansas, 6848',
        'about' :'Quis aliquip quis eu duis anim consectetur dolor qui dolore. Aute labore magna ipsum est veniam dolore sit labore consectetur aute pariatur exercitation. Labore minim magna cillum velit esse nulla dolore sint cupidatat veniam dolore. Deserunt pariatur mollit do ad cillum. Cupidatat excepteur id pariatur eu culpa veniam quis incididunt nostrud dolor. Nostrud cillum ullamco voluptate et commodo quis cupidatat ullamco ad tempor labore adipisicing.\r\n'
    },
    {
        'age' : 35,
        'eyeColor' :'brown',
        'name' :'Jeanne Buckley',
        'gender' :'female',
        'company' :'CRUSTATIA',
        'email' :'jeannebuckley@crustatia.com',
        'phone' :'+1 (840) 452-2623',
        'address' :'855 Corbin Place, Lopezo, West Virginia, 2963',
        'about' :'Veniam aute amet incididunt aliquip aute Lorem. Nostrud minim excepteur velit eiusmod pariatur amet. Duis pariatur reprehenderit nulla amet qui et. Ullamco ullamco irure sint et. Qui elit proident dolor esse elit id cillum aliquip pariatur aute adipisicing id cillum. Sit sint nulla aute commodo eu excepteur est.\r\n'
    },
    {
        'age' : 35,
        'eyeColor' :'green',
        'name' :'Magdalena Carney',
        'gender' :'female',
        'company' :'OZEAN',
        'email' :'magdalenacarney@ozean.com',
        'phone' :'+1 (948) 485-2087',
        'address' :'638 Voorhies Avenue, Kapowsin, Missouri, 7399',
        'about' :'Enim irure elit excepteur deserunt nulla. Adipisicing ullamco nulla sit esse Lorem. Lorem duis laborum ad incididunt fugiat sit excepteur eiusmod et sint sit.\r\n'
    },
    {
        'age' : 38,
        'eyeColor' :'blue',
        'name' :'Holly Nguyen',
        'gender' :'female',
        'company' :'TETAK',
        'email' :'hollynguyen@tetak.com',
        'phone' :'+1 (955) 442-3514',
        'address' :'942 Boulevard Court, Elliott, Hawaii, 7026',
        'about' :'Consequat excepteur irure consequat cillum. Reprehenderit cupidatat do nostrud culpa laboris. Ea reprehenderit proident nostrud dolore ipsum irure occaecat excepteur quis in. Culpa ad ex laboris labore eiusmod do eu. Magna minim fugiat do esse.\r\n'
    },
    {
        'age' : 27,
        'eyeColor' :'blue',
        'name' :'Bullock Cortez',
        'gender' :'male',
        'company' :'MAGNEATO',
        'email' :'bullockcortez@magneato.com',
        'phone' :'+1 (926) 594-3934',
        'address' :'337 Ingraham Street, Edgar, Guam, 8006',
        'about' :'Id enim pariatur in ea sunt amet nostrud commodo id dolor adipisicing fugiat enim elit. Sit esse qui ea occaecat pariatur non. Non nisi do exercitation nulla ullamco consequat est occaecat aliqua tempor amet elit.\r\n'
    },
    {
        'age' : 35,
        'eyeColor' :'brown',
        'name' :'Sofia Mccoy',
        'gender' :'female',
        'company' :'ZILLAR',
        'email' :'sofiamccoy@zillar.com',
        'phone' :'+1 (820) 476-2753',
        'address' :'498 Garfield Place, Sanford, Wisconsin, 1047',
        'about' :'Tempor est sit minim nulla minim voluptate amet. Nisi sunt mollit veniam ullamco deserunt minim laborum sit eu et voluptate dolor amet sunt. Reprehenderit irure excepteur Lorem proident Lorem non proident.\r\n'
    }
];


exports.index = function(req, res) {
    res.render('index',{title :'Polymer App'});
};

exports.getFriends = function(req, res) {
    res.set('Content-Type', 'application/json');
    res.send(friendsList);
};
