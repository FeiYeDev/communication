import { createStore } from 'redux';
const init = {
    showTab:'E-mails',
    tabPan:[
        {name:'E-mails',value:'fa fa-envelope-o',rotate:'rotate(0deg)'},
        {name:'Chat',value:'fa fa-commenting-o',rotate:'rotate(0deg)'},
        {name:'Supports',value:"fa fa-user-circle-o",rotate:'rotate(0deg)' },
    ],
    showSetting:false,
};
const reducer = (state = init, action) => {
    switch (action.type) {
        case 'modify':
            return {
                ...state,
                showTab:action.payload
            } 
        case 'setting':
            return {
                ...state,
                showSetting:action.payload
            } 
        default:
            return state;  }};
const store = createStore(reducer);
export {store};