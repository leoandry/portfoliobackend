import React from 'react';
import { Switch, Route } from 'react-router-dom';

/* import nama Class per file fromnya lokasi file tsb */
import Pribadi from './pribadi/pribadi.component';
import Addpribadi from './pribadi/addpribadi.component';
import Editpribadi from './pribadi/editpribadi.component';
import Kontak from './kontak/kontak.component';
import Addkontak from './kontak/addkontak.component';
import Editkontak from './kontak/editkontak.component';
import Pendidikan from './pendidikan/pendidikan.component';
import Addpendidikan from './pendidikan/addpendidikan.component';
import Editpendidikan from './pendidikan/editpendidikan.component';
import Sosmed from './sosialmedia/sosmed.component';
import Addsosmed from './sosialmedia/addsosmed.component';
import Editsosmed from './sosialmedia/editsosmed.component';
import Pengalaman from './pengalaman/pengalaman.component';
import Addpengalaman from './pengalaman/addpengalaman.component';
import Editpengalaman from './pengalaman/editpengalaman.component';
import Karya from './karya/karya.component';
import Addkarya from './karya/addkarya.component';
import Editkarya from './karya/editkarya.component';

/* pathnya namafile tanpa ext componentnya nama Class */
const Menu = () => (
    <Switch>
        <Route exact path ="/" component={Pribadi}/>
        <Route path = "/pribadi" component={Pribadi}/>
        <Route path = "/addpribadi" component={Addpribadi}/>
        <Route path = "/editpribadi/:id" component={Editpribadi}/>
        <Route path = "/pendidikan" component={Pendidikan}/>
        <Route path = "/addpendidikan" component={Addpendidikan}/>
        <Route path = "/editpendidikan/:id" component={Editpendidikan}/>
        <Route path = "/sosmed" component={Sosmed}/>
        <Route path = "/addsosmed" component={Addsosmed}/>
        <Route path = "/editsosmed/:id" component={Editsosmed}/>
        <Route path = "/pengalaman" component={Pengalaman}/>
        <Route path = "/addpengalaman" component={Addpengalaman}/>
        <Route path = "/editpengalaman/:id" component={Editpengalaman}/>
        <Route path = "/karya" component={Karya}/>
        <Route path = "/addkarya" component={Addkarya}/>
        <Route path = "/editkarya/:id" component={Editkarya}/>
        <Route path = "/kontak" component={Kontak}/>
        <Route path = "/addkontak" component={Addkontak}/>
        <Route path = "/editkontak/:id" component={Editkontak}/>
    </Switch>
)

export default Menu;