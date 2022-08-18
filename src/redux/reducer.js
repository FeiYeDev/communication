const actions = {
    modifyButton: (connection) => {
        return ({
            type: 'modify',
            payload: { connection },
          })
    },
    changeSetting: (connection) => {
        return ({
            type: 'setting',
            payload: { connection },
          })
    },
  };
  
  export default actions;
  