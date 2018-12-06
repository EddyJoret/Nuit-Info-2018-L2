actions = {   //---------- ACTIONS ---
  action1(data) {
    //...
    model.samPresent({key1: 'value'});
  },
  //...
};

model = {   //-------------- MODEL ---
  key1: '',
  //... autres propriétés

  samPresent(data) {
    //...
    if (has.call(data, 'key1')) {
      this.key1 = data.key1;
    }
    state.samUpdate(this);
  }
};

state = {   //---------------------------- STATE ---
  //... propriétés
  samUpdate(model) {
    //...
    this.samRepresent(model);
  },
  samRepresent(model) {
    let representation = view.generate1(model,this);
    view.samDisplay(representation);
  }
}

view = {   //------------------------------ VIEW ---
  samDisplay(representation) {
    getElementById('app').innerHTML = representation;
  },

  generate1(model, state) {
    return /* code HTML */ },
}
