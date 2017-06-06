/**
 * Created by chaochen on 04/06/2017.
 */
import Form from './components/nav/Form.vue'
import nav from './components/Nav.vue'

let routes = [
  {
    path: '/',
    component: nav,
    name: 'test',
    iconCls: 'el-icon-message',
    hidden: false,
    children: [
      { path: '/form', component: Form, name: 'Form' }
    ]
  }
];

export default routes;
