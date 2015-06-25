import DS from 'ember-data';

const User = DS.Model.extend({
  name: DS.attr()
});

User.reopenClass({
  FIXTURES: [
    { id: 1, name:'stef'}
  ]
});

export default User;
